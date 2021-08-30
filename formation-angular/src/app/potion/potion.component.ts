import { Component, OnInit } from '@angular/core';
import {Potion} from "../model/Potion";
import {PotionHttpService} from "./potion-http.service";

@Component({
  selector: 'app-potion',
  templateUrl: './potion.component.html',
  styleUrls: ['./potion.component.scss']
})
export class PotionComponent implements OnInit {

  potionForm: Potion = null;

  constructor(private potionService: PotionHttpService) { }

  ngOnInit(): void {
  }

  list(): Array<Potion> {
    return this.potionService.findAll();
  }

  add() {
    this.potionForm = new Potion();
  }

  edit(id: number) {
    this.potionService.findById(id).subscribe(resp => {
      this.potionForm = resp;
    })
  }

  save() {
    if (this.potionForm.id) {
      this.potionService.modify(this.potionForm);
    } else {
      this.potionService.create(this.potionForm);
    }
    this.potionForm = null;
  }

  delete(id: number){
    this.potionService.deleteById(id).subscribe(resp => {
      this.potionService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.potionForm = null;
  }


}
