import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import { Workout } from './workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {
  private workoutsUri = 'https://localhost:5001/api/workouts';
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
}
