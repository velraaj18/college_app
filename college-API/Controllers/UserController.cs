using college_API.Data;
using college_API.Data.Models;
using college_API.DTO;
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

        public UserController(CollegeDBContext db)
        {
            _db = db;
        }

        // Add the user into the Users table with the unique email and hashed password.
        // Register
        [HttpPost]
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

            return Ok();
        }

        // Validate the user based on Email and password.
        // Login
        [HttpGet]
        public IActionResult Login(UserLogin user)
        {
            var loggedUser = _db.Users.Where(x => x.Email == user.Email).Single();
            if(loggedUser == null)
            {
                return Unauthorized(new { Message = "Invalid Email Address"});
            }

            var hasher = new PasswordHasher<User>();
            var password = hasher.VerifyHashedPassword(loggedUser, loggedUser.Password, user.Password);
            if (password == PasswordVerificationResult.Failed)
                return Unauthorized(new { Message = "Invalid password (or) password doesn't match email" });

            return Ok();
        }
    }
}
