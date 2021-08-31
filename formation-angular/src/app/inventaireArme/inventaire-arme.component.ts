import {Component, Input, OnInit} from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {UtilisateurService} from "../utilisateur/utilisateur.service";
import {HeroHttpService} from "../hero/hero-http.service";
import {InventaireArmeService} from "../inventaireArme/inventaireArme.service";

import {Hero} from "../model/Hero";
import {InventaireArme} from "../model/inventaireArme";
import {InventaireArmure} from "../model/inventaireArmure";
import {InventaireArmureService} from "../inventaireArmure/inventaireArmure.service";
import {ActivatedRoute} from "@angular/router";
import {Objet} from "../model/objet";
import {ObjetService} from "../objet/objet.service";

@Component({
  selector: 'app-inventaire-arme',
  templateUrl: './inventaire-arme.component.html',
  styleUrls: ['./inventaire-arme.component.scss']
})
export class InventaireArmeComponent implements OnInit {
  @Input()
  mar: number;

  inventaireArme: InventaireArme = new InventaireArme();
  inventaireArmeForm: InventaireArme = null;

  private paramMar: any;
  objet: Objet;


  constructor(private utilisateurService: UtilisateurService, private heroService: HeroHttpService, private inventaireArmeService: InventaireArmeService,
              private inventaireArmureService: InventaireArmureService, private route: ActivatedRoute, private objetService: ObjetService) {

  }

  ngOnInit() {
    this.paramMar = this.route.params.subscribe(params => {
      this.mar = +params['mar'];
    });
    this.find(1);
  }

  find(id: number) {
    this.inventaireArmeService.findById(id).subscribe(response => {
        this.inventaireArme = response;
        console.log(this.inventaireArme);
      },
      error => console.log(error));
  }

  list(): Array<InventaireArme> {
    return this.inventaireArmeService.findAll();
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
    if (this.inventaireArmeForm.id) {
      this.inventaireArmeService.modify(this.inventaireArmeForm);
    } else {
      this.inventaireArmeService.create(this.inventaireArmeForm);
    }

    this.inventaireArmeForm = null;
  }


  delete(id: number) {
    if (this.inventaireArme.quantite > 1) {
      this.inventaireArme.quantite = this.inventaireArme.quantite - 1;
    } else {
      this.inventaireArmeService.deleteById(id).subscribe(resp => {
        this.inventaireArmeService.load();
      }, error => console.log(error));
    }
  }

  cancel() {
    this.inventaireArmeForm = null;
  }

  gaingold() {

  this.objet.qte = this.objet.qte + this.inventaireArme.arme.prixVente
}
}
