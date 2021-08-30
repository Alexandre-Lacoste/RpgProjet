import {Inventaire} from "./inventaire";

export class Objet{
id:number;
version:number;
nom:string;
description:string;
qte:number;
inventaire:Inventaire;

constructor(id?:number,version?:number,nom?:string,description?:string,qte?:number,inventaire?:Inventaire) {
  this.id=id;
  this.version=version;
  this.nom=nom;
  this.description=description;
  this.qte=qte;
  this.inventaire=inventaire;
}
}
