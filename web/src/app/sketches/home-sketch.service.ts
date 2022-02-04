import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeSketchService {

  constructor() { }

  public sketch(p: any) {
    var angle = 0;
    const r = 200;
    var earth: any;

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
