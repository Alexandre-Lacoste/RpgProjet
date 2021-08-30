import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurService  {

  utilisateurs: Array<Utilisateur> = new Array<Utilisateur>();
  constructor(private http: HttpClient, private appConfigService: AppConfigService) { this.load();}

  findAll(): Array<Utilisateur> {
    return this.utilisateurs;
  }

  findById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.appConfigService.backEndUrl + "monProfil/" + id);
  }


  create(utilisateur: Utilisateur) {
    this.http.post<Utilisateur>(this.appConfigService.backEndUrl + "monProfil/", utilisateur).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(utilisateur: Utilisateur) {
    this.http.put<Utilisateur>(this.appConfigService.backEndUrl + "monProfil/" + utilisateur.id, utilisateur).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "monProfil/" + id);
  }

  load() {
    this.http.get<Array<Utilisateur>>(this.appConfigService.backEndUrl + "monProfil/").subscribe(response => {
      this.utilisateurs = response;
    }, error => console.log(error));
  }
}
