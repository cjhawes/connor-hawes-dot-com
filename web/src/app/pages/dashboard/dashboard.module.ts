import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { CvComponent } from './cv/cv.component';
import { BlogComponent } from './blog/blog.component';
import { HomeSketchService } from 'src/app/sketches/home-sketch.service';
import { HomeService } from 'src/app/services/dashboard/home.service';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ProjectsComponent,
    CvComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [
    HomeService,
    HomeSketchService,
  ]
})
export class DashboardModule { }
