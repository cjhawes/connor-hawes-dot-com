import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'connor-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  faDownload = faDownload;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faTwitter = faTwitter;

  public year: number = new Date().getFullYear();
  public pdfSrc: string = "../../../assets/files/CV.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
