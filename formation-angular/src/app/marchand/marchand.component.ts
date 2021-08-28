import { Component, OnInit } from '@angular/core';
import {Marchand} from "../model/Marchand";
import {MarchandHttpService} from "./marchand-http.service";

@Component({
  selector: 'marchand',
  templateUrl: './marchand.component.html',
  styleUrls: ['./marchand.component.scss']
})
export class MarchandComponent implements OnInit {
  marchandForm: Marchand = null;

  constructor(private marchandService: MarchandHttpService) {
  }

  ngOnInit(): void {
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
  delete(id: number) {
    this.marchandService.deleteById(id).subscribe(resp => {
      this.marchandService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.marchandForm = null;
  }
}
