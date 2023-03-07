using System.Collections.Generic;
using System.Threading.Tasks;
using IdenityService.Data.DTOs.Requests;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;



namespace Productive
{
    [Route("api/identity")] // api/identity
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
        [Route("create")]        
        public async Task<IActionResult> Register([FromBody] UserRegistrationDto user)        
        {
            var jwtToken = await _identityService.CreateAsync(user, ModelState);
            var fpAccount = await _identityService.GetFpAccount(user.Email);
            return Ok(new { JwtToken = jwtToken, UserId = fpAccount.Id, IsAuthenticated = true });
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(UserLoginRequest user)
        {
            var jwtToken = await _identityService.GetUserToken(user, ModelState);
            //var fpAccount = await _identityService.GetFpAccount(user.UserName);

            return Ok(new { JwtToken = jwtToken, IsAuthenticated = true });
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("patients")]
        public IActionResult PatientSearch(SeachCriteria searchCriteria)
        {
            
            return Ok(_identityService.GetAllPatients(searchCriteria));
        }
    }
}