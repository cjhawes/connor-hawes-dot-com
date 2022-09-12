import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
  ) { 
    this.data = this.route.snapshot.data;
    this.titleService.setTitle(`Connor Hawes | ${this.data.post.title}`);
  }

  ngOnInit(): void {
    this.post = this.data.post;
  }

}
