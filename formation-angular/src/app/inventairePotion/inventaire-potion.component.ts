import {Component, Input, OnInit} from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {UtilisateurService} from "../utilisateur/utilisateur.service";
import {HeroHttpService} from "../hero/hero-http.service";
import {InventairePotionService} from "../inventairePotion/inventairePotion.service";

import {ActivatedRoute} from "@angular/router";
import {InventairePotion} from "../model/inventairePotion";
@Component({
  selector: 'app-inventaire-potion',
  templateUrl: './inventaire-potion.component.html',
  styleUrls: ['../inventaireArme/inventaire-arme.component.scss']
})
export class InventairePotionComponent implements OnInit {
  @Input()
  mar: number;

  inventairePotion: InventairePotion= new InventairePotion();
  inventairePotionForm: InventairePotion = null;

  private paramMar: any;


  constructor(private utilisateurService: UtilisateurService, private heroService: HeroHttpService, private inventairePotionService: InventairePotionService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.paramMar = this.route.params.subscribe(params => {
      this.mar = +params['mar'];
    });
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


  delete(id: number) {
    this.inventairePotionService.deleteById(id).subscribe(resp => {
      this.inventairePotionService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.inventairePotionForm = null;
  }

}
