import {InventaireArme} from "./inventaireArme";
import {InventaireArmure} from "./inventaireArmure";
import {Objet} from "./objet";
import {InventairePotion} from "./inventairePotion";
import {Utilisateur} from "./utilisateur";

export class Inventaire{
id:number;
version:number;
objet:Objet;
utilisateur:Utilisateur;
inventairePotion:Array<InventairePotion>;
inventaireArme : Array<InventaireArme>;
inventaireArmure:Array<InventaireArmure>;

constructor(id?:number,version?:number,objet?:Objet,utilisateur?:Utilisateur) {
  this.id=id;
  this.version=version;
  this.objet=objet;
  this.utilisateur=utilisateur;
}
}
