import { MovieModel } from './../../../shared/models/movies.model';
import { MoviesService } from './../../../shared/http-services/movies.service';
import { UploadCommentDialogComponent } from './upload-comment-dialog/upload-comment-dialog.component';
import { CommentsService } from './../../../shared/http-services/comments.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: MovieModel[] = [];

  constructor(
   private dialog: MatDialog,
   private service: MoviesService,
   private _snackBar: MatSnackBar)
  { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.service.getAll().subscribe(res => {
      this.movies = res;
    });
  }


  createComment(movie: MovieModel){
    const dialogRef = this.dialog.open(UploadCommentDialogComponent, {
      width: '400px',
      height: '300px',
      data:{
        movieId: movie.id
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.openSnackBar('comment added successfully');
    });

  }

  openSnackBar(message: string) {
    this._snackBar.open(message,undefined,{
      duration: 3000,
      panelClass: ['snackbar']
    });
  }

}
