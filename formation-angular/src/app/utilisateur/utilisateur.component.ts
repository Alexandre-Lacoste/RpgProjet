import { Component, OnInit } from '@angular/core';
import {Compte} from "../model/compte";
import {Utilisateur} from "../model/utilisateur";
import {Observable} from "rxjs";
import {UtilisateurService} from "./utilisateur.service";
import {InventaireArme} from "../model/inventaireArme";
import {InventaireArmure} from "../model/inventaireArmure";
import {Hero} from "../model/Hero";
import {HeroHttpService} from "../hero/hero-http.service";
import {InventaireArmeService} from "../inventaireArme/inventaireArme.service";
import {InventaireArmureService} from "../inventaireArmure/inventaireArmure.service";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  utilisateur: Utilisateur= new Utilisateur();
  utilisateurForm: Utilisateur = null;

  constructor(private utilisateurService: UtilisateurService, private heroService: HeroHttpService, private inventaireArmeService: InventaireArmeService, private inventaireArmureService: InventaireArmureService) {

  }

  ngOnInit(): void {
    this.find(1);
  }

  find(id : number){
    this.utilisateurService.findById(id).subscribe(response=>
      {
        this.utilisateur=response;
        console.log(this.utilisateur);
      },
      error=>console.log(error));
  }

  add() {
    this.utilisateurForm = new Utilisateur();
    this.utilisateurForm.hero = new Hero();
    this.utilisateurForm.inventaireArme = new InventaireArme();
    this.utilisateurForm.inventaireArmure = new InventaireArmure();
  }

  edit(id: number) {
    this.utilisateurService.findById(id).subscribe(resp => {
      this.utilisateurForm = resp;
    })
  }

  save() {
    this.utilisateurService.modify(this.utilisateurForm);
  }

  cancel() {
    this.utilisateurForm = null;
  }

}
