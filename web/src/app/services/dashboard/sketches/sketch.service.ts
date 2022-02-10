import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SketchService {

  constructor() { }

  public sketch(p: any) {
    let angle = 0;
    let earth: any;

    p.preload = () => {
      earth = p.loadImage('../assets/images/earth-bw.jpg');
    };

    p.setup = () => {
      const canvas2 = p.createCanvas(window.innerWidth / 2, window.innerHeight / 2, p.WEBGL);
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
      p.sphere(p.max(window.innerWidth, window.innerHeight) / 10);
    };

    p.windowResized = () => {
      p.resizeCanvas(window.innerWidth / 2, window.innerHeight / 2);
    };
  }
}
