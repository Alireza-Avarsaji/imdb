import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentsService } from 'src/shared/http-services/comments.service';

@Component({
  selector: 'app-upload-comment-dialog',
  templateUrl: './upload-comment-dialog.component.html',
  styleUrls: ['./upload-comment-dialog.component.scss']
})
export class UploadCommentDialogComponent implements OnInit {

  file: string = '';
  fileName: string = '';
  movieId!: string;

  constructor(private service: CommentsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<UploadCommentDialogComponent>) {
      this.movieId = data.movieId;
     }

  ngOnInit(): void {
  }

  load(event: any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.file = reader.result!.toString().split(',')[1];
      var file = <HTMLInputElement>document.getElementById("upload");
      this.fileName = file.value;
    };
  }

  upload(){
    this.service.uploadComment(this.file, this.movieId).subscribe(res => {
      console.log(res);
      this.dialog.close(true);
    });
  }

}
