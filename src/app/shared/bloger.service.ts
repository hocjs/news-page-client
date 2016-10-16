import {Injectable} from "@angular/core";
import {Bloger} from "./bloger";
import {Http, RequestOptions, Headers} from "@angular/http";
import {serverApi} from "../constants";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class BlogerService {

  authToken: string;
  bloger: Bloger = {
    id: "",
    login: "",
    photoUrl: ""
  };

  constructor(private http: Http){
  }

  registerBloger(bloger: Bloger){
    // this.http.post(serverApi + "user",)
  }

  signIn(login, password){
    let body = JSON.stringify({login: login, password: password});
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
console.log(1234567890);
    return this.http.post(serverApi + "auth", body, options).map(res => {
      return res.json();
    });
  }

  saveBloger(data){
    console.log(data);
    this.bloger.id = data['user']['id'];
    this.bloger.login = data['user']['login'];
    this.bloger.photoUrl = data['user']['photoUrl'];
    this.authToken = data['token'];
    localStorage.setItem('Authorization', this.authToken);
    localStorage.setItem('blogerId', this.bloger.id);
  }

  retrieveBloger(){
    let token = localStorage.getItem('Authorization');
    let blogerId = localStorage.getItem('blogerId');
    if(token && blogerId){
      this.authToken = token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token});
      let options = new RequestOptions({ headers: headers });
      this.http.get(serverApi + 'user/' + blogerId, options).map(res => {
        return res.json();
      }).subscribe(data => {
        this.bloger.id = data.id;
        this.bloger.login = data.login;
        this.bloger.photoUrl = data.photoUrl;
      });
    }
  }
}
