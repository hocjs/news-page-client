import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from "./homePageComponent/home-page.component";
import {AdminLoginComponent} from "./adminLoginComponent/admin-login.component";
import {SignUpComponent} from "./signUpComponent/sign-up.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'admin',
    component: AdminLoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }

];

export const routing = RouterModule.forRoot(appRoutes);
