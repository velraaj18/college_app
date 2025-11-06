using college_API.Data;
using college_API.Data.Models;
using college_API.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace college_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdmissionController : ControllerBase
    {
        private readonly CollegeDBContext _db;

        public AdmissionController(CollegeDBContext db)
        {
            _db = db;
        }

        [HttpPost]
        public IActionResult Post(Admission admission)
        {
            if (admission == null)
                return BadRequest(new { Message = "Admission data is missing." });

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _db.Students.Add(admission.Student);
            _db.SaveChanges(); // Needed to get StudentUID for linking others

            int studentId = admission.Student.StudentUID;        
            admission.Education.StudentUID = studentId;
            _db.Educations.Add(admission.Education);

            admission.Family.StudentUID = studentId;
            _db.Families.Add(admission.Family);

            if (admission.SelectedCourses != null && admission.SelectedCourses.Count > 0)
            {
                var selectedCourses = _db.Courses
                    .Where(c => admission.SelectedCourses.Contains(c.CourseId))
                    .ToList();

                admission.Student.Courses = selectedCourses;
            }

            _db.SaveChanges();

            return Ok(new { Message = "Admission submitted successfully!" });
        }

    }
}
