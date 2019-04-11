using Microsoft.EntityFrameworkCore;

namespace Strides.Models
{
    public class WorkoutContext : DbContext
    {
        public WorkoutContext(DbContextOptions<WorkoutContext> options)
            : base(options)
            {
            }

        public DbSet<Workout> Workouts {get; set;}    
    }
}