import {Component, Input, OnInit} from '@angular/core';
import {Objet} from "../model/objet";
import {UtilisateurService} from "../utilisateur/utilisateur.service";
import {HeroHttpService} from "../hero/hero-http.service";
import {ObjetService} from "../objet/objet.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-objet',
  templateUrl: './objet.component.html',
  styleUrls: ['./objet.component.scss']
})
export class ObjetComponent implements OnInit {
  @Input()
  mar: number;

  objet: Objet= new Objet();
  objetForm: Objet = null;

  private paramMar: any;


  constructor(private utilisateurService: UtilisateurService, private heroService: HeroHttpService, private objetService: ObjetService,
               private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.paramMar = this.route.params.subscribe(params => {
      this.mar = +params['mar'];
    });
    this.find(1);
  }

  find(id : number){
    this.objetService.findById(id).subscribe(response=>
      {
        this.objet=response;
        console.log(this.objet);
      },
      error=>console.log(error));
  }
  list(): Array<Objet> {
    return this.objetService.findAll();
  }

  add() {
    this.objetForm = new Objet();
  }

  edit(id: number) {
    this.objetService.findById(id).subscribe(resp => {
      this.objetForm = resp;
    })
  }

  save() {
    if (this.objetForm.id) {
      this.objetService.modify(this.objetForm);
    } else {
      this.objetService.create(this.objetForm);
    }

    this.objetForm = null;
  }


  delete(id: number) {
    this.objetService.deleteById(id).subscribe(resp => {
      this.objetService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.objetForm = null;
  }

}

