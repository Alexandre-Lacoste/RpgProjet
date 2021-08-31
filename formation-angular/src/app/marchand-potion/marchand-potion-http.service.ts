import { Injectable } from '@angular/core';
import {MarchandPotion} from "../model/MarchandPotion";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";

@Injectable({
  providedIn: 'root'
})
export class MarchandPotionHttpService {

  marchandPotions: Array<MarchandPotion> = new Array<MarchandPotion>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<MarchandPotion> {
    return this.marchandPotions;
  }

  findById(id: number): Observable<MarchandPotion> {
    return this.http.get<MarchandPotion>(this.appConfigService.backEndUrl + "marchandPotion/" + id);
  }

  create(marchandPotion: MarchandPotion) {
    this.http.post<MarchandPotion>(this.appConfigService.backEndUrl + "marchandPotion/", marchandPotion).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(marchandPotion: MarchandPotion) {
    this.http.put<MarchandPotion>(this.appConfigService.backEndUrl + "marchandPotion/" + marchandPotion.id, marchandPotion).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "marchandPotion/" + id);
  }



  load() {
    this.http.get<Array<MarchandPotion>>(this.appConfigService.backEndUrl + "marchandPotion/").subscribe(response => {
      this.marchandPotions = response;
    }, error => console.log(error));
  }
}
