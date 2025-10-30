using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace college_API.Data.Models
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserUID { get; set; }

        [Required]
        [StringLength(25)]
        public string UserName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]        
        public string PhoneNumber { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
