import {Arme} from "./Arme";
import {Inventaire} from "./inventaire";

export class InventaireArme{
  id:number;
  version:number;
  quantite:number;
  arme:Arme;
  inventaire: Inventaire;

  constructor(quantite?:number,arme?:Arme,inventaire?:Inventaire) {
    this.quantite=quantite;
    this.arme=arme;
    this.inventaire=inventaire;
  }





}
