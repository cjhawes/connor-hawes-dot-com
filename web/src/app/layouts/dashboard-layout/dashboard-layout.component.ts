import { Component, OnInit } from '@angular/core';
import { EmailModalComponent } from '../modals/email/email-modal.component';

@Component({
  selector: 'connor-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  public year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
