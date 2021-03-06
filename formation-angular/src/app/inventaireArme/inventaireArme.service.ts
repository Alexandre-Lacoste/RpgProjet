import {Component, Injectable, OnInit} from '@angular/core';
import {Compte} from "../model/compte";
import {Utilisateur} from "../model/utilisateur";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {InventaireArme} from "../model/inventaireArme";

@Injectable({
  providedIn: 'root'
})
export class InventaireArmeService  {

  inventaireArmes: Array<InventaireArme> = new Array<InventaireArme>();
  inventaireArme : InventaireArme = new InventaireArme();
  constructor(private http: HttpClient, private appConfigService: AppConfigService) { this.load();}

  findAll(): Array<InventaireArme> {
    return this.inventaireArmes;
  }

  findById(id: number): Observable<InventaireArme> {
    return this.http.get<InventaireArme>(this.appConfigService.backEndUrl + "inventaireArme/" + id);
  }


  create(inventaireArme: InventaireArme) {
    this.http.post<InventaireArme>(this.appConfigService.backEndUrl + "inventaireArme/", inventaireArme).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(inventaireArme: InventaireArme) {
    this.http.put<InventaireArme>(this.appConfigService.backEndUrl + "inventaireArme/" + inventaireArme.id, inventaireArme).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "inventaireArme/" + id);
  }

  load() {
    this.http.get<Array<InventaireArme>>(this.appConfigService.backEndUrl + "inventaireArme/").subscribe(response => {
      this.inventaireArmes = response;
    }, error => console.log(error));
  }

  findInventaireArmeByIdArmeAndIdInv(idA : number,idInv: number): Observable<InventaireArme> {
    return this.http.get<InventaireArme>(this.appConfigService.backEndUrl + "inventaireArme/idArme/" + idA +"/"+ idInv);
  }

  findArmedeInventaireArmebyId(idArme : number,idInv:number) : InventaireArme{
    this.findInventaireArmeByIdArmeAndIdInv(idArme,idInv).subscribe(response => {
        this.inventaireArme = response;
      },
      error => console.log(error));
    return this.inventaireArme
  }


}
