using System.ComponentModel.DataAnnotations;

namespace Productive
{
    public class UserLoginRequest
    {
        [Required]
        [EmailAddress]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
    }
}