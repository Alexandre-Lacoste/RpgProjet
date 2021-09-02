import {Component, Input, OnInit} from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {UtilisateurService} from "../utilisateur/utilisateur.service";
import {HeroHttpService} from "../hero/hero-http.service";
import {InventairePotionService} from "../inventairePotion/inventairePotion.service";

import {ActivatedRoute} from "@angular/router";
import {InventairePotion} from "../model/inventairePotion";
import {InventaireArme} from "../model/inventaireArme";
import {Objet} from "../model/objet";
import {ObjetService} from "../objet/objet.service";
import {InventaireArmure} from "../model/inventaireArmure";
@Component({
  selector: 'app-inventaire-potion',
  templateUrl: './inventaire-potion.component.html',
  styleUrls: ['../inventaireArme/inventaire-arme.component.scss']
})
export class InventairePotionComponent implements OnInit {

  inventairePotion: InventairePotion= new InventairePotion();
  inventairePotionForm: InventairePotion = null;

  objet: Objet;

  private qtegold: number;

  constructor(private utilisateurService: UtilisateurService, private heroService: HeroHttpService, private inventairePotionService: InventairePotionService,
              private route: ActivatedRoute, private objetService: ObjetService) {

  }
  ngOnInit() {
    this.objetService.findById(1).subscribe(response=>
      {
        this.objet=response;

        this.qtegold = this.objet.qte;
        console.log(this.qtegold);


      },
      error=>console.log(error));
    this.find(1);
  }


  find(id : number){
    this.inventairePotionService.findById(id).subscribe(response=>
      {
        this.inventairePotion=response;
        console.log(this.inventairePotion);
      },
      error=>console.log(error));
  }
  list(): Array<InventairePotion> {
    return this.inventairePotionService.findAll();
  }

  add() {
    this.inventairePotionForm = new InventairePotion();
  }

  edit(id: number) {
    this.inventairePotionService.findById(id).subscribe(resp => {
      this.inventairePotionForm = resp;
    })
  }

  save() {
    if (this.inventairePotionForm.id) {
      this.inventairePotionService.modify(this.inventairePotionForm);
    } else {
      this.inventairePotionService.create(this.inventairePotionForm);
    }

    this.inventairePotionForm = null;
  }


  delete(inventairePotion : InventairePotion, id : number){
    if (inventairePotion.qte > 1 ) {console.log(inventairePotion)
      inventairePotion.qte = inventairePotion.qte - 1;
      this.inventairePotionService.modify(inventairePotion);
    } else if (inventairePotion.qte = 1) {console.log(inventairePotion.qte)
      this.inventairePotionService.deleteById(id).subscribe(resp => {
        this.inventairePotionService.load();
      }, error => console.log(error));
    }

  }

  cancel() {
    this.inventairePotionForm = null;
  }

  gaingold(inventairePotion : InventairePotion,id:number) {

    this.qtegold = this.qtegold + inventairePotion.potion.prixVente;
    this.objet.qte = this.qtegold;
    this.objetService.modify(this.objet);

  }
  timeOutAlert(nom :string,prixVente : number){
    let qtegoldstring: string ;
    let prixVentestring : string;
    if ( this.qtegold != null )  qtegoldstring = this.qtegold.toString();
    if ( this.qtegold != null )  prixVentestring = prixVente.toString();

    setTimeout(function(){ alert("Vous avez vendu " +nom+ " pour la modique somme de " + prixVentestring + "  gold. " + "  Selon moi vous vous etes fait arnaquer"+
      "" +
      "                         Vous avez quand même " + qtegoldstring + " Gold restants"); }, 1500);
  }

  reloadCurrentPage() {
    setTimeout(function (){window.location.reload();},1510);
  }
}
