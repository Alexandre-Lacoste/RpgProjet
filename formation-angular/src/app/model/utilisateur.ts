import {Compte} from "./compte";
import {InventaireArme} from "./inventaireArme";
import {InventaireArmure} from "./inventaireArmure";
import {Hero} from "./Hero";
import {Arme} from "./Arme";
import {Armure} from "./Armure";
import {Inventaire} from "./inventaire";

import {InventairePotion} from "./inventairePotion";
import {Personnage} from "./Personnage";

export class Utilisateur extends Compte{


  vie: number;
  attaque: number;
  defense: number;
  agilite: number;
  vitesse: number;
  vieMax: number;
  attaqueMax: number;
  defenseMax: number;
  agiliteMax: number;
  vitesseMax: number;
  cptEmpoisonnement: number;
  cptEtourdissement: number;
  cptSaignement: number;
  cptBrulure: number;
  cptCombat: number;
  cptCombatGagne: number;
  cptMonstreVaincu: number;
  exp: number;
  hero:Hero;
  inventaireArme: InventaireArme;
  inventaireArmure: InventaireArmure;

  inventairePotion: InventairePotion;
  arme: Arme;
  armure: Armure;
  inventaire: Inventaire;
  personnage:Personnage;


  constructor(id?: number, version?: number, pseudo?: string, mail?: string, mdp?: string, vie?: number, attaque?: number, defense?: number, agilite?: number, vitesse?: number, vieMax?: number, attaqueMax?: number, defenseMax?: number, agiliteMax?: number, vitesseMax?: number, cptEmpoisonnement?: number, cptEtourdissement?: number, cptSaignement?: number, cptBrulure?: number, cptCombat?: number, cptCombatGagne?: number, cptMonstreVaincu?: number, exp?: number) {
    super(id, version, pseudo, mail, mdp);
    this.vie = vie;
    this.attaque = attaque;
    this.defense = defense;
    this.agilite = agilite;
    this.vitesse = vitesse;
    this.vieMax = vieMax;
    this.attaqueMax = attaqueMax;
    this.defenseMax = defenseMax;
    this.agiliteMax = agiliteMax;
    this.vitesseMax = vitesseMax;
    this.cptEmpoisonnement = cptEmpoisonnement;
    this.cptEtourdissement = cptEtourdissement;
    this.cptSaignement = cptSaignement;
    this.cptBrulure = cptBrulure;
    this.cptCombat = cptCombat;
    this.cptCombatGagne = cptCombatGagne;
    this.cptMonstreVaincu = cptMonstreVaincu;
    this.exp = exp;
  }

}
