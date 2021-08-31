import {Marchand} from "./Marchand";
import {Potion} from "./Potion";

export class MarchandPotion{
  id:number;
  version:number;
  qte:number;
  potion:Potion;
  marchand: Marchand;

  constructor(id?:number,version?:number,qte?:number) {
    this.id=id;
    this.version=version;
    this.qte=qte;
  }

}
