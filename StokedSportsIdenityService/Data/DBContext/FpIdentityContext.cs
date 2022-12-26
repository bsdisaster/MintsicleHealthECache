using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


namespace Productive
{
    public class FpDbContext : IdentityDbContext
    {        

        public DbSet<FPAccount> FPAccount { get; set; }
        public FpDbContext(DbContextOptions<FpDbContext> options)
            : base(options)
        {
            
        }
    }
}