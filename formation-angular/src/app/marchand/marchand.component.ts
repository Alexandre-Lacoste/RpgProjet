import {Component, Input, OnInit} from '@angular/core';
import {Marchand} from "../model/Marchand";
import {MarchandHttpService} from "./marchand-http.service";
import {ActivatedRoute} from "@angular/router";
import {MarchandArme} from "../model/MarchandArme";

@Component({
  selector: 'marchand',
  templateUrl: './marchand.component.html',
  styleUrls: ['./marchand.component.scss']
})
export class MarchandComponent implements OnInit {
  @Input()
  id: number;

  switchMarchand: number = 0;
  private parametreid: any;

  marchandForm: Marchand = null;

  constructor(private route: ActivatedRoute, private marchandService: MarchandHttpService) {
  }

  ngOnInit() {
    this.parametreid = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  list(): Array<Marchand> {
    return this.marchandService.findAll();
  }

  add() {
    this.marchandForm = new Marchand();
  }

  edit(id: number) {
    this.marchandService.findById(id).subscribe(resp => {
      this.marchandForm = resp;
    })
  }

  save() {
    if (this.marchandForm.id) {
      this.marchandService.modify(this.marchandForm);
    } else {
      this.marchandService.create(this.marchandForm);
    }

    this.marchandForm = null;
  }

  // pour l'exemple => mais de préférence coder le subscribe dans le service
  marchandArme: MarchandArme;

  delete(id: number) {
    this.marchandService.deleteById(id).subscribe(resp => {
      this.marchandService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.marchandForm = null;
  }

  listeAchatArme() {
    this.switchMarchand == 2;
    this.marchandService.load();
  }

  listeAchatArmure() {
    this.switchMarchand == 3;
    this.marchandService.load();
  }

  listeAchatPotion() {
    this.switchMarchand == 4;
    this.marchandService.load();
  }

  listeVenteArme() {
    this.switchMarchand == 5;
    this.marchandService.load();
  }

  listeVenteArmure() {
    this.switchMarchand == 6;
    this.marchandService.load();
  }


  listeVentePotion() {
    this.switchMarchand == 7;
    this.marchandService.load();
  }
}
