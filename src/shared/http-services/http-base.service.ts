import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  apiUrl: string = environment.apiUrl;

  constructor(public http: HttpClient) { }
}
