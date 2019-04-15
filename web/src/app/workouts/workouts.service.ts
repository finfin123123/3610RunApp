import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import { Workout } from './workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {
  private workoutsUri = 'http://strides-api-nicchzx.azurewebsites.net/api/workouts';
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  constructor(private http: HttpClient) { }

  getWorkouts() {
    return this.http.get<Workout[]>(this.workoutsUri).pipe(
      tap(_ => console.log('fetched workouts')),
      catchError(this.handleError<Workout[]>('getWorkouts', []))
    );
  }

  // addWorkouts() {
  //   return this.http.get<Workout[]>(this.workoutsUri).pipe(
  //     tap(_ => console.log('fetched workouts')),
  //     catchError(this.handleError<Workout[]>('addWorkouts', []))
  //   );
  // }

  // addWorkouts(newWorkouts: Workout[]): Observable<Workout> {
  //   return this.http.post<Workout>(this.workoutsUri, newWorkout, {
  //       headers: new HttpHeaders({
  //           'Content-Type' : 'application/json'
  //       })
  //   });
  // }
}
