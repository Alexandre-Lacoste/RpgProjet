import { Injectable } from '@angular/core';
import {Hero} from "../model/Hero";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";
import {Monstre} from "../model/Monstre";

@Injectable({
  providedIn: 'root'
})
export class HeroHttpService {

  heros: Array<Hero> = new Array<Hero>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    //this.load();
  }

  findAll(): Array<Hero> {
    return this.heros;
  }

  findAllHero(): Observable <Array<Hero>>{
    return this.http.get<Array<Hero>>(this.appConfigService.backEndUrl + "hero/");
  }

  findById(id: number):  Observable<Hero> {
    return this.http.get<Hero>(this.appConfigService.backEndUrl + "hero/" + id);
  }

  create(hero: Hero) {
    this.http.post<Hero>(this.appConfigService.backEndUrl + "hero/", hero).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(hero: Hero) {
    this.http.put<Hero>(this.appConfigService.backEndUrl + "hero/" + hero.id, hero).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "hero/" + id);
  }

  load() {
    this.http.get<Array<Hero>>(this.appConfigService.backEndUrl + "hero/").subscribe(response => {
      this.heros = response;
    }, error => console.log(error));
  }

}
