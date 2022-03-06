import { HttpClient } from '@angular/common/http';
import { HttpBaseService } from './http-base.service';
import { Injectable } from '@angular/core';
import { MovieModel } from '../models/movies.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService extends HttpBaseService {

  constructor(http: HttpClient) {
    super(http);
   }

  getAll(): Observable<MovieModel[]>{
    return this.http.get<MovieModel[]>(`${this.apiUrl}/movies`);
  }
}
