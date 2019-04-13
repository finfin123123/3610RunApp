using Microsoft.EntityFrameworkCore;
using Strides.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Strides.Data
{
    public class WorkoutContext : IdentityDbContext<ApplicationUser>
    {
        public WorkoutContext(DbContextOptions<WorkoutContext> options)
            : base(options)
            {}

        protected override void OnModelCreating(ModelBuilder builder) => base.OnModelCreating(builder);

        public DbSet<Workout> Workouts {get; set;}    
    }
}