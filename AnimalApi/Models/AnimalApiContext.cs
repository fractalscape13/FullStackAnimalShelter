using Microsoft.EntityFrameworkCore;

namespace AnimalApi.Models
{
  public class AnimalApiContext : DbContext
  {
    public AnimalApiContext(DbContextOptions<AnimalApiContext> options)
      : base(options)
    {
    }
    
    public DbSet<Animal> Animals { get; set; }
    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      builder.Entity<Animal>()
        .HasData(
          new Animal { AnimalId = 1, Name = "Nanuk", Type = "dog", Breed = "husky" },
          new Animal { AnimalId = 2, Name = "Qiba", Type = "dog", Breed = "husky/malamute" },
          new Animal { AnimalId = 3, Name = "Meowsley", Type = "cat", Breed = "barn cat" },
          new Animal { AnimalId = 4, Name = "Hans Yolo", Type = "cat", Breed = "siamese" }
        );
      
      builder.Entity<User>()
        .HasData(
          new User { Id = 1, FirstName = "Joe", LastName = "Yolo", Username = "joe", Password = "password" }
        );
    }
  }
}