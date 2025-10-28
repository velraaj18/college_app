using Microsoft.EntityFrameworkCore;

namespace college_API.Models
{
    public class CollegeDBContext : DbContext
    {
        public CollegeDBContext(DbContextOptions<CollegeDBContext> options) : base(options)
        {

        }

        public DbSet<Student> Students { get; set; }
        public DbSet<Family> Families { get; set; }
        public DbSet<Education> Educations { get; set; }
        public DbSet<Course> Courses { get; set; }
    }
}
