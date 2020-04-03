  
using System.ComponentModel.DataAnnotations;

namespace AnimalApi.Models
{
  public class Animal
  {
    public int AnimalId { get; set; }
    [Required]
    [StringLength(25)]
    public string Name { get; set; }
    [Required]
    [StringLength(25)]
    public string Type { get; set; }
    [Required]
    [StringLength(25)]
    public string Breed { get; set; }
    
  }
}