export class Personnage{
  id:number;
  version:number;
  nom:string;

  constructor(id?:number,version?:number,nom?:string) {
    this.id=id;
    this.nom=nom;
    this.version=version;
  }

}
