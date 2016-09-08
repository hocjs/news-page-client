import { Component } from '@angular/core';
import { HomePageComponent } from './homePageComponent/home-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  directives: [HomePageComponent]
})
export class AppComponent {
  title = 'app works!';
}
