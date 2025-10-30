using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace college_API.Data.Models
{
    public class Family
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int FamilyUID { get; set; }

        [Required]
        [StringLength(50)]
        public string FatherName { get; set; }

        [Required]
        [StringLength(15)]
        public string FatherContact { get; set; }

        [Required]
        [StringLength(50)]
        public string FatherOccupation { get; set; }

        [Required]
        [StringLength(20)]
        public string FatherOccupationSector { get; set; }

        [Required]
        [StringLength(50)]
        public string MotherName { get; set; }

        [StringLength(15)]
        public string MotherContact { get; set; }

        [Required]
        [StringLength(50)]
        public string MotherOccupation { get; set; }

        [Required]
        [StringLength(20)]
        public string MotherOccupationSector { get; set; }

        [StringLength(100)]
        public string Address { get; set; }

        [Display(Name = "First Graduate")]
        public bool IsFirstGraduate { get; set; }

        // Foreign key to Student (one-to-one)
        [ForeignKey("Student")]
        public int StudentUID { get; set; }
        public Student Student { get; set; }
    }
}