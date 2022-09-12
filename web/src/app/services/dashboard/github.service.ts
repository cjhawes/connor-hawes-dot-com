import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/github/user';
import { Repo } from 'src/app/models/github/repo';
import { GithubEvent } from 'src/app/models/github/events/event';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private user_url: string = "https://api.github.com/users/cjhawes";
  private repos_url: string = `${this.user_url}/repos`;
  private event_url: string = `${this.user_url}/events`;

  constructor (private http: HttpClient) {}

  getRepos(): Observable<Repo[]> {
    return this.http.get<Repo[]>(this.repos_url)
  }

  getUserDetails(): Observable<User> {
    return this.http.get<User>(this.user_url);
  }

  getEvents(): Observable<GithubEvent[]> {
    return this.http.get<GithubEvent[]>(this.event_url);
  }
}
