import {Marchand} from "./Marchand";
import {Arme} from "./Arme";

export class MarchandArme{
  id:number;
  version:number;
  qte:number;
  arme:Arme;
  marchand: Marchand;

  constructor(id?:number,version?:number,qte?:number) {
    this.id=id;
    this.version=version;
    this.qte=qte;
  }



}
