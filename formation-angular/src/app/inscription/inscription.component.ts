import {Component, OnInit} from '@angular/core';
import {UtilisateurHttpService} from "../utilisateur-http.service";
import {Utilisateur} from "../model/utilisateur";
import {InventaireService} from "../inventaire.service";
import {Inventaire} from "../model/inventaire";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  inscForm: Utilisateur = null;
  inv:Inventaire=null;

  constructor(private utilisateurService: UtilisateurHttpService,private inventaireService:InventaireService) {

  }

  ngOnInit(): void {
  }

  add() {
    this.inscForm = new Utilisateur();
    console.log();
  }

  save() {
    console.log();
    this.inscForm.enable= false;
    this.inscForm.role=null;
    this.inscForm.hero=null;
    this.inscForm.inventaire=null,
      this.inscForm.arme=null,
      this.inscForm.armure=null,
      this.inscForm.vie=0;
    this.inscForm.attaque=0;
    this.inscForm.defense=0;
    this.inscForm.agilite=0;
    this.inscForm.vitesse=0;
    this.inscForm.vieMax=0;
    this.inscForm.attaqueMax=18.0;
    this.inscForm.defenseMax=10.0;
    this.inscForm.agiliteMax=25.0;
    this.inscForm.vitesseMax=40.0;
    this.inscForm.cptEmpoisonnement=0;
    this.inscForm.cptEtourdissement=0;
    this.inscForm.cptSaignement=0;
    this.inscForm.cptBrulure=0;
    this.inscForm.cptCombat=0;
    this.inscForm.cptCombatGagne=0;
    this.inscForm.cptMonstreVaincu=0;
    this.inscForm.exp=0;

    console.log(this.inscForm);

    this.utilisateurService.createbyInsc(this.inscForm);
    this.inscForm = null;
    console.log();
  }

}
