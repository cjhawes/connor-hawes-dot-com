import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

import { HomeService } from 'src/app/services/dashboard/home.service';
import { HomeSketchService } from 'src/app/sketches/home-sketch.service';

@Component({
  selector: 'connor-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private p5Sketch: any;
  public aboutMe?: string;

  constructor(
    private homeService: HomeService,
    private homeSketch: HomeSketchService,
  ) { }

  createCanvas() {
    this.p5Sketch = new p5(this.homeSketch.sketch);
  }

  ngOnInit(): void {
    this.createCanvas();
    this.aboutMe = this.homeService.getAboutMe();
  }
}
