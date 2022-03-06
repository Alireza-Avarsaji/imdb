import { UploadCommentDialogComponent } from './upload-comment-dialog/upload-comment-dialog.component';
import { CommentsService } from './../../../shared/http-services/comments.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  arr = [1,2,3,4,5,6,7]

  constructor(
   private dialog: MatDialog )
  { }

  ngOnInit(): void {
  }


  createComment(){
    const dialogRef = this.dialog.open(UploadCommentDialogComponent, {
      width: '400px',
      height: '300px',
    });

    dialogRef.afterClosed().subscribe(res => {

    })

  }

}
