using IdenityService.Data.DTOs.Requests;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Productive
{
    public interface IIdentityRepository
    {
        Task<IdentityUser> GetUserAsync(string email);
        Task<IdentityUserResult> CreateAsync(UserRegistrationDto user);
        Task<bool> IsValidLogin(IdentityUser existingUser, UserLoginRequest user);
        Task<FPAccount> GetFpAccount(string email);
        List<Patient> GetAllPatients(SeachCriteria seachrCriteria);
    }
}
