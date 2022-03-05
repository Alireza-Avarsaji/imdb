import { MoviesComponent } from './movies.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: MoviesComponent },
];

@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [
  ],
})
export class MoviesModule { }
