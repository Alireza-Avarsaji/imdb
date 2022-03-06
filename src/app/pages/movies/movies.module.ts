import { MoviesComponent } from './movies.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/modules/shared.module';

const routes = [
  { path: '', component: MoviesComponent },
];

@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
  ],
})
export class MoviesModule { }
