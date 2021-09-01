import {Component, Input, OnInit} from '@angular/core';
import {MarchandArme} from "../model/MarchandArme";
import {MarchandArmeHttpService} from "./marchand-arme-http.service";
import {ActivatedRoute} from "@angular/router";
import {InventaireArme} from "../model/inventaireArme";
import {InventaireArmeService} from "../inventaireArme/inventaireArme.service";
import {Observable} from "rxjs";
import {timeout} from "rxjs/operators";
import {ArmeHttpService} from "../arme/arme-http.service";
import {Arme} from "../model/Arme";

@Component({
  selector: 'marchand-arme',
  templateUrl: './marchand-arme.component.html',
  styleUrls: ['./marchand-arme.component.scss']
})
export class MarchandArmeComponent implements OnInit {


  private marchandArme: MarchandArme;
  inventaireArme: InventaireArme = new InventaireArme()

  marchandArmeForm: MarchandArme = null;
  private invArm: Observable<InventaireArme>;
  private inArme: InventaireArme;

  inventaireArmes: Array<InventaireArme> = new Array<InventaireArme>();

  constructor(private route: ActivatedRoute, private marchandArmeService: MarchandArmeHttpService, private inventaireArmeService: InventaireArmeService) {
  }

  ngOnInit() {

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


  delete(id: number) {
    this.marchandArmeService.deleteById(id).subscribe(resp => {
      this.marchandArmeService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.marchandArmeForm = null;
  }

  find(id: number) {
    this.marchandArmeService.findById(id).subscribe(response => {
        this.marchandArme = response;
      },
      error => console.log(error));
  }

  // InventaireArmetoIdArmetomodifyqte(marchandArme : MarchandArme,id:number){
  //   let inArme = this.rechercheinventaireArmebyidArme(marchandArme, id);
  //   console.log(inArme);
  //   this.createoraddqte(inArme );
  // }

  rechercheinventaireArmebyidArme(marchandArme: MarchandArme) {
    let idArme = marchandArme.arme.id;
    console.log(idArme)
    this.inventaireArmeService.findInventaireArmeByIdArme(idArme).subscribe(response => {
        this.inventaireArme = response;
        console.log(this.inventaireArme);
        console.log(this.inventaireArme.quantite);
        this.createoraddqte(this.inventaireArme, idArme);
      },
      error => {
        console.log(error);
        this.creationinventlorsdelachat(this.inventaireArme,idArme);

      }
      );
  }


  createoraddqte(inventaireArme: InventaireArme, idArme: number) {
    this.inventaireArme = inventaireArme;

    if (this.inventaireArme.quantite > 0) {
      this.inventaireArme.quantite = inventaireArme.quantite + 1;
      this.inventaireArmeService.modify(this.inventaireArme);

    }
    // else {
    //   let newinventArme = new InventaireArme();
    //   newinventArme.arme.id = idArme;
    //   newinventArme.quantite = 1;
    //   newinventArme.inventaire.id = 1;
    //   this.inventaireArmeService.create(newinventArme);
    // }
  }
  creationinventlorsdelachat(inventaireArme: InventaireArme, idArme: number){

  let newinventArme = new InventaireArme();
  console.log(idArme);

  let armeex = new Arme(idArme)
    console.log(armeex)
    newinventArme.arme = armeex;
    console.log(newinventArme);
  newinventArme.quantite = 1;
  newinventArme.inventaire.id = 1;
  this.inventaireArmeService.create(newinventArme);

  }
}




