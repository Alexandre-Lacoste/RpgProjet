import {Inventaire} from "./inventaire";
import {Armure} from "./Armure";

export class InventaireArmure {
  id: number;
  version: number;
  qte: number;
  armure: Armure;
  inventaire: Inventaire;

  constructor(id?: number, version?: number, qte?: number, armure?: Armure, inventaire?: Inventaire) {
    this.id = id;
    this.version = version;
    this.qte = qte;
    this.armure = armure;
    this.inventaire = inventaire;
  }

}
