import { Injectable } from '@angular/core';
import {Monstre} from "./model/Monstre";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "./app-config.service";
import {Observable} from "rxjs";
import {Hero} from "./model/Hero";

@Injectable({
  providedIn: 'root'
})
export class MonstreHttpService {

  chemin : string;
  monstres:Array<Monstre> = new Array<Monstre>();

  constructor(private http:HttpClient,private appConfigService:AppConfigService) {
    this.load();
  }

  findAll():Array<Monstre>{
    return this.monstres;
  }

  findAllMonstre(): Observable <Array<Monstre>>{
    return this.http.get<Array<Monstre>>(this.appConfigService.backEndUrl + "monstre/");
  }



  findById(id: number): Observable<Monstre> {
    return this.http.get<Monstre>(this.appConfigService.backEndUrl + "monstre/" + id+"/detail");
  }
  findByIdAdmin(id: number):  Observable<Monstre> {
    return this.http.get<Monstre>(this.appConfigService.backEndUrl + "monstre/" + id);
  }

  create(monstre: Monstre) {
    this.http.post<Monstre>(this.appConfigService.backEndUrl + "monstre/", monstre).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(monstre: Monstre) {
    this.http.put<Monstre>(this.appConfigService.backEndUrl + "monstre/"+ monstre.id, monstre).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteByIdAdmin(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "monstre/" + id);
  }



  load() {
    this.http.get<Array<Monstre>>(this.appConfigService.backEndUrl + "monstre/").subscribe(response => {
      this.monstres = response;
    }, error => console.log(error));
  }
}
