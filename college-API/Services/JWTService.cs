using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace college_API.Services
{
    public class JWTService
    {
        // IConfiguration — To access the Key-values in the app settings.json
        public readonly IConfiguration _config;

        public JWTService(IConfiguration config)
        {
            _config = config;
        }

        public string GenerateToken(string name, string email, string phone)
        {
            // Step 1: Create a symmetric security key [JWTs are digitally signed not encrypted]
            // “Symmetric” means the same key is used to sign and later validate the token
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));

            // Step 2: Create signing credentials
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            // Step 3: Define user claims
            var claims = new Claim[]
            {
                new Claim("name", name),
                new Claim("email", email),
                new Claim("phone", phone)
            };

            // Step 4: Set token expiry
            var expires = DateTime.Now.AddMinutes(double.Parse(_config["Jwt:ExpiresMinutes"]));

            // Step 5: Create JWT token
            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Audience"],
                claims: claims,
                expires: expires,
                signingCredentials: cred
                );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
