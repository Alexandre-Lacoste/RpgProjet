import { Component, OnInit } from '@angular/core';
import {CombatHttpService} from "./combat-http.service";
import {Monstre} from "../model/Monstre";
import {Utilisateur} from "../model/utilisateur";
import {MonstreHttpService} from "../monstre-Http.service";
import {UtilisateurHttpService} from "../utilisateur-http.service";
import {Arme} from "../model/Arme";
import {Armure} from "../model/Armure";
import {InventairePotion} from "../model/inventairePotion";
import {InventaireArme} from "../model/inventaireArme";
import {InventaireArmeService} from "../inventaireArme/inventaireArme.service";
import {InventaireArmure} from "../model/inventaireArmure";
import {InventaireArmureService} from "../inventaireArmure/inventaireArmure.service";
import {InventairePotionService} from "../inventairePotion/inventairePotion.service";
import {Potion} from "../model/Potion";

@Component({
  selector: 'combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit {
  monstre:Monstre = null;
  utilisateur:Utilisateur;
  phase:number=0;
  potionPhase:number=1;
  vieMaxMonstre:number;
  monstres:Array<Monstre>=new Array<Monstre>();
  potions:Array<InventairePotion>=new Array<InventairePotion>();
  inventairePotion:InventairePotion=null;



  constructor(private inventaireArmureService:InventaireArmureService, private inventaireArmeService:InventaireArmeService,private combatService:CombatHttpService,private monstreService:MonstreHttpService, private utilisateurService:UtilisateurHttpService, private inventairePotionService:InventairePotionService) { }

  ngOnInit(): void {
    this.phase=0;
    this.potionPhase=1;
    this.listMonstre();
  }

  initCombat(idMonstre:number){
    this.monstreService.findById(idMonstre).subscribe(resp=>{
      this.monstre=resp;
    });

    this.utilisateurService.findById(1).subscribe(resp=>{
      this.utilisateur=resp;
    });
    this.phase=1;
    this.vieMaxMonstre=this.monstre.vie;
  }

  listMonstre() {
    this.monstreService.findAllMonstre().subscribe(resp=>{
      this.monstres=resp;
      console.log(this.monstres);
    });
  }

  listInvPotion(id:number){
    this.inventairePotionService.findAllByUtilisateurId(id).subscribe(resp=>{
      this.potions=resp;
      console.log(this.potions)
    });
  }


  calculAttaqueUtilisateur():number {
    let jetDe = Math.floor(Math.random() * 6);
    let attUtilisateur:number;
    let coefHero:number;
    console.log("jet de " +jetDe);
    if(this.utilisateur.arme==null){
      attUtilisateur=this.utilisateur.hero.coefAttaque* this.utilisateur.attaque;
    }else {
      if (jetDe < 2) {
        attUtilisateur = this.utilisateur.attaque + this.utilisateur.arme.attaque;
      } else {
        if (jetDe >= 4) {
          console.log("choix 2");
          coefHero = this.utilisateur.hero.coefPrecision * this.utilisateur.agilite;
          if (coefHero > (this.utilisateur.hero.coefAttaque * this.utilisateur.attaque)) {
            coefHero = (this.utilisateur.hero.coefAttaque * this.utilisateur.attaque) / coefHero;
          } else {
            coefHero = coefHero / (this.utilisateur.hero.coefAttaque * this.utilisateur.attaque);
          }
          attUtilisateur = ((this.utilisateur.hero.coefAttaque * this.utilisateur.attaque) + this.utilisateur.arme.attaque) * (1 + coefHero);
        } else {
          attUtilisateur = (this.utilisateur.hero.coefAttaque * this.utilisateur.attaque) + this.utilisateur.arme.attaque;
        }
      }
      attUtilisateur = Math.round(attUtilisateur);
      console.log("att hero " + attUtilisateur);
    }
    return attUtilisateur;
  }

  defenseUtilisateur():number {
    let defUtilisateur = 0;
    let coefHero = 0;
    let jetDe = Math.floor(Math.random() * 6);
    if (this.utilisateur.armure == null) {
      defUtilisateur=this.utilisateur.hero.coefDefense * this.utilisateur.defense;
    } else {
      if (jetDe < 2) {
        defUtilisateur = this.utilisateur.defense + this.utilisateur.armure.defense;
      } else if (jetDe >= 4) {
        coefHero = this.utilisateur.hero.coefVitesse * this.utilisateur.vitesse;
        if (coefHero > (this.utilisateur.hero.coefDefense * this.utilisateur.defense)) {
          coefHero = (this.utilisateur.hero.coefDefense * this.utilisateur.defense) / coefHero;
        } else {
          coefHero = coefHero / (this.utilisateur.hero.coefDefense * this.utilisateur.defense);
        }
        defUtilisateur = ((this.utilisateur.hero.coefDefense * this.utilisateur.defense) + this.utilisateur.armure.defense) * (1 + coefHero);

      } else {
        coefHero = this.utilisateur.vitesse / this.utilisateur.armure.vitesse;
        defUtilisateur = ((this.utilisateur.hero.coefDefense * this.utilisateur.defense) + this.utilisateur.armure.defense) * coefHero;
      }
      defUtilisateur = Math.round(defUtilisateur);
      console.log("def utili" + defUtilisateur);

    }
    return defUtilisateur;
  }



   calculAttaqueMonstre():number{
    let attMonstre=0;
    let coefMonstre=0;
     let jetDe = Math.floor(Math.random() * 6);
     console.log("de "+jetDe);
     if(jetDe<3) {
       coefMonstre = this.monstre.agilite/this.monstre.arme.agilite;
       attMonstre = this.monstre.attaque+this.monstre.arme.attaque*coefMonstre;
     }else {
       coefMonstre = (this.monstre.agilite*this.monstre.vitesse)/this.monstre.arme.agilite;
       attMonstre = this.monstre.attaque+this.monstre.arme.attaque*coefMonstre;
     }
     attMonstre=Math.round(attMonstre);
     console.log("monstre attaque " +attMonstre);
     return attMonstre;
   }


   calculDefenseMonstre():number{
    let defMonstre=0;
    let coefMonstre=0;
     let jetDe = Math.floor(Math.random() * 6); // jet de dé entre 0 et 6-1
     if(jetDe <3) {
       coefMonstre = this.monstre.vitesse/this.monstre.armure.vitesse;
       defMonstre = this.monstre.defense+this.monstre.armure.defense*coefMonstre;
     }else {
       coefMonstre = (this.monstre.vitesse*this.monstre.agilite)/this.monstre.armure.vitesse;
       defMonstre = defMonstre+this.monstre.armure.defense * coefMonstre;
     }
     defMonstre=Math.round(defMonstre);
     return defMonstre;
   }

  attaquer(){
    if(this.utilisateur.vitesse>=this.monstre.vitesse){
      let attUtilisateur=this.calculAttaqueUtilisateur();
      let defMonstre=this.calculDefenseMonstre();

      console.log("att utili "+attUtilisateur);
      console.log("def monstre "+defMonstre);
      this.monstre.vie=(this.monstre.vie+defMonstre) - attUtilisateur;

      console.log(this.monstre.vie);

      if(this.monstre.vie<=0) {
        console.log("version "+this.utilisateur.version);
        this.utilisateurService.modify(this.utilisateur);
        this.monstre.vie = 0;
        let inventaireArme = new InventaireArme(1,this.monstre.arme,this.utilisateur.inventaire);
        let inventaireArmure = new InventaireArmure(1,this.monstre.armure,this.utilisateur.inventaire);

       this.inventaireArmeService.create(inventaireArme);
       this.inventaireArmureService.create(inventaireArmure);
       this.phase=4;
      }else{
        let attMonstre = this.calculAttaqueMonstre();
        let defUtilisateur=this.defenseUtilisateur();

        console.log("att monstre "+attMonstre);
        console.log("def utili "+defUtilisateur);

        this.utilisateur.vie = this.utilisateur.vie+defUtilisateur - attMonstre;
        if(this.utilisateur.vie<0){
          console.log("version " +this.utilisateur.version);
          this.utilisateur.vie=0;
          this.utilisateurService.modify(this.utilisateur);
        }
      }

    }  else{
      let attMonstre = this.calculAttaqueMonstre();
      let defUtilisateur=this.defenseUtilisateur();

      this.utilisateur.vie = this.utilisateur.vie+defUtilisateur - attMonstre;
      if(this.utilisateur.vie<=0){
        this.utilisateur.vie=0;
        console.log("version "+this.utilisateur.version);
        this.utilisateurService.modify(this.utilisateur);

        //perdu --> pop up + gold en moins
      }else{
        let attUtilisateur=this.calculAttaqueUtilisateur();
        let defMonstre=this.calculDefenseMonstre();
        this.monstre.vie=(this.monstre.vie+defMonstre) - attUtilisateur;
        if(this.monstre.vie<=0) {
          console.log("version "+this.utilisateur.version);
          this.utilisateurService.modify(this.utilisateur);
          this.monstre.vie = 0;
          let inventaireArme = new InventaireArme(1,this.monstre.arme,this.utilisateur.inventaire);
          let inventaireArmure = new InventaireArmure(1,this.monstre.armure,this.utilisateur.inventaire);

          this.inventaireArmeService.create(inventaireArme);
         this.inventaireArmureService.create(inventaireArmure);
         this.phase=4;
        }
      }

    }

  }

  fuir(){
    let arme :Arme=null;
    let armure : Armure = null;

    this.utilisateur.armure=armure;
    this.utilisateur.arme=arme;

   this.utilisateurService.modify(this.utilisateur);

    this.phase=2;
  }

  potion(){
    this.listInvPotion(this.utilisateur.id);
    this.potionPhase=0;
  }

  annulerPotion(){
    this.potionPhase=1;
  }

  utiliserPotion(id:number,p:InventairePotion){

    switch (p.potion.type) {
      case "soin": {
        this.utilisateur.vie = this.utilisateur.vie + p.potion.valeur;
        if (this.utilisateur.vie > this.utilisateur.vieMax) {
          this.utilisateur.vie = this.utilisateur.vieMax;
        }
        this.utilisateurService.modify(this.utilisateur);
        this.inventairePotionService.deleteById(p.id).subscribe(resp=>{
          this.inventairePotionService.load();
        },error => console.log(error));
        this.potionPhase=1;

        break;
      }

      case "attaquePlus": {
        this.utilisateur.attaque = this.utilisateur.attaque + p.potion.valeur;
        if (this.utilisateur.attaque > this.utilisateur.attaqueMax) {
          this.utilisateur.attaque = this.utilisateur.attaqueMax;
        }
        this.utilisateurService.modify(this.utilisateur);
        this.inventairePotionService.deleteById(p.id).subscribe(resp=>{
          this.inventairePotionService.load();
        },error => console.log(error));
        this.potionPhase=1;
        break;
      }

      case "vitessePlus": {
        this.utilisateur.vitesse = this.utilisateur.vitesse + p.potion.valeur;
        if (this.utilisateur.vitesse > this.utilisateur.vitesseMax) {
          this.utilisateur.vitesse = this.utilisateur.vitesseMax;
        }
        this.utilisateurService.modify(this.utilisateur);
        this.inventairePotionService.deleteById(p.id).subscribe(resp=>{
          this.inventairePotionService.load();
        },error => console.log(error));
        this.potionPhase=1;
        break;
      }

      case "defensePlus": {
        this.utilisateur.defense = this.utilisateur.defense + p.potion.valeur;
        if (this.utilisateur.defense > this.utilisateur.defenseMax) {
          this.utilisateur.defense = this.utilisateur.defenseMax;
        }
        this.utilisateurService.modify(this.utilisateur);
        this.inventairePotionService.deleteById(p.id).subscribe(resp=>{
          this.inventairePotionService.load();
        },error => console.log(error));
        this.potionPhase=1;
        break;
      }

      case "agilitePlus": {
        this.utilisateur.agilite = this.utilisateur.agilite + p.potion.valeur;
        if (this.utilisateur.agilite > this.utilisateur.agiliteMax) {
          this.utilisateur.agilite = this.utilisateur.agiliteMax;
        }
        this.utilisateurService.modify(this.utilisateur);
        this.inventairePotionService.deleteById(p.id).subscribe(resp=>{
          this.inventairePotionService.load();
        },error => console.log(error));
        this.potionPhase=1;
        break;
      }


    }


  }
}
