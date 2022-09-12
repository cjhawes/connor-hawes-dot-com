import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'connor-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent {

  faDownload = faDownload;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faTwitter = faTwitter;

  buttonText: string = "";

  year: number = new Date().getFullYear();
  pdfSrc: string = "../../../assets/files/CV.pdf";

  constructor(private router: Router) {
    router.events.forEach(event => {
      if (event instanceof NavigationEnd) {
        if (router.url == "/dashboard/cv") {
          this.buttonText = "";
        } else {
          this.buttonText = "CV";
        }
      }
    })
  }
}
