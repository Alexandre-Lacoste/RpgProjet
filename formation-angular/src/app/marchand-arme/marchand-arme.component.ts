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
import {InventaireService} from "../inventaire.service";
import {Inventaire} from "../model/inventaire";

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

  private idPossesseur: number;
  private idAcheteur: number;

  inventaireArmes: Array<InventaireArme> = new Array<InventaireArme>();
  private inventaire: Inventaire;

  constructor(private route: ActivatedRoute,private inventaireService: InventaireService, private armeService: ArmeHttpService, private marchandArmeService: MarchandArmeHttpService, private inventaireArmeService: InventaireArmeService) {
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
    this.idAcheteur = 1;                        // Pour avoir l'id de l'acheteur même si ici on le force à etre le 1
    // let idInventaire = this.inventaireArme.inventaire.id;
    console.log(idArme)

    this.inventaireArmeService.findInventaireArmeByIdArme(idArme).subscribe(response => {
        this.inventaireArme = response;
        console.log(this.inventaireArme);
        console.log(this.inventaireArme.quantite);

        // comment recuper l'inventaire_id de la personne connectée ? ici on obtient juste celui qui a deja l'arme dans son inventeur
        this.idPossesseur = this.inventaireArme.inventaire.id;
        console.log(this.idPossesseur);
        // ----------------------------------------------------------------------------------

        if (this.idAcheteur=this.idPossesseur)
        {this.createoraddqte(this.inventaireArme, idArme);}
      },
      error => {
        console.log(error);



        this.inventaireService.findById(this.idAcheteur).subscribe(response => {
            this.inventaire = response;                                                       // inventaire de l'acheteur et par conditions precedentes, il n'a pas l'arme dans son inventaireArme
            console.log(this.inventaire);
            this.creationinventArmelorsdelachat(this.inventaire,idArme);                      // du coup, creation de l'inventaire

          },
          error =>{ console.log(error)});
      }
      );
  }


  createoraddqte(inventaireArme: InventaireArme, idArme: number, ) {
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
  creationinventArmelorsdelachat(inventaire: Inventaire, idArme: number){

  let newinventArme = new InventaireArme();
  console.log(this.idAcheteur);
  console.log(this.inventaire);

    this.armeService.findById(idArme).subscribe(response => {
        let armeachetee = response;                                                //objet Arme qui à l'id de celle à achetée, donc arme à achetée
        console.log(armeachetee);
        this.inventaireArme = new InventaireArme(1, armeachetee, inventaire);
        console.log(this.inventaireArme);
        this.inventaireArmeService.create(this.inventaireArme);
        },
      error =>{ console.log(error)});

  //   console.log(armeex)
  //   this.armeService.findById(idArme).subscribe(response => {
  //       newinventArme.arme = response;
  //
  //       console.log("newinventArme"+newinventArme);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  //   console.log(newinventArme);
  // newinventArme.quantite = 1;
  // newinventArme.inventaire.id = 1;
  // this.inventaireArmeService.create(newinventArme);

  }
}




