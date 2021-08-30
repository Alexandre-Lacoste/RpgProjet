import { Injectable } from '@angular/core';
import {Potion} from "../model/Potion";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Arme} from "../model/Arme";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PotionHttpService {

  potions: Array<Potion> = new Array<Potion>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<Potion> {
    return this.potions;
  }

  findById(id: number):  Observable<Potion> {
    return this.http.get<Potion>(this.appConfigService.backEndUrl + "potion/" + id);
  }

  create(potion: Potion) {
    this.http.post<Potion>(this.appConfigService.backEndUrl + "potion/", potion).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(potion: Potion) {
    this.http.put<Potion>(this.appConfigService.backEndUrl + "potion/" + potion.id, potion).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "potion/" + id);
  }

  load() {
    this.http.get<Array<Potion>>(this.appConfigService.backEndUrl + "potion/").subscribe(response => {
      this.potions = response;
    }, error => console.log(error));
  }

}
