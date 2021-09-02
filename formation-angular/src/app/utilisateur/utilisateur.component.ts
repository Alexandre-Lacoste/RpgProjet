import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
import {Inventaire} from "../model/inventaire";
import {InventairePotion} from "../model/inventairePotion";
import {InventairePotionService} from "../inventairePotion/inventairePotion.service";
import {MarchandArme} from "../model/MarchandArme";
import {InventaireService} from "../inventaire.service";
import {Arme} from "../model/Arme";
import {Armure} from "../model/Armure";


@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  heroForm:Hero=null;
  heros:Array<Hero>=new Array<Hero>();
  utilisateur: Utilisateur= new Utilisateur();
  utilisateurForm: Utilisateur = null;
  inventaire: Inventaire=new Inventaire();
  arme:boolean;
  hero:boolean;
  armure:boolean;
  constructor(private utilisateurService: UtilisateurService, private heroService: HeroHttpService, private inventaireArmeService: InventaireArmeService, private inventaireArmureService: InventaireArmureService, private inventairePotionService: InventairePotionService, private inventaireService: InventaireService) {

  }



  ngOnInit(): void {
    this.listHero();
  }



  listHero() {
    this.heroService.findAllHero().subscribe(resp=>{
      this.heros=resp;
      console.log(this.heros);
    });
  }


  list(): Array<Utilisateur> {
    return this.utilisateurService.findAll();
  }

  ListInventaireArme(): Array<InventaireArme>{
    return this.inventaireArmeService.findAll();
  }
  ListInventaireArmure(): Array<InventaireArmure>{
    return this.inventaireArmureService.findAll();
  }
  ListInventaire(): Array<Inventaire>{
    return this.inventaireService.findAll();
  }

  ListInventairePotion(): Array<InventairePotion>{
    return this.inventairePotionService.findAll();

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

  changeEcran(race:string): number{
    if(race=="elfe"){
      return 1;
    }
    if(race=="guerrier"){
      return 2;
    }
    else{
      return 0;
    }
  }

  choixArme(arme:Arme,utilsateur:Utilisateur){
    console.log(utilsateur.id);
    console.log(arme);

    utilsateur.arme=arme;
    this.utilisateur=utilsateur;
    this.utilisateurService.modify(this.utilisateur);
    this.arme=false;
    this.armure=false;
    this.hero=false;

  }

  choixArmure(armure:Armure,utilsateur:Utilisateur){
    utilsateur.armure=armure;
    this.utilisateur=utilsateur;
    this.utilisateurService.modify(this.utilisateur);
    this.arme=false;
    this.armure=false;
    this.hero=false;

  }

  choixHero(hero:Hero,utilisateur:Utilisateur){

    console.log(utilisateur);

    utilisateur.hero=hero;

    utilisateur.vie=hero.vie;
    utilisateur.vieMax=hero.vie;

    utilisateur.attaque=hero.attaque;
    utilisateur.attaqueMax=hero.attaque;

    utilisateur.defense=hero.defense;
    utilisateur.defenseMax=hero.defense;

    utilisateur.agilite=hero.agilite;
    utilisateur.agiliteMax=hero.agilite;

    utilisateur.vitesse=hero.vitesse;
    utilisateur.vitesseMax=hero.vitesse;
    console.log(utilisateur.version)

    this.utilisateur=utilisateur;
    console.log(this.utilisateur.version)
    this.utilisateurService.modify(this.utilisateur);
    this.arme=false;
    this.armure=false;
    this.hero=false;
  }

  declencheHero(){
    this.hero=true;
    this.arme=false;
    this.armure=false;
  }
  declencheArme(){
    this.arme=true;
    this.hero=false;
    this.armure=false;
  }
  declencheArmure(){
    this.armure=true;
    this.hero=false;
    this.arme=false;
  }

}
