import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './blog/post/post.component';
import { EmailModalComponent } from 'src/app/layouts/modals/email-modal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    EmailModalComponent,
    HomeComponent,
    CvComponent,
    BlogComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
