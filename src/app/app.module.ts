import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'users', loadChildren: () => import('./user/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  }
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
