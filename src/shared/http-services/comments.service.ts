import { HttpBaseService } from './http-base.service';
import { CommentResponse, CommentsModel } from './../models/comment.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService extends HttpBaseService {

  constructor(public http: HttpClient) {
    super(http);
   }

  uploadComment(base64: string, id: number){
    let body = {
      movieId: id,
      voice: base64
    }
    return this.http.post<CommentResponse>(`${this.apiUrl}/user/voiceconverter`, body);
  }


  getCommentsByMovieId(movieId: number, lang: string){
    return this.http.get<CommentsModel>(`${this.apiUrl}/user/translate/${movieId}?lang=${lang}`);
  }
}
