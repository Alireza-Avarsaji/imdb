import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    loadChildren: () => import("../app/pages/movies/movies.module").then((module) => module.MoviesModule),
  },
  {
    path: 'comments/:movieId',
    loadChildren: () => import("../app/pages/comments/comments.module").then((module) => module.CommentsModule),
  },

  // {
  //   path: '**',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full'
  // },

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
