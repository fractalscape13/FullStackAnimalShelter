using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using AnimalApi.Services;
using AnimalApi.Models;

namespace AnimalApi.Controllers
{
  [Authorize]
  [ApiController]
  [Route("api/[controller]")]
  [ApiVersion("1.0")]
  public class UsersController : ControllerBase
  {
    private IUserService _userService;
    private readonly AnimalApiContext _db;

    public UsersController(AnimalApiContext db, IUserService userService)
    {
      _db = db;
      _userService = userService;
    }

    // POST /users
    [AllowAnonymous]
    [HttpPost]
    public void Register([FromBody]User newUser)
    {
      _db.Users.Add(newUser);
      _db.SaveChanges();
    }

    // POST /users/authenticate
    [AllowAnonymous]
    [HttpPost("authenticate")]
    public IActionResult Authenticate([FromBody]User userParam)
    {
      var user = _userService.Authenticate(userParam.Username, userParam.Password);

      if (user == null)
      {
        return BadRequest(new { message = "Username or password is incorrect" });
      }
      else
      {
        return Ok(user);
      }
    }
    
    // GET /users
    [HttpGet]
    public IActionResult GetAll()
    {
      var users = _userService.GetAll();
      return Ok(users);
    }
  }
}