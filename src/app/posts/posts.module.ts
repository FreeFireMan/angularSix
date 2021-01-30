import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import {PostInfoComponent} from './post-info/post-info.component';
import {PostService} from './services/post.service';
import {PostResolveService} from './services/reoslve/post-resolve.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [PostsComponent, PostComponent, PostInfoComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [PostService, PostResolveService],
})
export class PostsModule {
}
