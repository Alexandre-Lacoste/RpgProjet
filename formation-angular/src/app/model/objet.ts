import {Inventaire} from "./inventaire";

export class Objet{
id:number;
version:number;
nom:string;
description:string;
qte:number;

constructor(id?:number,version?:number,nom?:string,description?:string,qte?:number) {
  this.id=id;
  this.version=version;
  this.nom=nom;
  this.description=description;
  this.qte=qte;
}
}
