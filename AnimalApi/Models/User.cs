using System.ComponentModel.DataAnnotations;

namespace AnimalApi.Models
{
  public class User
  {
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    [Required]
    [StringLength(25)]
    public string Username { get; set; }
    [Required]
    [StringLength(25)]
    public string Password { get; set; }
    public string Token { get; set; }
  }
}