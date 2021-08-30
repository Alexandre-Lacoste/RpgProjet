import {InventaireArme} from "./inventaireArme";

export class Arme{
  id:number;
  version:number;
  nom:string;
  typearme:string;
  description:string;
  attaque:number;
  agilite:number;
  prixAchat:number;
  prixVente:number;

//marchandsArmes = Array<MarchandArme>
  inventaireArme=Array<InventaireArme>();

  constructor(id?:number,version?:number,typearme?:string,nom?:string,description?:string,attaque?:number,agilite?:number,prixAchat?:number,prixVente?:number) {
    this.id=id;
    this.version=version;
    this.nom=nom;
    this.typearme=typearme;
    this.description=description;
    this.attaque=attaque;
    this.agilite=agilite;
    this.prixAchat=prixAchat;
    this.prixVente=prixVente;
  }

}
