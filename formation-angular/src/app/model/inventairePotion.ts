import {Inventaire} from "./inventaire";

export class InventairePotion{
  id:number;
  version:number;
  qte:number;
  inventaire:Inventaire;
 // potion:Potion;

  constructor(id?:number,version?:number,qte?:number,inventaire?:Inventaire) {
    this.id=id;
    this.version=version;;
    this.qte=qte;
    this.inventaire=inventaire;
   // this.potion=potion;
  }
}
