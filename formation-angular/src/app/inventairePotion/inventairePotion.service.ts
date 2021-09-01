import {Component, Injectable, OnInit} from '@angular/core';
import {Compte} from "../model/compte";
import {Utilisateur} from "../model/utilisateur";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {InventairePotion} from "../model/inventairePotion";
import {Monstre} from "../model/Monstre";
import {Potion} from "../model/Potion";

@Injectable({
  providedIn: 'root'
})
export class InventairePotionService {

  inventairePotions: Array<InventairePotion> = new Array<InventairePotion>();
  constructor(private http: HttpClient, private appConfigService: AppConfigService) { this.load();}

  findAll(): Array<InventairePotion> {
    return this.inventairePotions;
  }

  findById(id: number): Observable<InventairePotion> {
    return this.http.get<InventairePotion>(this.appConfigService.backEndUrl + "inventairePotion/" + id);
  }

  findByIdPotion(id:number) : Observable<InventairePotion>{
    return this.http.get<InventairePotion>(this.appConfigService.backEndUrl+"inventairePotion/by/idPotion/"+id);
  }

 findAllByUtilisateurId(id:number): Observable<Array<InventairePotion>>{
    return this.http.get<Array<InventairePotion>>(this.appConfigService.backEndUrl+ "inventairePotion/utilisateur/"+id);
 }


  create(inventairePotion: InventairePotion) {
    this.http.post<InventairePotion>(this.appConfigService.backEndUrl + "inventairePotion/", inventairePotion).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(inventairePotion: InventairePotion) {
    this.http.put<InventairePotion>(this.appConfigService.backEndUrl + "inventairePotion/" + inventairePotion.id, inventairePotion).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "inventairePotion/" + id);
  }

  load() {
    this.http.get<Array<InventairePotion>>(this.appConfigService.backEndUrl + "inventairePotion/").subscribe(response => {
      this.inventairePotions = response;
    }, error => console.log(error));
  }
}
