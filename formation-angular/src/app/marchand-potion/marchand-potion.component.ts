import {Component, Input, OnInit} from '@angular/core';
import {MarchandPotion} from "../model/MarchandPotion";
import {MarchandPotionHttpService} from "./marchand-potion-http.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'marchand-potion',
  templateUrl: './marchand-potion.component.html',
  styleUrls: ['../marchand-arme/marchand-arme.component.scss']
})
export class MarchandPotionComponent implements OnInit {

  @Input()
  mar: number;

  private paramMar: any;

  marchandPotionForm: MarchandPotion = null;

  constructor(private route: ActivatedRoute, private marchandPotionService: MarchandPotionHttpService) {
  }

  ngOnInit() {
    this.paramMar = this.route.params.subscribe(params => {
      this.mar = +params['mar'];
    });
  }

  list(): Array<MarchandPotion> {
    return this.marchandPotionService.findAll();
  }

  add() {
    this.marchandPotionForm = new MarchandPotion();
  }

  edit(id: number) {
    this.marchandPotionService.findById(id).subscribe(resp => {
      this.marchandPotionForm = resp;
    })
  }

  save() {
    if (this.marchandPotionForm.id) {
      this.marchandPotionService.modify(this.marchandPotionForm);
    } else {
      this.marchandPotionService.create(this.marchandPotionForm);
    }

    this.marchandPotionForm = null;
  }

  // pour l'exemple => mais de préférence coder le subscribe dans le service
  marchandPotion: MarchandPotion;


  delete(id: number) {
    this.marchandPotionService.deleteById(id).subscribe(resp => {
      this.marchandPotionService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.marchandPotionForm = null;
  }



}
