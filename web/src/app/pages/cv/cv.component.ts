import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'connor-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  public pdfSrc: string = "../assets/files/CV.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
