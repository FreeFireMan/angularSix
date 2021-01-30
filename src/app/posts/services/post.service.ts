import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPosts} from '../interface/i-posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getAllPost(): Observable<IPosts[]> {
    return this.httpClient.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
