import { NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy, NgOptimizedImage } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LibraryComponent } from './library/library.component';
import { TooltipsModule } from '@progress/kendo-angular-tooltip';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import 'hammerjs';
import { LibraryOneComponent } from './sub-library/library-one/library-one.component';
import { ServicesComponent } from './sub-service/services/services.component';
import { FormsModule } from '@angular/forms';
import { ResearchComponent } from './research/research.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ResearchComponent,
    AboutComponent,
    ServiceComponent,
    GalleryComponent,
    LibraryComponent,
    LibraryOneComponent,
    ServicesComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TooltipsModule,
    CarouselModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
