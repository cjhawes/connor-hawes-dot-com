import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostList } from 'src/app/models/post-list';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private key: string = "?key=AIzaSyBeIfB3a9IbvnB78n1YsB0jmkyu1WRSk7M";
  private baseUrl: string = "https://www.googleapis.com/blogger/v3/blogs/8252529876125797114/";

  constructor(protected http: HttpClient) { }

  getPosts(): Observable<PostList> {
    var url: string = `${this.baseUrl}posts${this.key}`;
    return this.http.get<PostList>(url);
  }

  getPost(postId?: string): Observable<Post> {
    return this.http.get<Post>(this.baseUrl + "posts/" + postId + this.key);
  }
}
