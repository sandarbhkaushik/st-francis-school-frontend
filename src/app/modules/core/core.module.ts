import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPageComponent } from './content-page/content-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FacultyComponent } from './faculty/faculty.component';
import { EventComponent } from './event/event.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from '../../app-routing.module';
import { ShareModule } from '../share/share.module';
import { PageContainerComponent } from './page-container/page-container.component';
import { EventDetailComponent } from './event-detail/event-detail.component'


@NgModule({
  declarations: [ContentPageComponent, ContactUsComponent, FacultyComponent, EventComponent, LandingPageComponent, PageContainerComponent, EventDetailComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ShareModule
  ],
  exports: [
    ContentPageComponent, ContactUsComponent, FacultyComponent, EventComponent, LandingPageComponent
  ]
})
export class CoreModule { }
