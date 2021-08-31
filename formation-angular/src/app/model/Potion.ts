
export class Potion{
  id:number;
  version:number;
  nom:string;
  type:string;
  valeur:number;
  prixAchat:number;
  prixVente:number;


  constructor(id?:number,version?:number,nom?:string,
              type?:string,valeur?:number,prixAchat?:number,prixVente?:number) {
    this.id=id;
    this.version=version;
    this.nom=nom;
    this.type=type;
    this.valeur=valeur;
    this.prixAchat=prixAchat;
    this.prixVente=prixVente;
  }



}
