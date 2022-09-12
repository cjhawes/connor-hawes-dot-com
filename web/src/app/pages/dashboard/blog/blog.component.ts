import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/dashboard/blog/post.service';

@Component({
  selector: 'connor-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public posts!: Array<Post>;

  constructor(
    private postService: PostService,
    private titleService: Title,
  ) {
    this.titleService.setTitle("Connor Hawes | Blog");
  }

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe(
        data => {
          this.posts = data.items;
        },
      );
  }
}
