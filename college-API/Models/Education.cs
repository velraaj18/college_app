using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace college_API.Models
{
    public class Education
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EducationUID { get; set; }

        [Required]
        [StringLength(100)]
        public string SchoolName { get; set; }

        [Required]
        [StringLength(25)]
        public string MediumOfInstruction { get; set; }

        [StringLength(50)]
        [Required]
        public string MajorGroup { get; set; }

        [Required]
        public int? YearOfPassing { get; set; }

        [Required]
        public double Percentage { get; set; }

        // Foreign key to Student (one-to-many)
        public int StudentUID { get; set; }
        public Student Student { get; set; }
    }
}
