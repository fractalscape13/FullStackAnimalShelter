using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using AnimalApi.Models;
using AnimalApi.Helpers;

namespace AnimalApi.Services
{
  public interface IUserService
  {
    User Authenticate(string username, string password);
    IEnumerable<User> GetAll();
  }

  public class UserService : IUserService
  {
    private readonly AppSettings _appSettings;

    private AnimalApiContext _context;
    public UserService(IOptions<AppSettings> appSettings,AnimalApiContext context)
    {
      _context = context;
      _appSettings = appSettings.Value;
    }

    public User Authenticate(string username, string password)
    {
      var userList = _context.Users;
      var user = userList.SingleOrDefault(x => x.Username == username && x.Password == password);

      if (user == null)
      {
        return null;
      }

      var tokenHandler = new JwtSecurityTokenHandler();
      var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(new Claim[]
        {
          new Claim(ClaimTypes.Name, user.Id.ToString())
        }),
        Expires = DateTime.UtcNow.AddDays(1),
        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
      };
      var token = tokenHandler.CreateToken(tokenDescriptor);
      user.Token = tokenHandler.WriteToken(token);

      user.Password = null;

      return user;
    }

    public IEnumerable<User> GetAll()
    {
      return _context.Users;
    }
  }
}