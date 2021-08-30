import {Component, Input, OnInit} from '@angular/core';
import {MarchandArme} from "../model/MarchandArme";
import {MarchandArmeHttpService} from "./marchand-arme-http.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'marchand-arme',
  templateUrl: './marchand-arme.component.html',
  styleUrls: ['./marchand-arme.component.scss']
})
export class MarchandArmeComponent implements OnInit {

  @Input()
  mar: number;

  private paramMar: any;

  marchandArmeForm: MarchandArme = null;

  constructor(private route: ActivatedRoute, private marchandArmeService: MarchandArmeHttpService) {
  }

  ngOnInit() {
    this.paramMar = this.route.params.subscribe(params => {
      this.mar = +params['mar'];
    });
  }

  list(): Array<MarchandArme> {
    return this.marchandArmeService.findAll();
  }

  add() {
    this.marchandArmeForm = new MarchandArme();
  }

  edit(id: number) {
    this.marchandArmeService.findById(id).subscribe(resp => {
      this.marchandArmeForm = resp;
    })
  }

  save() {
    if (this.marchandArmeForm.id) {
      this.marchandArmeService.modify(this.marchandArmeForm);
    } else {
      this.marchandArmeService.create(this.marchandArmeForm);
    }

    this.marchandArmeForm = null;
  }

  // pour l'exemple => mais de préférence coder le subscribe dans le service
  marchandArme: MarchandArme;


  delete(id: number) {
    this.marchandArmeService.deleteById(id).subscribe(resp => {
      this.marchandArmeService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.marchandArmeForm = null;
  }

  //
}
