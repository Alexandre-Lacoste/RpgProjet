export class Marchand{
  id:number;
  version:number;
  nom:string;

  constructor(id?:number,version?:number,nom?:string) {
    this.id=id;
    this.version=version;
    this.nom=nom;
  }

}
