import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import {HomePageComponent} from "./homePageComponent/home-page.component";
import {AdminLoginComponent} from "./adminLoginComponent/admin-login.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
