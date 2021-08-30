import {Marchand} from "./Marchand";
import {Armure} from "./Armure";

export class MarchandArmure{
  id:number;
  version:number;
  qte:number;
  armure:Armure;
  marchand: Marchand;

  constructor(id?:number,version?:number,qte?:number) {
    this.id=id;
    this.version=version;
    this.qte=qte;
  }

}
