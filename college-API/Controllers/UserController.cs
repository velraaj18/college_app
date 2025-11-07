using college_API.Data;
using college_API.Data.Models;
using college_API.DTO;
using college_API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace college_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public readonly CollegeDBContext _db;
        public readonly JWTService _jwt;

        public UserController(CollegeDBContext db, JWTService jwt)
        {
            _db = db;
            _jwt = jwt;
        }

        // Add the user into the Users table with the unique email and hashed password.
        // Register
        [HttpPost("register")]
        public IActionResult Register(User user)
        {
            //Check if there is any user already with the same email. If so, don't add the user.
            var isEmailExists = _db.Users.Where(x => x.Email == user.Email).ToList();
            if (isEmailExists.Count != 0)            
                return Conflict(new { message = "Email Already Registered" }); // Conflict => 409 status [Duplicate data]

            var hasher = new PasswordHasher<User>(); // PasswordHasher => to store hashed passwords. 

            var hashedPassword = hasher.HashPassword(user, user.Password);

            user.Password = hashedPassword;

            _db.Users.Add(user);
            _db.SaveChanges();

            // Generate JWT token to authorize the new user for the other APIs and handle session.
            var token = _jwt.GenerateToken(user.UserName, user.Email, user.PhoneNumber);

            return Ok(new { token, result = new { user.UserUID, user.UserName, user.Email, user.PhoneNumber } });
        }

        // Validate the user based on Email and password.
        // Login
        [HttpPost("login")]
        public IActionResult Login(UserLogin user)
        {
            var loggedUser = _db.Users.Where(x => x.Email == user.Email).FirstOrDefault();
            if(loggedUser == null)
            {
                return Unauthorized(new { Message = "Invalid Email Address"});
            }

            var hasher = new PasswordHasher<User>();
            var password = hasher.VerifyHashedPassword(loggedUser, loggedUser.Password, user.Password);
            if (password == PasswordVerificationResult.Failed)
                return Unauthorized(new { Message = "Invalid password (or) password doesn't match email" });

            // Generate JWT token to authorize the new user for the other APIs and handle session.
            var token = _jwt.GenerateToken(loggedUser.UserName, loggedUser.Email, loggedUser.PhoneNumber);

            return Ok(new { token, result = new { loggedUser.UserUID, loggedUser.UserName, loggedUser.Email, loggedUser.PhoneNumber } });
        }
    }
}
