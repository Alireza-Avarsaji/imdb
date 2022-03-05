import { CommentsService } from './../../../shared/http-services/comments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  name: string = 'salae';
  arr = [1,2,3,4,5,6,7]

  constructor(private service: CommentsService) { }

  ngOnInit(): void {
  }

  upload(event: any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result!.toString().split(',')[1]);
        console.log(typeof reader.result);
        

        this.service.uploadComment(reader.result!.toString().split(',')[1]).subscribe(res => {
          console.log(res);
        })
    };
  }

}
