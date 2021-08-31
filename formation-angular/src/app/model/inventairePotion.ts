import {Inventaire} from "./inventaire";
import {Potion} from "./Potion";

export class InventairePotion{
  id:number;
  version:number;
  qte:number;
  inventaire:Inventaire;
  potion:Potion;

  constructor(id?:number,version?:number,qte?:number,inventaire?:Inventaire,potion?:Potion) {
    this.id=id;
    this.version=version;;
    this.qte=qte;
    this.inventaire=inventaire;
    this.potion=potion;
  }
}
