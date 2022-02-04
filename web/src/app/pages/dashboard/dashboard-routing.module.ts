import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    data: { title: 'Connor Hawes' },
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'projects',
    data: { title: 'Connor Hawes | Projects' },
    children: [
      {
        path: '',
        component: ProjectsComponent,
      },
    ],
  },
  {
    path: 'cv',
    data: { title: 'Connor Hawes | CV' },
    children: [
      {
        path: '',
        component: CvComponent,
      },
    ],
  },
  {
    path: 'blog',
    data: { title: 'Connor Hawes | Blog' },
    children: [
      {
        path: '',
        component: BlogComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
