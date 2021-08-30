import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Utilisateur} from "../model/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class CombatHttpService {

  chemin:string;
  constructor(private http:HttpClient,private appConfigService:AppConfigService) {
    this.chemin=this.appConfigService.backEndUrl+"utilisateur/"
  }

  attaquer(idUtilisateur : number, idMonstre:number) {
    this.http.get<void>(this.chemin+idUtilisateur+"/combat/attaquer/"+idMonstre);
  }
}
