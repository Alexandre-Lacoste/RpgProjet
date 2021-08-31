import {Component, Input, OnInit} from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {UtilisateurService} from "../utilisateur/utilisateur.service";
import {HeroHttpService} from "../hero/hero-http.service";
import {Hero} from "../model/Hero";
import {ActivatedRoute} from "@angular/router";
import {InventaireArmure} from "../model/inventaireArmure";
import {InventaireArmureService} from "./inventaireArmure.service";
import {InventaireArme} from "../model/inventaireArme";
import {Objet} from "../model/objet";
import {ObjetService} from "../objet/objet.service";

@Component({
  selector: 'app-inventaire-armure',
  templateUrl: './inventaire-armure.component.html',
  styleUrls: ['../inventaireArme/inventaire-arme.component.scss']
})
export class InventaireArmureComponent implements OnInit {


  inventaireArmure: InventaireArmure= new InventaireArmure();
  inventaireArmureForm: InventaireArmure = null;
  objet: Objet;

  private qtegold: number;

  constructor(private utilisateurService: UtilisateurService, private objetService: ObjetService, private heroService: HeroHttpService, private inventaireArmureService: InventaireArmureService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.objetService.findById(1).subscribe(response=>
      {
        this.objet=response;

        this.qtegold = this.objet.qte;


      },
      error=>console.log(error));
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
  list(): Array<InventaireArmure> {
    return this.inventaireArmureService.findAll();
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
    if (this.inventaireArmureForm.id) {
      this.inventaireArmureService.modify(this.inventaireArmureForm);
    } else {
      this.inventaireArmureService.create(this.inventaireArmureForm);
    }

    this.inventaireArmureForm = null;
  }


  delete(inventaireArmure : InventaireArmure, id : number){
    if (inventaireArmure.qte > 1 ) {console.log(inventaireArmure)
      inventaireArmure.qte = inventaireArmure.qte - 1;
      this.inventaireArmureService.modify(inventaireArmure);
    } else if (inventaireArmure.qte = 1) {console.log(inventaireArmure.qte)
      this.inventaireArmureService.deleteById(id).subscribe(resp => {
        this.inventaireArmureService.load();
      }, error => console.log(error));
    }

  }

  cancel() {
    this.inventaireArmureForm = null;
  }

  gaingold(inventaireArmure : InventaireArmure,id:number) {

    this.qtegold = this.qtegold + inventaireArmure.armure.prixVente;
    this.objet.qte = this.qtegold;
    this.objetService.modify(this.objet);

  }



  reloadCurrentPage() {
    window.location.reload();
  }
}
