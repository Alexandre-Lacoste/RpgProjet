import { Component, OnInit } from '@angular/core';
import {CombatHttpService} from "./combat-http.service";
import {Monstre} from "../model/Monstre";
import {Utilisateur} from "../model/utilisateur";
import {MonstreHttpService} from "../monstre-Http.service";
import {UtilisateurHttpService} from "../utilisateur-http.service";

@Component({
  selector: 'combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit {
  monstre:Monstre;
  utilisateur:Utilisateur;

  constructor(private combatService:CombatHttpService,private monstreService:MonstreHttpService,private utilisateurService:UtilisateurHttpService) { }

  ngOnInit(): void {
    this.initCombat();
  }

  attaquer(){
    this.combatService.attaquer(this.utilisateur.id,this.monstre.id);
  }

  initCombat(){
    this.monstreService.findById(4).subscribe(resp=>{
      this.monstre=resp;
      console.log(this.monstre)
    });

    this.utilisateurService.findById(1).subscribe(resp=>{
      this.utilisateur=resp;
      console.log(this.utilisateur);
    })


  }

}
