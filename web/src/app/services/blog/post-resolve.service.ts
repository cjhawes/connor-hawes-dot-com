import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post>{

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.postService.getPost(route.paramMap.get('id')!);
  }
}
