import { Component, OnInit } from '@angular/core';
import {Arme} from "../model/Arme";
import {ArmeHttpService} from "./arme-http.service";

@Component({
  selector: 'app-arme',
  templateUrl: './arme.component.html',
  styleUrls: ['./arme.component.scss']
})

export class ArmeComponent implements OnInit {

  armeForm: Arme = null;

  constructor(private armeService : ArmeHttpService) {
  }

  ngOnInit(): void {
  }

  list(): Array<Arme> {
    return this.armeService.findAll();
  }

  add() {
    this.armeForm = new Arme();
  }

  edit(id: number) {
    this.armeService.findById(id).subscribe(resp => {
      this.armeForm = resp;
    })
  }

  save() {
    if (this.armeForm.id) {
      this.armeService.modify(this.armeForm);
    } else {
      this.armeService.create(this.armeForm);
    }
    this.armeForm = null;
  }

  delete(id: number){
    this.armeService.deleteById(id).subscribe(resp => {
      this.armeService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.armeForm = null;
  }

  loading(){
    this.armeService.load();
  }


}
