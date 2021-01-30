import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {PostResolveService} from './services/reoslve/post-resolve.service';
import {PostInfoComponent} from './post-info/post-info.component';

const routes: Routes = [
  {
    path: '', component: PostsComponent, resolve: {posts: PostResolveService}, children: [
      {
        path: ':id', component: PostInfoComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
