import {Personnage} from "./Personnage";

export class Hero extends Personnage{
  typePersonnage:string;
  coefAttaque:number;
  coefDefense:number;
  coefVie:number;
  coefPrecision:number;
  coefVitesse:number;
  attaque:number;
  defense:number;
 vie:number;
 agilite:number;
  vitesse:number;

  constructor(id?:number,version?:number,nom?:string,
              typePersonnage?:string, coefAttaque?:number, coefDefense?:number,
              coefVie?:number, coefPrecision?:number, coefVitesse?:number,
              attaque?:number, defense?:number, vie?:number,
              agilite?:number, vitesse?:number) {
    super(id,version,nom);
      this.typePersonnage=typePersonnage;
    this.coefAttaque=coefAttaque;
    this.coefDefense=coefDefense;
    this.coefVie=coefVie;
    this.coefPrecision=coefPrecision;
    this.coefVitesse=coefVitesse;
    this.attaque=attaque;
    this.defense=defense;
    this.vie=vie;
    this.agilite=agilite;
    this.vitesse=vitesse;
  }
}
