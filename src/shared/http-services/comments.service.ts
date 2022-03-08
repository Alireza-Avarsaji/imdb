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

  uploadComment(base64: string, id: string){
    let body = {
      movieId: id,
      voice: base64
    }
    return this.http.post<CommentResponse>(`${this.apiUrl}/imbd/addcomment`, body);
  }


  getCommentsByMovieId(movieId: string, lang: string){
    return this.http.get<CommentsModel>(`${this.apiUrl}/imbd/getcomments/${movieId}/${lang}`);
  }
}
