import { Component, OnInit } from '@angular/core';
import {Armure} from "../model/Armure";
import {ArmureHttpService} from "./armure-http.service";

@Component({
  selector: 'app-armure',
  templateUrl: './armure.component.html',
  styleUrls: ['./armure.component.scss']
})

export class ArmureComponent implements OnInit {

  armureForm: Armure = null;

  constructor(private armureService: ArmureHttpService) {
  }

  ngOnInit(): void {
  }

  list(): Array<Armure> {
    return this.armureService.findAll();
  }

  add() {
    this.armureForm = new Armure();
  }

  edit(id: number) {
    this.armureService.findById(id).subscribe(resp => {
      this.armureForm = resp;
    })
  }

  save() {
    if (this.armureForm.id) {
      this.armureService.modify(this.armureForm);
    } else {
      this.armureService.create(this.armureForm);
    }
    this.armureForm = null;
  }

  delete(id: number){
    this.armureService.deleteById(id).subscribe(resp => {
      this.armureService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.armureForm = null;
  }


  

}


