import { Component, OnInit, Input } from '@angular/core';
import { Workout } from '../workout';
import { WorkoutsService } from '../workouts.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
  @Input() workout: any;

  workouts: Workout[];
  
  constructor(private workoutsService: WorkoutsService) { }

  ngOnInit() {
    this.getWorkouts();
  }

  getWorkouts(){
    this.workoutsService.getWorkouts().subscribe(workouts => (this.workouts = workouts));
  }

}
