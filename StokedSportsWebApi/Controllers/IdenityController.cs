using System.Collections.Generic;
using System.Threading.Tasks;
using IdenityService.Data.DTOs.Requests;
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
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] UserLoginRequest user)
        {
          //  var userInDb = await _identityService.GetUser(user.Email);
            var jwtToken = await _identityService.GetUserToken(user, ModelState);
            var fpAccount = await _identityService.GetFpAccount(user.Email);

            return Ok(new { JwtToken = jwtToken, UserId = fpAccount.Id, IsAuthenticated = true });
        }

        [HttpPost]
        [Route("Patients")]
        public IActionResult PatientSearch(SeachCriteria seachrCriteria)
        {
            
            return Ok(_identityService.GetAllPatients(seachrCriteria));
        }
    }
}