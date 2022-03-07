import { CommentsService } from 'src/shared/http-services/comments.service';
import { Component, OnInit } from '@angular/core';
import { CommentsModel } from 'src/shared/models/comment.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments: CommentsModel = new CommentsModel();

  constructor(private service: CommentsService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(param => {
      console.log(param);
      
      this.service.getCommentsByMovieId(param.movieId, 'Arabic').subscribe(res => {

      })

    })
  }

}
