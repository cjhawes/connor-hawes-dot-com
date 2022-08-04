import { Injectable } from '@angular/core';
import * as p5 from 'p5';

@Injectable({
  providedIn: 'root'
})
export class SketchService {

  constructor() { }

  public sketch(p: p5) {
    let angle: number = 0;
    let earth: p5.Image;

    p.disableFriendlyErrors = true;

    p.preload = () => {
      earth = p.loadImage('../assets/images/earth-bw.jpg');
    };

    p.setup = () => {
      const canvas2: p5.Renderer = p.createCanvas(window.innerWidth / 2, window.innerHeight / 2, p.WEBGL);
      canvas2.parent('sketch-holder');
    };

    p.draw = () => {  
      p.rotateY(angle);
      angle += 0.005;
      p.background(255);
      p.noStroke();
      p.texture(earth);
      p.sphere(p.max(window.innerWidth, window.innerHeight) / 10);
    };

    p.windowResized = () => {
      p.resizeCanvas(window.innerWidth / 2, window.innerHeight / 2);
    };
  }
}
