import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
