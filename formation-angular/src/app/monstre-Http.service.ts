import { Injectable } from '@angular/core';
import {Monstre} from "./model/Monstre";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "./app-config.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MonstreHttpService {

  chemin : string;
  monstres:Array<Monstre> = new Array<Monstre>();

  constructor(private http:HttpClient,private appConfigService:AppConfigService) {
    this.load();
    this.chemin=this.appConfigService.backEndUrl + "monstre/"
  }

  findAll():Array<Monstre>{
    return this.monstres;
  }
  findById(id: number): Observable<Monstre> {
    return this.http.get<Monstre>(this.chemin + id+"/detail");
  }

  create(monstre: Monstre) {
    this.http.post<Monstre>(this.chemin, monstre).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(monstre: Monstre) {
    this.http.put<Monstre>(this.chemin + monstre.id, monstre).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }


  load() {
    this.http.get<Array<Monstre>>(this.chemin).subscribe(response => {
      this.monstres = response;
    }, error => console.log(error));
  }
}
