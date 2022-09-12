import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/dashboard/home.service';
import { SketchService } from 'src/app/services/dashboard/sketches/sketch.service';

import * as p5 from 'p5';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'connor-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private p5!: p5;
  public bio?: string;

  constructor(
    private homeService: HomeService,
    private sketchService: SketchService,
    private titleService: Title,
  ) {
    this.titleService.setTitle("Connor Hawes");
  }

  ngOnInit(): void {
    this.bio = this.homeService.getBio();

    this.createCanvas();
  }

  private createCanvas() {
    this.p5 = new p5(this.sketchService.sketch);
  }
}
