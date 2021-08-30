import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {UtilisateurService} from "../utilisateur/utilisateur.service";
import {HeroHttpService} from "../hero/hero-http.service";
import {InventaireArmeService} from "../inventaireArme/inventaireArme.service";

import {Hero} from "../model/Hero";
import {InventaireArme} from "../model/inventaireArme";
import {InventaireArmure} from "../model/inventaireArmure";
import {InventaireArmureService} from "../inventaireArmure/inventaireArmure.service";

@Component({
  selector: 'app-inventaire-armure',
  templateUrl: './inventaire-arme.component.html',
  styleUrls: ['./inventaire-arme.component.scss']
})
export class InventaireArmeComponent implements OnInit {
  inventaireArme: InventaireArme= new InventaireArme();
  inventaireArmeForm: InventaireArme = null;

  constructor(private utilisateurService: UtilisateurService, private heroService: HeroHttpService, private inventaireArmeService: InventaireArmeService, private inventaireArmureService: InventaireArmureService) {

  }

  ngOnInit(): void {
    this.find(1);
  }

  find(id : number){
    this.inventaireArmeService.findById(id).subscribe(response=>
      {
        this.inventaireArme=response;
        console.log(this.inventaireArme);
      },
      error=>console.log(error));
  }

  add() {

    this.inventaireArmeForm = new InventaireArme();
  }

  edit(id: number) {
    this.inventaireArmeService.findById(id).subscribe(resp => {
      this.inventaireArmeForm = resp;
    })
  }

  save() {
    this.inventaireArmeService.modify(this.inventaireArmeForm);
  }

  cancel() {
    this.inventaireArmeForm = null;
  }

}





