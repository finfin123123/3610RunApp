using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Strides.Models;

namespace Strides.Api.Controllers
{
    [Route("api/workouts")]
    [ApiController]
    public class WorkoutsController : ControllerBase
    {
        private readonly WorkoutContext db;
        public WorkoutsController(WorkoutContext db)
        {
            this.db = db;
            if (this.db.Workouts.Count() == 0)
            {
                this.db.Workouts.Add(new Workout()
                {
                    Id = 1,
                    Date = "2019-04-11",
                    DistanceInMeters = 600,
                    TimeInSeconds = 1000
                });
            }
            this.db.SaveChanges();

        }
     

        [HttpGet]
        public IActionResult GetWorkout()
        {
            return Ok(db.Workouts);
        }
    }
}

      