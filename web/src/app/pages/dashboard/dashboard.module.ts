import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardLayoutComponent } from 'src/app/layouts/dashboard-layout/dashboard-layout.component';
import { GithubCardComponent } from 'src/app/layouts/github-card/github-card.component';
import { EmailModalComponent } from 'src/app/layouts/modals/email-modal.component';
import { GithubService } from 'src/app/services/dashboard/github.service';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './blog/post/post.component';
import { CvComponent } from './cv/cv.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    EmailModalComponent,
    DashboardLayoutComponent,
    GithubCardComponent,
    HomeComponent,
    CvComponent,
    BlogComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    GithubService,
  ]
})
export class DashboardModule { }
