import {Component, Injectable, OnInit} from '@angular/core';
import {Compte} from "../model/compte";
import {Utilisateur} from "../model/utilisateur";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Objet} from "../model/objet";

@Injectable({
  providedIn: 'root'
})
export class ObjetService  {

  objet : Objet;
  objets: Array<Objet> = new Array<Objet>();
  constructor(private http: HttpClient, private appConfigService: AppConfigService) { this.load();}

  findAll(): Array<Objet> {
    return this.objets;
  }

  findById(id: number): Observable<Objet> {
    return this.http.get<Objet>(this.appConfigService.backEndUrl + "objet/" + id);
  }


  create(objet: Objet) {
    this.http.post<Objet>(this.appConfigService.backEndUrl + "objet/", objet).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(objet: Objet) {
    this.http.put<Objet>(this.appConfigService.backEndUrl + "objet/" + objet.id, objet).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "objet/" + id);
  }

  load() {
    this.http.get<Array<Objet>>(this.appConfigService.backEndUrl + "objet/").subscribe(response => {
      this.objets = response;
    }, error => console.log(error));
  }

  qtegold(id: number): number{
    return this.objet.qte
  }



}
