export class Personnage{
  id:number;
  version:number;
  nom:string;
  type:string;

  constructor(id?:number,version?:number,nom?:string, type?:string) {
    this.id=id;
    this.nom=nom;
    this.version=version;
    this.type=type;
  }

}
