import {Compte} from "./compte";

export class Admin extends Compte {


constructor(id?: number, version?: number, pseudo?: string, mail?: string, mdp?: string, enable?: boolean) {
  super(id, version, pseudo, mail, mdp, enable);
}

}
