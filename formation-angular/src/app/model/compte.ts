export class Compte{

  id:number;
  version:number;
  pseudo:string;
  mail:string;
  mdp:string;
  enable:boolean;
  role:string;


  constructor(id?: number, version?: number, pseudo?: string, mail?: string, mdp?: string, enable?: boolean, role?: string) {
    this.id = id;
    this.version = version;
    this.pseudo = pseudo;
    this.mail = mail;
    this.mdp = mdp;
    this.enable = enable;
    this.role = role;
  }
}
