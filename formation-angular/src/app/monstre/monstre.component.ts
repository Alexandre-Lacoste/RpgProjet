import { Component, OnInit } from '@angular/core';
import {Arme} from "../model/Arme";
import {Monstre} from "../model/Monstre";
import {MonstreHttpService} from "../monstre-Http.service";

@Component({
  selector: 'app-monstre',
  templateUrl: './monstre.component.html',
  styleUrls: ['./monstre.component.scss']
})
export class MonstreComponent implements OnInit {

  monstreForm: Monstre = null;

  constructor(private monstreService: MonstreHttpService) { }

  ngOnInit(): void {
  }

  list(): Array<Monstre> {
    return this.monstreService.findAll();
  }

  add() {
    this.monstreForm = new Monstre();
  }

  edit(id: number) {
    this.monstreService.findByIdAdmin(id).subscribe(resp => {
      this.monstreForm = resp;
    })
  }

  save() {
    if (this.monstreForm.id) {
      this.monstreService.modify(this.monstreForm);
    } else {
      this.monstreService.create(this.monstreForm);
    }
    this.monstreForm = null;
  }

  delete(id: number){
    this.monstreService.deleteByIdAdmin(id).subscribe(resp => {
      this.monstreService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.monstreForm = null;
  }



}
