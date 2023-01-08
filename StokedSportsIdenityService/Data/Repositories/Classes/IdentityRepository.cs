using IdenityService.Data.DTOs.Requests;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Productive
{
    public class IdentityRepository : IIdentityRepository
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly FpDbContext _context;
        public IdentityRepository(UserManager<IdentityUser> userManager, FpDbContext context)
        {
            _userManager = userManager;
            _context = context; 
        }
        public async Task<IdentityUser> GetUserAsync(string email)
        {
            var existingUser = await _userManager.FindByEmailAsync(email);
            return existingUser;

        }
        public async Task<IdentityUserResult> CreateAsync(UserRegistrationDto user)
        {
            var newUser = new IdentityUser() { Email = user.Email, UserName = user.Email };
            var isCreated = await _userManager.CreateAsync(newUser, user.Password);
            var fpAccount = new FPAccount()
            {
                UserName = user.Username,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Image = user.Image,
            };
            await _context.FPAccount.AddAsync(fpAccount);
            await _context.SaveChangesAsync();

            return new IdentityUserResult() { 
                 IdentityUser = newUser,
                 identityResult = isCreated
            };
        }
        public async Task<bool> IsValidLogin(IdentityUser existingUser, UserLoginRequest user)
        {
          var isCorrect = await _userManager.CheckPasswordAsync(existingUser, user.Password);
          return isCorrect;
        }

        public async Task<FPAccount> GetFpAccount(string email)
        {
            return await _context.FPAccount.FirstOrDefaultAsync(f => f.UserName == email);
        }

        public List<Patient> GetAllPatients(SeachCriteria seachrCriteria)
        {
            return PatientList();
        }

        private List<Patient> PatientList()
        {
            List<Patient> patientList = new List<Patient>();
            string[] names = { "Matt Hensley", "Ray Barbee", "Dan Way", "Patrick Duffy", "Johh Cards" };
           
            for (int i = 0; i < names.Length; i++)
            {
                var pat = names[i].Split(" ");
                patientList.Add(new Patient()
                {
                    Id = (i + 10000),
                    DOB = DateTime.Now.AddDays(-(i * 1000)),
                    FirstName = pat[0],
                    LastName = pat[1],
                    Race = "Unknown",
                    Ethnicity = "Unknown",
                    Address1 = $"{i}23 Test Blvd",
                    City = "Denver",
                    State = "Colorado",
                    Zip = "80001",
                    MedicalRecordNumber = $"{i}134{i}{i}4358"
                });

            }

            return patientList;
        }
    }
}
