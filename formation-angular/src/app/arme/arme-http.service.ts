import { Injectable } from '@angular/core';
import {Arme} from "../model/Arme";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArmeHttpService {

  armes: Array<Arme> = new Array<Arme>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    // this.load();
  }

  findAll(): Array<Arme> {
    return this.armes;
  }

  findById(id: number):  Observable<Arme> {
    return this.http.get<Arme>(this.appConfigService.backEndUrl + "arme/" + id);
  }

  create(arme: Arme) {
    this.http.post<Arme>(this.appConfigService.backEndUrl + "arme/", arme).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(arme: Arme) {
    this.http.put<Arme>(this.appConfigService.backEndUrl + "arme/" + arme.id, arme).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "arme/" + id);
  }

  load() {
    this.http.get<Array<Arme>>(this.appConfigService.backEndUrl + "arme/").subscribe(response => {
      this.armes = response;
    }, error => console.log(error));
  }





}
