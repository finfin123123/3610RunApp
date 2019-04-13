using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Strides.Models;
using Strides.Data;

namespace Strides.Api.Controllers
{
    [Route("api/workouts")]
    [ApiController]
    public class WorkoutsController : ControllerBase
    {
        private readonly WorkoutContext db;
        public WorkoutsController(WorkoutContext db) => this.db = db;
     

        [HttpGet()]
        public IActionResult GetWorkouts()
        {
            return Ok(db.Workouts);
        }

        [HttpGet("{id}", Name = "GetWorkout")]
        public IActionResult GetWorkout(int id)
        {
            var workout = db.Workouts.FirstOrDefault(w => w.Id == id);

            if (workout == null)
            {
                return NotFound();
            }

            return Ok(workout);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Workout workout)
        {
            if (workout == null)
            {
                return BadRequest();
            }
            db.Workouts.Add(workout);
            db.SaveChanges();

            return CreatedAtRoute("GetWorkout", new {id = workout.Id}, workout);
        }

        [HttpPut("id")]
        public IActionResult Put(int id, [FromBody]Workout workout)
        {
            if (workout == null || workout.Id != id)
            {
                return BadRequest();
            }

            var workoutToEdit = db.Workouts.FirstOrDefault(w => w.Id == id);
            if (workoutToEdit == null)
            {
                return NotFound();
            }

            workoutToEdit.DistanceInMeters = workout.DistanceInMeters;
            workoutToEdit.TimeInSeconds = workout.TimeInSeconds;

            db.Workouts.Update(workoutToEdit);
            db.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var workout = db.Workouts.FirstOrDefault(w => w.Id == id);
            if (workout == null)
            {
                return NotFound();
            }

            db.Workouts.Remove(workout);
            db.SaveChanges();
            return NoContent();
        }
    }
}

      