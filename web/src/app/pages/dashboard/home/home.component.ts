import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/dashboard/home.service';

import * as p5 from 'p5';

@Component({
  selector: 'connor-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private p5!: p5;
  public bio?: string;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.bio = this.homeService.getBio();
    this.createCanvas();
  }

  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }
  
  private sketch(p: any) {
    let angle = 0;
    const r = 200;
    let earth: any;

    p.preload = () => {
      earth = p.loadImage('../assets/images/earth-bw.jpg');
    };

    p.setup = () => {
      const canvas2 = p.createCanvas(p.windowWidth / 2, p.windowHeight / 2, p.WEBGL);
      canvas2.parent('sketch-holder');
    };

    p.draw = () => {
      p.background(255);
      p.rotateY(angle);
      angle += 0.005;
      p.lights();
      p.fill(200);
      p.noStroke();
      p.texture(earth);
      p.sphere(r);
    };
  }
}
