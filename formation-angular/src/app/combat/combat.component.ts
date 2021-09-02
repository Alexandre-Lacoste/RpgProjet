import {Component, Input, OnInit} from '@angular/core';
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
import {ActivatedRoute} from "@angular/router";

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

  @Input()
  idUtil:number;

  private paramMar: any;



  constructor(private route: ActivatedRoute,private inventaireArmureService:InventaireArmureService, private inventaireArmeService:InventaireArmeService,private combatService:CombatHttpService,private monstreService:MonstreHttpService, private utilisateurService:UtilisateurHttpService, private inventairePotionService:InventairePotionService) { }

  ngOnInit(): void {
    this.paramMar = this.route.params.subscribe(params => {
      this.idUtil = params['idUtil'];
    });
    this.phase=0;
    this.potionPhase=1;
    this.listMonstre();
  }

  initCombat(idMonstre:number){
    this.monstreService.findById(idMonstre).subscribe(resp=>{
      this.monstre=resp;
    });

    this.utilisateurService.findById(this.idUtil).subscribe(resp=>{
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
      if (jetDe < 4) {
        attUtilisateur = (this.utilisateur.hero.coefAttaque * this.utilisateur.attaque) + this.utilisateur.arme.attaque;
      } else {
          coefHero = this.utilisateur.hero.coefPrecision * this.utilisateur.agilite;
          coefHero=(coefHero/100)+1;
          console.log(coefHero);
          console.log(((this.utilisateur.hero.coefAttaque * this.utilisateur.attaque) + this.utilisateur.arme.attaque))
          attUtilisateur = ((this.utilisateur.hero.coefAttaque * this.utilisateur.attaque) + this.utilisateur.arme.attaque) * coefHero;
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
      if (jetDe < 4) {
        defUtilisateur = this.utilisateur.defense + this.utilisateur.armure.defense;
      } else if (jetDe >= 4) {
        coefHero = (this.utilisateur.hero.coefVitesse * this.utilisateur.vitesse) / this.utilisateur.armure.vitesse;
        coefHero = (coefHero / 100) + 1;
        defUtilisateur = ((this.utilisateur.hero.coefDefense * this.utilisateur.defense) + this.utilisateur.armure.defense) * coefHero;
      }
      defUtilisateur = Math.round(defUtilisateur);
    }
    return defUtilisateur;
  }



   calculAttaqueMonstre():number{
    let attMonstre=0;
    let coefMonstre=0;
     let jetDe = Math.floor(Math.random() * 6);
     if(jetDe<3) {
       attMonstre = (this.monstre.attaque+this.monstre.arme.attaque);
     }else {
       coefMonstre = (this.monstre.agilite*this.monstre.vitesse)/this.monstre.arme.agilite;
       coefMonstre=(coefMonstre/100 +1);
       attMonstre = (this.monstre.attaque+this.monstre.arme.attaque)*coefMonstre;

     }
     attMonstre=Math.round(attMonstre);
     return attMonstre;
   }


   calculDefenseMonstre():number{
    let defMonstre=0;
    let coefMonstre=0;
     let jetDe = Math.floor(Math.random() * 6); // jet de dé entre 0 et 6-1
     if(jetDe <3) {
       defMonstre = (this.monstre.defense+this.monstre.armure.defense);
     }else {
       coefMonstre = (this.monstre.vitesse*this.monstre.agilite)/this.monstre.armure.vitesse;
       coefMonstre=(coefMonstre/100 +1);
       defMonstre = (this.monstre.defense+this.monstre.armure.defense) * coefMonstre;
     }
     defMonstre=Math.round(defMonstre);
     return defMonstre;
   }

  attaquer(){

    let attUtilisateur=this.calculAttaqueUtilisateur();
    let defMonstre=this.calculDefenseMonstre();
    let defUtilisateur=this.defenseUtilisateur();
    let attMonstre=this.calculAttaqueMonstre();

    if(this.utilisateur.vitesse>=this.monstre.vitesse){

      if(defMonstre>attUtilisateur){
        this.monstre.vie=this.monstre.vie-attUtilisateur;
      }else {
        if((attUtilisateur-defMonstre)<10){
          this.monstre.vie = (this.monstre.vie + defMonstre) - (attUtilisateur*1.5);
        }else {
          this.monstre.vie = this.monstre.vie + defMonstre - attUtilisateur;
        }
      }

      if(this.monstre.vie<=0) {
        this.utilisateur.cptCombat=this.utilisateur.cptCombat+1;
        this.utilisateur.cptCombatGagne=this.utilisateur.cptCombatGagne+1;
        this.utilisateurService.modify(this.utilisateur);
        this.monstre.vie = 0;
        let inventaireArme = new InventaireArme(1,this.monstre.arme,this.utilisateur.inventaire);
        let inventaireArmure = new InventaireArmure(1,this.monstre.armure,this.utilisateur.inventaire);

       this.inventaireArmeService.create(inventaireArme);
       this.inventaireArmureService.create(inventaireArmure);
       this.phase=4;
      }else{
        if(attMonstre<defUtilisateur){
          this.utilisateur.vie=this.utilisateur.vie;
        }else {
          if((attMonstre-defUtilisateur)<10){
            this.utilisateur.vie = (this.utilisateur.vie + defUtilisateur) - (attMonstre*1.5);
          }else {
            this.utilisateur.vie = this.utilisateur.vie + defUtilisateur - attMonstre;
          }
        }
        if(this.utilisateur.vie<=0){
          this.utilisateur.vie=0;
          this.phase=5;
          this.utilisateurService.modify(this.utilisateur);
        }
      }

    }  else{


      if(attMonstre<defUtilisateur){
        this.utilisateur.vie=this.utilisateur.vie;
      }else {
        if((attMonstre-defUtilisateur)<10){
          this.utilisateur.vie = (this.utilisateur.vie + defUtilisateur) - (attMonstre*1.5);
        }else {
          this.utilisateur.vie = this.utilisateur.vie + defUtilisateur - attMonstre;
        }
      }
      if(this.utilisateur.vie<=0){
        this.utilisateur.vie=0;
        this.utilisateur.cptCombat=this.utilisateur.cptCombat+1;
        this.utilisateurService.modify(this.utilisateur);
        this.phase=5;
      }else{

        if(defMonstre>attUtilisateur){
          this.monstre.vie=this.monstre.vie-attUtilisateur;
        }else {
          if((attUtilisateur-defMonstre)<10){
            this.monstre.vie = (this.monstre.vie + defMonstre) - (attUtilisateur*1.5);
          }else {
            this.monstre.vie = this.monstre.vie + defMonstre - attUtilisateur;
          }
        }

        if(this.monstre.vie<=0) {
          this.utilisateur.cptCombat=this.utilisateur.cptCombat+1;
          this.utilisateur.cptCombatGagne=this.utilisateur.cptCombatGagne+1;
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

  seReposer(){
    this.utilisateur.vie=this.utilisateur.vieMax;
    this.utilisateurService.modify(this.utilisateur);
  }
}
