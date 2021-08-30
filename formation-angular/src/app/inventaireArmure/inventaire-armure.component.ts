import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {UtilisateurService} from "../utilisateur/utilisateur.service";
import {HeroHttpService} from "../hero/hero-http.service";
import {InventaireArmeService} from "../inventaireArme/inventaireArme.service";
import {InventaireArmureService} from "./inventaireArmure.service";
import {Hero} from "../model/Hero";
import {InventaireArme} from "../model/inventaireArme";
import {InventaireArmure} from "../model/inventaireArmure";

@Component({
  selector: 'app-inventaire-armure',
  templateUrl: './inventaire-armure.component.html',
  styleUrls: ['./inventaire-armure.component.scss']
})
export class InventaireArmureComponent implements OnInit {
  inventaireArmure: InventaireArmure= new InventaireArmure();
  inventaireArmureForm: InventaireArmure = null;

  constructor(private utilisateurService: UtilisateurService, private heroService: HeroHttpService, private inventaireArmeService: InventaireArmeService, private inventaireArmureService: InventaireArmureService) {

  }

  ngOnInit(): void {
    this.find(1);
  }

  find(id : number){
    this.inventaireArmureService.findById(id).subscribe(response=>
      {
        this.inventaireArmure=response;
        console.log(this.inventaireArmure);
      },
      error=>console.log(error));
  }

  add() {

    this.inventaireArmureForm = new InventaireArmure();
  }

  edit(id: number) {
    this.inventaireArmureService.findById(id).subscribe(resp => {
      this.inventaireArmureForm = resp;
    })
  }

  save() {
    this.inventaireArmureService.modify(this.inventaireArmureForm);
  }

  cancel() {
    this.inventaireArmureForm = null;
  }

}
