import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/shared/http-services/comments.service';

@Component({
  selector: 'app-upload-comment-dialog',
  templateUrl: './upload-comment-dialog.component.html',
  styleUrls: ['./upload-comment-dialog.component.scss']
})
export class UploadCommentDialogComponent implements OnInit {

  file: string = '';
  fileName: string = '';

  constructor(private service: CommentsService) { }

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
    this.service.uploadComment(this.file).subscribe(res => {
      console.log(res);
    });
  }

}
