import { Injectable } from '@angular/core';
import {Monstre} from "./model/Monstre";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "./app-config.service";
import {Observable} from "rxjs";
import {Utilisateur} from "./model/utilisateur";
import {Admin} from "./model/Admin";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurHttpService {
  chemin : string;
  utilisateurs:Array<Utilisateur> = new Array<Utilisateur>();

  constructor(private http:HttpClient,private appConfigService:AppConfigService) {
    this.load();
    this.chemin=this.appConfigService.backEndUrl + "utilisateur/"
  }

  findAll():Array<Utilisateur>{
    return this.utilisateurs;
  }
  findById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.chemin + id+"/person/detail/");
  }

  create(utilisateur: Utilisateur) {
    this.http.post<Utilisateur>(this.chemin, utilisateur).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  createbyInsc(utilisateur: Utilisateur) {
    this.http.post<Utilisateur>(this.appConfigService.backEndUrl + "utilisateur/", utilisateur).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }


  modify(utilisateur: Utilisateur) {
    this.http.put<Utilisateur>(this.chemin + utilisateur.id, utilisateur).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "utilisateur/" + id);
  }


  load() {
    this.http.get<Array<Utilisateur>>(this.chemin).subscribe(response => {
      this.utilisateurs = response;
    }, error => console.log(error));
  }
}
