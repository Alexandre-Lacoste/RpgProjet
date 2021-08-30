import { Injectable } from '@angular/core';
import {Arme} from "../model/Arme";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";

@Injectable({
  providedIn: 'root'
})
export class AdminHttpService {

  armes: Array<Arme> = new Array<Arme>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.loadArme();
  }


  loadArme() {
    this.http.get<Array<Arme>>(this.appConfigService.backEndUrl + "arme/").subscribe(response => {
      this.armes = response;
    }, error => console.log(error));
  }



}
