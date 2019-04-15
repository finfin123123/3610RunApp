import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { WorkoutsComponent } from '../workouts/workouts/workouts.component';


@Component({
  selector: 'app-addrun',
  templateUrl: './addrun.component.html',
  styleUrls: ['./addrun.component.css']
})
export class AddrunComponent implements OnInit {
  newWorkout = [

  ]
  constructor() 
  {

  }

  ngOnInit() {

  }

}