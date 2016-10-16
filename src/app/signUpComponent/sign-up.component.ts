import { Component, OnInit } from '@angular/core';
import {Bloger} from "../shared/bloger";

@Component({
    selector: 'sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  bloger: Bloger;


  registerBloger(){

  }



}
