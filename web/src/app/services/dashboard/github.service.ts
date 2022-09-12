import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repo } from 'src/app/models/github/repo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private url: string = "https://api.github.com/users/cjhawes/repos";

  constructor (private http: HttpClient) {}

  getRepos(): Observable<Repo[]> {
    return this.http.get<Repo[]>(this.url)
  }
}
