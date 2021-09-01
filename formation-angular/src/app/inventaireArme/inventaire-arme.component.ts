import {Component, Input, OnInit} from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {UtilisateurService} from "../utilisateur/utilisateur.service";
import {HeroHttpService} from "../hero/hero-http.service";
import {InventaireArmeService} from "../inventaireArme/inventaireArme.service";

import {Hero} from "../model/Hero";
import {InventaireArme} from "../model/inventaireArme";
import {InventaireArmure} from "../model/inventaireArmure";
import {InventaireArmureService} from "../inventaireArmure/inventaireArmure.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Objet} from "../model/objet";
import {ObjetService} from "../objet/objet.service";
import {MarchandHttpService} from "../marchand/marchand-http.service";

@Component({
  selector: 'app-inventaire-arme',
  templateUrl: './inventaire-arme.component.html',
  styleUrls: ['./inventaire-arme.component.scss']
})
export class  InventaireArmeComponent implements OnInit {


  inventaireArme: InventaireArme = new InventaireArme();
  inventaireArmeForm: InventaireArme = null;

  private paramMar: any;
  objet: Objet;

  private qtegold: number;
private qtegoldstring : string;
  constructor(private utilisateurService: UtilisateurService, private heroService: HeroHttpService, private inventaireArmeService: InventaireArmeService,
              private inventaireArmureService: InventaireArmureService, private marchandService: MarchandHttpService, private route: ActivatedRoute, private objetService: ObjetService) {

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




  delete(inventaireArme : InventaireArme, id : number){
    if (inventaireArme.quantite > 1 ) {
      inventaireArme.quantite = inventaireArme.quantite - 1;
      this.inventaireArmeService.modify(inventaireArme);
    } else if (inventaireArme.quantite = 1) {
      this.inventaireArmeService.deleteById(id).subscribe(resp => {
        this.inventaireArmeService.load();
      }, error => console.log(error));
    }

  }


  cancel() {
    this.inventaireArmeForm = null;
  }



  gaingold(inventaireArme : InventaireArme,id:number) {

    this.qtegold = this.qtegold + inventaireArme.arme.prixVente;
    this.objet.qte = this.qtegold;
    this.objetService.modify(this.objet);

}
timeOutAlert(nom :string,prixVente : number){
  let qtegoldstring: string ;
  let prixVentestring : string;
  if ( this.qtegold != null )  qtegoldstring = this.qtegold.toString();
  if ( this.qtegold != null )  prixVentestring = prixVente.toString();

  setTimeout(function(){ alert("Vous avez acheté " +nom+ " pour la modique somme de " + prixVentestring + "  gold."  +
    "" +
    "                         Il vous reste " + qtegoldstring + " Gold"); }, 1500);
}

  reloadCurrentPage() {
  setTimeout(function (){window.location.reload();},1510);
  }
}
