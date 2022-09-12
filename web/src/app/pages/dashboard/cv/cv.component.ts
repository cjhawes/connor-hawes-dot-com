import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Repo } from 'src/app/models/github/repo';
import { GithubService } from 'src/app/services/dashboard/github.service';

@Component({
  selector: 'connor-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  public pdfSrc: string = "../assets/files/CV.pdf";
  public reposObservable: Observable<Repo[]>;
  public repos: Repo[] = [];

  constructor(private githubService: GithubService) {
    this.reposObservable = this.githubService.getRepos();
  }

  ngOnInit(): void {
    this.reposObservable.subscribe(repos =>{
      this.repos = repos;
    });
  }

}
