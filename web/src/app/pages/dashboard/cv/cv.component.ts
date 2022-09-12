import { Component, OnInit } from '@angular/core';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faLocation } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
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
  faGithubRepo = faGithubAlt;
  faWork = faBriefcase;

  public pdfSrc: string = "../assets/files/CV.pdf";

  public reposObservable: Observable<Repo[]>;
  public repos: Repo[] = [];

  public userObservable: Observable<User>;
  public user: User = null!;

  constructor(private githubService: GithubService) {
    this.reposObservable = this.githubService.getRepos();
    this.userObservable = this.githubService.getUserDetails();
  }

  ngOnInit(): void {
    this.reposObservable.subscribe(repos =>{
      this.repos = repos;
    });

    this.userObservable.subscribe(user => {
      this.user = user;
    });
  }

}
