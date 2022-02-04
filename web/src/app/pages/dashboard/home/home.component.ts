import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/dashboard/home.service';

@Component({
  selector: 'connor-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public aboutMe?: string;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.aboutMe = this.homeService.getAboutMe();
  }

}
