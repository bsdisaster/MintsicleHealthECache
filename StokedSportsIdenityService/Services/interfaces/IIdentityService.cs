using Productive;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Threading.Tasks;
using IdenityService.Data.DTOs.Requests;

namespace Productive
{
    public interface IIdentityService
    {
        Task<string> CreateAsync(UserRegistrationDto user, Microsoft.AspNetCore.Mvc.ModelBinding.ModelStateDictionary modelState);
        Task<IdentityUser> GetUser(string email);
        Task<string> GetUserToken(UserLoginRequest user, Microsoft.AspNetCore.Mvc.ModelBinding.ModelStateDictionary modelState);
        Task<FPAccount> GetFpAccount(string email);
        List<Patient> GetAllPatients(SeachCriteria seachrCriteria);

    }
}
