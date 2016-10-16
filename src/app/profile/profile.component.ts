import { Component, OnInit } from '@angular/core';
import {BlogerService} from "../shared/bloger.service";
import {Bloger} from "../shared/bloger";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  bloger: Bloger;

  constructor(private blogerService: BlogerService) {
    this.bloger = blogerService.bloger;
  }

  ngOnInit() {
  }

  onSelect(article){

  }
}
