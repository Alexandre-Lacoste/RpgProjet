import {Component, Input, OnInit} from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {UtilisateurService} from "../utilisateur/utilisateur.service";
import {HeroHttpService} from "../hero/hero-http.service";
import {Hero} from "../model/Hero";
import {ActivatedRoute} from "@angular/router";
import {InventaireArmure} from "../model/inventaireArmure";
import {InventaireArmureService} from "./inventaireArmure.service";

@Component({
  selector: 'app-inventaire-armure',
  templateUrl: './inventaire-armure.component.html',
  styleUrls: ['../inventaireArme/inventaire-arme.component.scss']
})
export class InventaireArmureComponent implements OnInit {
  @Input()
  mar: number;

  inventaireArmure: InventaireArmure= new InventaireArmure();
  inventaireArmureForm: InventaireArmure = null;

  private paramMar: any;


  constructor(private utilisateurService: UtilisateurService, private heroService: HeroHttpService, private inventaireArmureService: InventaireArmureService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.paramMar = this.route.params.subscribe(params => {
      this.mar = +params['mar'];
    });
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


  delete(id: number) {
    this.inventaireArmureService.deleteById(id).subscribe(resp => {
      this.inventaireArmureService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.inventaireArmureForm = null;
  }

}
