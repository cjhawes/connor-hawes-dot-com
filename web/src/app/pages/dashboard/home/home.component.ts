import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/dashboard/home.service';

@Component({
  selector: 'connor-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public bio?: string;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.bio = this.homeService.getBio();
  }

}
