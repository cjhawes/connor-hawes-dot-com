import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'connor-dashboard',
  templateUrl: '../../layouts/dashboard-layout/dashboard-layout.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  public year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
