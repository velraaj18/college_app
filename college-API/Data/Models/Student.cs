using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace college_API.Data.Models
{
    public class Student
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int StudentUID { get; set; }

        [Required]
        [Display(Name = "Student Name")]
        [StringLength(32)]
        public string StudentName { get; set; }

        [Required]
        [Display(Name = "DOB")]
        public DateTime DateOfBirth { get; set; }

        [Required]
        [Display(Name = "Email Address")]
        [EmailAddress]
        [StringLength(100)]
        public string Email { get; set; }

        [Required]
        [Display(Name = "Phone Number")]
        [Phone]
        [StringLength(15)]
        public string PhoneNumber { get; set; }

        [Display(Name = "Gender")]
        [StringLength(10)]
        [Required]
        public string Gender { get; set; }

        [Required]
        [Display(Name = "Address")]
        [StringLength(200)]
        public string Address { get; set; }

        [Display(Name = "City")]
        [StringLength(50)]
        public string City { get; set; }

        [Display(Name = "State/Province")]
        [StringLength(50)]
        public string State { get; set; }

        [Display(Name = "Postal Code")]
        [StringLength(20)]
        public string PostalCode { get; set; }

        [Display(Name = "Country")]
        [StringLength(50)]
        public string Country { get; set; }

        // One family for each student
        public virtual Family Family { get; set; }

        // One school education for each student
        public virtual Education Education { get; set; }

        // Multiple courses for each student
        public ICollection<Course> Courses { get; set; }
    }
}
