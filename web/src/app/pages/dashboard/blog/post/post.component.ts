import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'connor-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  faBack = faBackward;

  private data: any;
  public post!: Post;

  constructor(private route: ActivatedRoute) { 
    this.data = this.route.snapshot.data;
  }

  ngOnInit(): void {
    this.post = this.data.post;
  }

}
