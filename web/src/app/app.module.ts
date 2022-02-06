import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { PostResolveService } from './services/blog/post-resolve.service';
import { PostService } from './services/blog/post.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    PostService,
    PostResolveService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
