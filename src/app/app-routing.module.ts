import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  // { path: 'landing', component: LandingPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'search/category/:id', component: SearchPageComponent },
  { path: 'course/:id', component: CourseDetailPageComponent },
  { path: '', component: LandingPageComponent , pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
