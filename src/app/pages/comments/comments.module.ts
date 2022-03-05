import { CommentsComponent } from './comments.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: CommentsComponent },
];

@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [
  ],
})
export class CommentsModule { }
