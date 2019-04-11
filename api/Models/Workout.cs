using System;
using Strides.Models;
using System.Collections.Generic;

namespace Strides.Models
{
    public class Workout
    {
        public int Id { get; set; }

        public string Date { get; set; }

        public int DistanceInMeters { get; set; }

        public long TimeInSeconds { get; set; }
    }
}