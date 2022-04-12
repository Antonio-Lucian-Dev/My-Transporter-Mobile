import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interface/post';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  findAllPostsBasedOnCondition(condition: any): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.URL}/posts`).pipe(
      map(posts => posts.filter((post: Post) => {
        if (condition.city !== 'All') {
          if (post.currentCity === condition.city) {
            return post;
          }
        } else {
          return post;
        }
      }
      ))
    );
  }
}
