import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './layouts/not-found/not-found/not-found.component';
import { PostResolveService } from './services/dashboard/blog/post-resolve.service';
import { PostService } from './services/dashboard/blog/post.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [
    PostService,
    PostResolveService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
