import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { CvComponent } from './cv/cv.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './blog/post/post.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ProjectsComponent,
    CvComponent,
    BlogComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PdfViewerModule,
  ]
})
export class DashboardModule { }
