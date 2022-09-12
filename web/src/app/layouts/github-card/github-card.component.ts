import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCodeFork, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'github-card',
  templateUrl: './github-card.component.html',
  styleUrls: ['./github-card.component.scss']
})
export class GithubCardComponent implements OnInit {

  @Input() html_url: string = "";
  @Input() name: string = "";
  @Input() description: string = "";
  @Input() language: string = "";
  @Input() stargazers_count: number = 0;
  @Input() forks_count: number = 0;
  @Input() watchers_count: number = 0;

  faCodeFork = faCodeFork;
  faStar = faStar
  faWatchers = faEye;

  constructor() { }

  ngOnInit(): void {
  }

}
