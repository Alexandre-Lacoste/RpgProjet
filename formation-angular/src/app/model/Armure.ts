import {InventaireArmure} from "./inventaireArmure";

export class Armure{
id:number;
version:number;
nom:string;
typearmure:string;
description:string;
defense:number;
vitesse:number;
prixAchat:number;
prixVente:number;

//marchandsArmures = Array<MarchandArmure>
inventaireArmures=Array<InventaireArmure>();

  constructor(id?:number,version?:number,nom?:string,typearmure?:string,description?:string,defense?:number,vitesse?:number,prixAchat?:number,prixVente?:number) {
    this.id=id;
    this.version=version;
    this.nom=nom;
    this.typearmure=typearmure;
    this.description=description;
    this.defense=defense;
    this.vitesse=vitesse;
    this.prixAchat=prixAchat;
    this.prixVente=prixVente;
  }

}
