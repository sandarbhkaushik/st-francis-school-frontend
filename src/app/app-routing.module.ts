import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../app/modules/core/landing-page/landing-page.component';
import { ContentPageComponent } from '../app/modules/core/content-page/content-page.component';
import { EventDetailComponent } from '../app/modules/core/event-detail/event-detail.component';

const routes: Routes = [
 { path: '', component: LandingPageComponent},
 { path: ':slug', component: ContentPageComponent},
 { path: 'event/:slug', component: EventDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
