import {Component, Input, OnInit} from '@angular/core';
import {MarchandArme} from "../model/MarchandArme";
import {MarchandArmeHttpService} from "./marchand-arme-http.service";
import {ActivatedRoute} from "@angular/router";
import {InventaireArme} from "../model/inventaireArme";
import {InventaireArmeService} from "../inventaireArme/inventaireArme.service";
import {Observable} from "rxjs";

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

  constructor(private route: ActivatedRoute, private marchandArmeService: MarchandArmeHttpService, private inventaireArmeService : InventaireArmeService) {
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


  ajoutdanslinventaire(marchandArme : MarchandArme, id:number) {
    let idArme = marchandArme.arme.id;
    console.log(idArme)
    this.inventaireArmeService.findInventaireArmeByIdArme(idArme).subscribe(response => {
        this.inventaireArme = response;
        console.log(this.inventaireArme);
        console.log(this.inventaireArme.quantite);
      },
      error => console.log(error));
    console.log(this.inventaireArme);
    console.log(this.inventaireArme.quantite);      // probleme de temps,  la ligne 80 se finit(ou lance) apres le debut du if, donc au lancement du if il prend les valeurs précédentes, avant la ligne 77
    if (this.inventaireArme.quantite > 0) {
      console.log(this.inventaireArme);

    } else {
      console.log(this.inventaireArme);

      this.inventaireArme = new InventaireArme();
    }
  }
    //
    // delete(inventaireArme : InventaireArme, id : number){
    //   if (inventaireArme.quantite > 1 ) {
    //     inventaireArme.quantite = inventaireArme.quantite - 1;
    //     this.inventaireArmeService.modify(inventaireArme);
    //   } else if (inventaireArme.quantite = 1) {
    //     this.inventaireArmeService.deleteById(id).subscribe(resp => {
    //       this.inventaireArmeService.load();
    //     }, error => console.log(error));
    //   }
    //
    //   find(id: number) {
    //     this.inventaireArmeService.findById(id).subscribe(response => {
    //         this.inventaireArme = response;
    //         console.log(this.inventaireArme);
    //       },
    //       error => console.log(error));
    //   }


}




