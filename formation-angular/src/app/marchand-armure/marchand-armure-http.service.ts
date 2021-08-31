import { Injectable } from '@angular/core';
import {MarchandArmure} from "../model/MarchandArmure";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";

@Injectable({
  providedIn: 'root'
})
export class MarchandArmureHttpService {

  marchandArmures: Array<MarchandArmure> = new Array<MarchandArmure>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<MarchandArmure> {
    return this.marchandArmures;
  }

  findById(id: number): Observable<MarchandArmure> {
    return this.http.get<MarchandArmure>(this.appConfigService.backEndUrl + "marchandArmure/" + id);
  }

  create(marchandArmure: MarchandArmure) {
    this.http.post<MarchandArmure>(this.appConfigService.backEndUrl + "marchandArmure/", marchandArmure).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(marchandArmure: MarchandArmure) {
    this.http.put<MarchandArmure>(this.appConfigService.backEndUrl + "marchandArmure/" + marchandArmure.id, marchandArmure).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "marchandArmure/" + id);
  }


  load() {
    this.http.get<Array<MarchandArmure>>(this.appConfigService.backEndUrl + "marchandArmure/").subscribe(response => {
      this.marchandArmures = response;
    }, error => console.log(error));
  }
}
