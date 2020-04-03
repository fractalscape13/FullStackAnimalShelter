using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace AnimalApi.Models
{
  public class AnimalApiContextFactory : IDesignTimeDbContextFactory<AnimalApiContext>
  {

    AnimalApiContext IDesignTimeDbContextFactory<AnimalApiContext>.CreateDbContext(string[] args)
    {
      IConfigurationRoot configuration = new ConfigurationBuilder()
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddJsonFile("appsettings.json")
        .Build();

      var builder = new DbContextOptionsBuilder<AnimalApiContext>();
      var connectionString = configuration.GetConnectionString("DefaultConnection");

      builder.UseMySql(connectionString);

      return new AnimalApiContext(builder.Options);
    }
  }
}