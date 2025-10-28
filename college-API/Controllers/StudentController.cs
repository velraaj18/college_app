using college_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace college_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly CollegeDBContext _db;

        public StudentController(CollegeDBContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var students = _db.Students.ToList();
            return Ok(students);
        }

        [HttpPost]
        public IActionResult Post(Student student)
        {
            _db.Students.Add(student);
            _db.SaveChanges();
            return Ok(student);
        }
    }
}
