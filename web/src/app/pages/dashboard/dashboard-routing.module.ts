import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostResolveService } from 'src/app/services/dashboard/blog/post-resolve.service';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './blog/post/post.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';

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
      {
        path: 'post',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'post/:id',
        component: PostComponent,
        resolve: {
          post: PostResolveService
        }
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
