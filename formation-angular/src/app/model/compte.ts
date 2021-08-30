export class Compte{

  id:number;
  version:number;
  pseudo:string;
  mail:string;
  mdp:string;


  constructor(id?: number, version?: number, pseudo?: string, mail?: string, mdp?: string) {
    this.id = id;
    this.version = version;
    this.pseudo = pseudo;
    this.mail = mail;
    this.mdp = mdp;
  }
}
