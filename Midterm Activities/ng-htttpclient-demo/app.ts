import { Component, signal, OnInit } from '@angular/core';
import { User } from './user.model';
import { Httpclient } from './httpclient';
import { RouterOutlet } from '@angular/router';
import { Comment } from './comment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements OnInit {
  protected readonly title = signal('http-client-demo');
  httpusers: User[] = [];
  commentList: Comment[] = [];

  constructor(private httpClient: Httpclient) {}

  ngOnInit(): void {
    // Fetch users
    this.httpClient.getUsersRemotely().subscribe((data) => {
      this.httpusers = data;
    });

    // Fetch comments
    this.httpClient.getCommentsRemotely().subscribe((comments: Comment[]) => {
      this.commentList = comments;
    });
  }
}
