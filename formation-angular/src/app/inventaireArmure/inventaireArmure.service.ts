import {Component, Injectable, OnInit} from '@angular/core';
import {Compte} from "../model/compte";
import {Utilisateur} from "../model/utilisateur";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {InventaireArme} from "../model/inventaireArme";
import {InventaireArmure} from "../model/inventaireArmure";

@Injectable({
  providedIn: 'root'
})
export class InventaireArmureService  {

  inventaireArmures: Array<InventaireArmure> = new Array<InventaireArmure>();
  constructor(private http: HttpClient, private appConfigService: AppConfigService) { this.load();}

  findAll(): Array<InventaireArmure> {
    return this.inventaireArmures;
  }

  findById(id: number): Observable<InventaireArmure> {
    return this.http.get<InventaireArmure>(this.appConfigService.backEndUrl + "inventaireArmure/" + id);
  }


  create(inventaireArmure: InventaireArmure) {
    this.http.post<InventaireArmure>(this.appConfigService.backEndUrl + "inventaireArmure/", inventaireArmure).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(inventaireArmure: InventaireArmure) {
    this.http.put<InventaireArmure>(this.appConfigService.backEndUrl + "inventaireArmure/" + inventaireArmure.id, inventaireArmure).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "inventaireArmure/" + id);
  }

  load() {
    this.http.get<Array<InventaireArmure>>(this.appConfigService.backEndUrl + "inventaireArmure/").subscribe(response => {
      this.inventaireArmures = response;
    }, error => console.log(error));
  }
}
