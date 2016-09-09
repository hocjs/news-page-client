import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from "./homePageComponent/home-page.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }

];

export const routing = RouterModule.forRoot(appRoutes);
