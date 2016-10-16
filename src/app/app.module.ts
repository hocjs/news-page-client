import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import {HomePageComponent} from "./homePageComponent/home-page.component";
import {AdminLoginComponent} from "./adminLoginComponent/admin-login.component";
import {SignUpComponent} from "./signUpComponent/sign-up.component";
import { BlogerSignInComponent } from './bloger-sign-in/bloger-sign-in.component';
import {BlogerService} from "./shared/bloger.service";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminLoginComponent,
    SignUpComponent,
    BlogerSignInComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [Window, BlogerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
