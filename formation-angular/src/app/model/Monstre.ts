import {Personnage} from "./Personnage";
import {Armure} from "./Armure";
import {Arme} from "./Arme";

export class Monstre extends Personnage{
  typeMonstre : string;
  attaque:number;
  defense:number;
  vie:number;
  agilite:number;
  vitesse:number;
  gold:number;
  exp:number;
  arme:Arme;
  armure:Armure;

  constructor(id?:number,version?:number,nom?:string,typeMonstre?:string,
              attaque?:number,defense?:number,vie?:number,agilite?:number,vitesse?:number,
              gold?:number,exp?:number,
              arme?:Arme,armure?:Armure) {
    super(id, version, nom);
    this.typeMonstre=typeMonstre;
    this.attaque=attaque;
    this.defense=defense;
    this.vie=vie;
    this.agilite=agilite;
    this.vitesse=vitesse;
    this.gold=gold;
    this.arme=arme;
    this.exp=exp;
    this.armure=armure;
  }
}
