import {Armure} from "./Armure";

export class InventaireArmure{

  id: number;
  version: number;
  qte: number;
  armure: Armure;

  constructor(id?: number, version?: number, qte?: number, armure?: Armure) {
    this.id = id;
    this.version = version;
    this.qte = qte;
    this.armure = armure;
  }
}
