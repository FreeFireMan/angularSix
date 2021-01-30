import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IPosts} from '../../interface/i-posts';
import {Observable} from 'rxjs';
import {PostService} from '../post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<IPosts[]>{

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPosts[]> | Promise<IPosts[]> | IPosts[] {
    return this.postService.getAllPost();
  }
}
