import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { faBriefcase, faClockRotateLeft, faFileCode, faLocation } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { GithubEvent } from 'src/app/models/github/events/event';
import { Repo } from 'src/app/models/github/repo';
import { User } from 'src/app/models/github/user';
import { GithubService } from 'src/app/services/dashboard/github.service';

@Component({
  selector: 'connor-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  faLocation = faLocation;
  faGithubRepo = faFileCode;
  faWork = faBriefcase;
  faClock = faClockRotateLeft;

  pdfSrc: string = "../assets/files/CV.pdf";
  timeSince: Date = null!;

  private reposObservable: Observable<Repo[]>;
  repos: Repo[] = [];

  private userObservable: Observable<User>;
  user: User = null!;

  private eventObservable: Observable<GithubEvent[]>;

  constructor(
    private githubService: GithubService,
    private titleService: Title,
  ) {
    this.reposObservable = this.githubService.getRepos();
    this.userObservable = this.githubService.getUserDetails();
    this.eventObservable = this.githubService.getEvents();
    this.titleService.setTitle("Connor Hawes | CV");
  }

  ngOnInit(): void {
    this.reposObservable.subscribe(repos => {
      this.repos = repos;
    });

    this.userObservable.subscribe(user => {
      this.user = user;
    });

    this.eventObservable.subscribe(events => {
      this.timeSince = events[0].created_at;
    })
  }

}
