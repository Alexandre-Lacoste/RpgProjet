import { Injectable } from '@angular/core';
import {Armure} from "../model/Armure";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArmureHttpService {

  armures: Array<Armure> = new Array<Armure>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<Armure> {
    return this.armures;
  }

  findById(id: number):  Observable<Armure> {
    return this.http.get<Armure>(this.appConfigService.backEndUrl + "armure/" + id);
  }

  create(armure: Armure) {
    this.http.post<Armure>(this.appConfigService.backEndUrl + "armure/", armure).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(armure: Armure) {
    this.http.put<Armure>(this.appConfigService.backEndUrl + "armure/" + armure.id, armure).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "armure/" + id);
  }

  load() {
    this.http.get<Array<Armure>>(this.appConfigService.backEndUrl + "armure/").subscribe(response => {
      this.armures = response;
    }, error => console.log(error));
  }





}
