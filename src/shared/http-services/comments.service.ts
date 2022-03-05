import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(public http: HttpClient) { }

  uploadComment(base: string){
    let body = {
      voice: base
    }
    return this.http.post<string>('https://192.168.2.49:5001/user/voiceconverter', body);
  }
}
