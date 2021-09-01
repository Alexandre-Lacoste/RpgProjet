import { Injectable } from '@angular/core';
import {InventaireArmure} from "./model/inventaireArmure";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "./app-config.service";
import {Observable} from "rxjs";
import {Inventaire} from "./model/inventaire";

@Injectable({
  providedIn: 'root'
})
export class InventaireService {


  inventaires: Array<Inventaire> = new Array<Inventaire>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<Inventaire> {
    return this.inventaires;
  }

  findById(id: number): Observable<Inventaire> {
    return this.http.get<Inventaire>(this.appConfigService.backEndUrl + "inventaire/" + id);
  }


  create(inventaire: InventaireArmure) {
    this.http.post<Inventaire>(this.appConfigService.backEndUrl + "inventaire/", Inventaire).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(inventaire: Inventaire) {
    this.http.put<Inventaire>(this.appConfigService.backEndUrl + "inventaire/" + inventaire.id, inventaire).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "inventaire/" + id);
  }

  load() {
    this.http.get<Array<Inventaire>>(this.appConfigService.backEndUrl + "inventaire/").subscribe(response => {
      this.inventaires = response;
    }, error => console.log(error));
  }
}
