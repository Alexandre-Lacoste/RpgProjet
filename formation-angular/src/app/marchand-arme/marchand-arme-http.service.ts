import { Injectable } from '@angular/core';
import {MarchandArme} from "../model/MarchandArme";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";

@Injectable({
  providedIn: 'root'
})
export class MarchandArmeHttpService {

  marchandArmes: Array<MarchandArme> = new Array<MarchandArme>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<MarchandArme> {
    return this.marchandArmes;
  }

  findById(id: number): Observable<MarchandArme> {
    return this.http.get<MarchandArme>(this.appConfigService.backEndUrl + "marchandArme/" + id);
  }

  create(marchandArme: MarchandArme) {
    this.http.post<MarchandArme>(this.appConfigService.backEndUrl + "marchandArme/", marchandArme).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(marchandArme: MarchandArme) {
    this.http.put<MarchandArme>(this.appConfigService.backEndUrl + "marchandArme/" + marchandArme.id, marchandArme).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "marchandArme/" + id);
  }


  load() {
    this.http.get<Array<MarchandArme>>(this.appConfigService.backEndUrl + "marchandArme/").subscribe(response => {
      this.marchandArmes = response;
    }, error => console.log(error));
  }


}
