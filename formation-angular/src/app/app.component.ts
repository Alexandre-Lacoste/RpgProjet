import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Compte} from "./model/compte";
import {ConnexionHttpService} from "./connexion/connexion-http.service";
import {AppConfigService} from "./app-config.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user:Compte;

  constructor(private http:HttpClient,private router: Router,private connexionService:ConnexionHttpService) {
    this.connexionService.currentUser.subscribe(x=>this.user=x);
  }

  logout() {
    this.connexionService.logout();
    this.router.navigate(['/']);
  }


}
