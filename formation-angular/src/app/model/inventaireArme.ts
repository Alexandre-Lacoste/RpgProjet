import {Armure} from "./Armure";
import {Arme} from "./Arme";

export class InventaireArme{
  id: number;
  version: number;
  qte: number;
  arme: Arme;

  constructor(id?: number, version?: number, qte?: number, arme?: Arme) {
    this.id = id;
    this.version = version;
    this.qte = qte;
    this.arme = arme;
  }
}
