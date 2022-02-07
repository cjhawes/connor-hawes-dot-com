import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/blog/post.service';

@Component({
  selector: 'connor-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public posts!: Array<Post>;

  constructor(protected postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe(
        data => {
          this.posts = data.items;
        },
      );
  }
}
