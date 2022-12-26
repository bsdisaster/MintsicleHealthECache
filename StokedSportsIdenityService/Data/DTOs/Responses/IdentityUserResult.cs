using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Productive
{
    public class IdentityUserResult
    {
        public IdentityUser IdentityUser { get; set; }
        public IdentityResult identityResult { get; set; }
    }
}
