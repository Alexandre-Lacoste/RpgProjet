import {Component, Input, OnInit} from '@angular/core';
import {Marchand} from "../model/Marchand";
import {MarchandHttpService} from "./marchand-http.service";
import {ActivatedRoute} from "@angular/router";
import {MarchandArme} from "../model/MarchandArme";
import {MarchandPotionHttpService} from "../marchand-potion/marchand-potion-http.service";
import {MarchandArmureHttpService} from "../marchand-armure/marchand-armure-http.service";
import {MarchandArmeHttpService} from "../marchand-arme/marchand-arme-http.service";

@Component({
  selector: 'marchand',
  templateUrl: './marchand.component.html',
  styleUrls: ['./marchand.component.scss']
})
export class MarchandComponent implements OnInit {

  @Input()
  mar: number;

  private paramMar: any;

  marchandForm: Marchand = null;

  constructor(private route: ActivatedRoute, private marchandService: MarchandHttpService, private marchandArmeService: MarchandArmeHttpService,
              private marchandArmureService: MarchandArmureHttpService, private marchandPotionService: MarchandPotionHttpService) {
  }

  ngOnInit() {
    this.paramMar = this.route.params.subscribe(params => {
      this.mar = params['mar'];
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

  marchandArme: MarchandArme;

  delete(id: number) {
    this.marchandService.deleteById(id).subscribe(resp => {
      this.marchandService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.marchandForm = null;
  }


  //
  // listeAchatArme() {
  //   this.mar == 2;
  //
  // }
  //
  // listeAchatArmure() {
  //   this.mar == 3;
  //   this.marchandService.reload();
  // }
  //
  // listeAchatPotion() {
  //   this.mar == 4;
  //   this.marchandService.reload();
  // }
  //
  // listeVenteArme() {
  //   this.mar == 5;
  //   this.marchandService.reload();
  // }
  //
  // listeVenteArmure() {
  //   this.mar == 6;
  //   this.marchandService.reload();
  // }
  //
  //
  // listeVentePotion() {
  //   this.mar == 7;
  //   this.marchandService.reload();
  // }
}
