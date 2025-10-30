using college_API.Data;
using college_API.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Add DBContext to the container.
builder.Services.AddDbContext<CollegeDBContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers();

// Added JWT service
builder.Services.AddScoped<JWTService>();

var key = builder.Configuration["Jwt:Key"];
var issuer = builder.Configuration["Jwt:Issuer"];
var audience = builder.Configuration["Jwt:Audience"];

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme,
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
