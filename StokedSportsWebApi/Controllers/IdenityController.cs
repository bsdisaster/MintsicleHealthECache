using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;



namespace Productive
{
    [Route("api/[controller]")] // api/identity
    [ApiController]
    public class IdentityController : ControllerBase
    {
        private readonly IIdentityService _identityService;
       
        public IdentityController(
            UserManager<IdentityUser> userManager,
            IOptionsMonitor<JwtConfig> optionsMonitor,
            IIdentityService identityService)
        {
            _identityService = identityService;
        }       

        [HttpPost]
        [Route("Create")]        
        public async Task<IActionResult> Register([FromBody] UserRegistrationDto user)        
        {
            var jwtToken = await _identityService.CreateAsync(user, ModelState);
            var fpAccount = await _identityService.GetFpAccount(user.Email);
            return Ok(new { JwtToken = jwtToken, UserId = fpAccount.Id, IsAuthenticated = true });
        }

        [HttpPost]
        [Route("GetToken")]
        public async Task<IActionResult> Login([FromBody] UserLoginRequest user)
        {
          //  var userInDb = await _identityService.GetUser(user.Email);
            var jwtToken = await _identityService.GetUserToken(user, ModelState);
            var fpAccount = await _identityService.GetFpAccount(user.Email);

            return Ok(new { JwtToken = jwtToken, UserId = fpAccount.Id, IsAuthenticated = true });
        }

        [HttpPost]
        [Route("Users")]
        public async Task<IActionResult> Users()
        {
            List<UserDto> users = new List<UserDto>();
            for (int i = 0; i < 30; i++)
            {
                users.Add(
                    new UserDto()
                    {
                        Email = $"testEmail{i}@testmai.com",
                        FirstName = $"TestFirst{i}",
                        LastName = $"TestLast{i}",
                        Username = $"UserName{i}",
                        Image = @"data:image/jpeg;base64,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"

                    });
                
            }
          
            return Ok(users);
        }
    }
}