import {Component, Input, OnInit} from '@angular/core';
import {MarchandArmure} from "../model/MarchandArmure";
import {MarchandArmureHttpService} from "./marchand-armure-http.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'marchand-armure',
  templateUrl: './marchand-armure.component.html',
  styleUrls: ['../marchand-arme/marchand-arme.component.scss']
})
export class MarchandArmureComponent implements OnInit {

  @Input()
  mar: number;

  private paramMar: any;

  marchandArmureForm: MarchandArmure = null;

  constructor(private route: ActivatedRoute, private marchandArmureService: MarchandArmureHttpService) {
  }

  ngOnInit() {
    this.paramMar = this.route.params.subscribe(params => {
      this.mar = +params['mar'];
    });
  }

  list(): Array<MarchandArmure> {
    return this.marchandArmureService.findAll();
  }

  add() {
    this.marchandArmureForm = new MarchandArmure();
  }

  edit(id: number) {
    this.marchandArmureService.findById(id).subscribe(resp => {
      this.marchandArmureForm = resp;
    })
  }

  save() {
    if (this.marchandArmureForm.id) {
      this.marchandArmureService.modify(this.marchandArmureForm);
    } else {
      this.marchandArmureService.create(this.marchandArmureForm);
    }

    this.marchandArmureForm = null;
  }

  // pour l'exemple => mais de préférence coder le subscribe dans le service
  marchandArmure: MarchandArmure;


  delete(id: number) {
    this.marchandArmureService.deleteById(id).subscribe(resp => {
      this.marchandArmureService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.marchandArmureForm = null;
  }



}
