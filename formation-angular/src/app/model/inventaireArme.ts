import {Arme} from "./Arme";
import {Inventaire} from "./inventaire";

export class InventaireArme{
  id:number;
  version:number;
  quantite:number;
  arme:Arme;
  inventaire: Inventaire;

  constructor(id?:number,version?:number,quantite?:number,arme?:Arme,inventaire?:Inventaire) {
    this.id=id;
    this.version=version;
    this.quantite=quantite;
    this.arme=arme;
    this.inventaire=inventaire;
  }





}
