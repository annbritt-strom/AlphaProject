using System.ComponentModel.DataAnnotations;

namespace WebApp.Models;

public class SignUpViewModel
{
    [Required]
    [DataType(DataType.Text)]
    [Display(Name = "First Name", Prompt = "Enter your full name")]
    public string FullName { get; set; } = null!;

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

    [Required]
    [DataType(DataType.Password)]
    [Compare(nameof(Password), ErrorMessage = "The passwords do not match.")]
    [Display(Name = "Confirm Password", Prompt = "Re-write your password")]
    public string ConfirmPassword { get; set; } = null!;

    [Range(typeof(bool), "true", "true", ErrorMessage ="You must accept the terms... pls we won't sell your soul")]
    public bool AcceptTerms { get; set; }
}
