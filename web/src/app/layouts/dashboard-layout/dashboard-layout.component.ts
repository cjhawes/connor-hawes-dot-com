import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'connor-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  public year: number = new Date().getFullYear();
  public pdfSrc: string = "../../../assets/files/CV.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
