import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, map } from 'rxjs';
import { User } from './user.model';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root',
})
export class Httpclient {
  private userUrl = 'https://jsonplaceholder.typicode.com/users';
  private commentUrl = 'https://dummyjson.com/comments';

  constructor(private http: HttpClient) {}

  // Fetch users
  getUsersRemotely(): Observable<User[]> {
    const cachedUsers = localStorage.getItem('users');
    if (cachedUsers) {
      return of(JSON.parse(cachedUsers));
    }
    return this.http.get<User[]>(this.userUrl).pipe(
      tap((users) => localStorage.setItem('users', JSON.stringify(users)))
    );
  }

  // Fetch comments
  getCommentsRemotely(): Observable<Comment[]> {
    return this.http.get<{ comments: Comment[] }>(this.commentUrl).pipe(
      map((res) => res.comments.slice(0, 5)) // limit to first 5 for demonstration
    );
  }
}
