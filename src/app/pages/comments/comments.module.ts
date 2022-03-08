import { SharedModule } from './../../../shared/modules/shared.module';
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
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
  ],
})
export class CommentsModule { }
