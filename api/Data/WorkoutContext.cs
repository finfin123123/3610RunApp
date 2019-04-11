using Microsoft.EntityFrameworkCore;
using Strides.Models;

namespace Strides.Data
{
    public class WorkoutContext : DbContext
    {
        public WorkoutContext(DbContextOptions<WorkoutContext> options)
            : base(options)
            {}

        protected override void OnModelCreating(ModelBuilder builder) => base.OnModelCreating(builder);

        public DbSet<Workout> Workouts {get; set;}    
    }
}