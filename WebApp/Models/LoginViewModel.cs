using System.ComponentModel.DataAnnotations;

namespace WebApp.Models;

public class LoginViewModel
{
    [Required]
    [DataType(DataType.EmailAddress)]
    [RegularExpression(@"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$", ErrorMessage = "Please enter a valid email")]
    [Display(Name = "Email", Prompt = "Enter your email")]
    public string Email { get; set; } = null!;

    [Required]
    [DataType(DataType.Password)]
    [RegularExpression(@"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$", ErrorMessage = "Password must be at least 8 characters long and contain at least one letter and one digit.")]
    [Display(Name = "Password", Prompt = "Enter your password")]
    public string Password { get; set; } = null!;

    public bool RememberMe { get; set; }
}
