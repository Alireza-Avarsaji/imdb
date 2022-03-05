import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/http-services/modules/shared.module';
import { HttpClientModule } from '@angular/common/http';

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
    SharedModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  exports: [
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
