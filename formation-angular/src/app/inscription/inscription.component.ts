import {Component, OnInit} from '@angular/core';
import {UtilisateurHttpService} from "../utilisateur-http.service";
import {Utilisateur} from "../model/utilisateur";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  inscForm: Utilisateur = null;

  constructor(private utilisateurService: UtilisateurHttpService) {
  }

  ngOnInit(): void {
  }

  add() {
    this.inscForm = new Utilisateur();
  }

  save() {

    this.utilisateurService.create(this.inscForm);

    this.inscForm = null;
  }

}
