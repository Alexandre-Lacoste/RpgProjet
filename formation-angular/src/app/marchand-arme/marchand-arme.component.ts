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
import {InventairePotion} from "../model/inventairePotion";
import {Objet} from "../model/objet";
import {ObjetService} from "../objet/objet.service";

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

  private qtegold: number;
  private objet: Objet;

  constructor(private route: ActivatedRoute,private objetService : ObjetService,private inventaireService: InventaireService, private armeService: ArmeHttpService, private marchandArmeService: MarchandArmeHttpService, private inventaireArmeService: InventaireArmeService) {
  }

  ngOnInit() {

    this.objetService.findById(1).subscribe(response=>
      {
        this.objet=response;

        this.qtegold = this.objet.qte;
        console.log(this.qtegold);


      },
      error=>console.log(error));

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
console.log(this.idAcheteur)
    this.inventaireArmeService.findInventaireArmeByIdArmeAndIdInv(idArme,this.idAcheteur).subscribe(response => {
        this.inventaireArme = response;
        console.log(this.inventaireArme);
        console.log(this.inventaireArme.quantite);

        // comment recuper l'inventaire_id de la personne connectée ? ici on obtient juste celui qui a deja l'arme dans son inventeur
        this.idPossesseur = this.inventaireArme.inventaire.id;
        console.log(this.idPossesseur);
        // ----------------------------------------------------------------------------------
console.log(this.idPossesseur)
console.log(this.idAcheteur)
        if (this.idAcheteur==this.idPossesseur)
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

  }


  gaingold(marchandArme : MarchandArme,id:number) {

    this.qtegold = this.qtegold - marchandArme.arme.prixAchat;
    console.log(this.qtegold)
    this.objet.qte = this.qtegold;
    this.objetService.modify(this.objet);

  }
  timeOutAlert(nom :string,prixAchat : number){
    let qtegoldstring: string ;
    let prixAchatstring : string;
    if ( this.qtegold != null )  qtegoldstring = this.qtegold.toString();
    if ( this.qtegold != null )  prixAchatstring = prixAchat.toString();

    setTimeout(function(){ alert("Vous avez acheté " +nom+ " pour la modique somme de " + prixAchatstring + "  gold. " + "  Une bonne affaire !!   " + "  Vous mangerez des pates ce mois ci   " +
      "" +
      "                         mais il vous reste encore " + qtegoldstring + " Gold "); }, 1500);
  }

  reloadCurrentPage() {
    setTimeout(function (){window.location.reload();},1510);
  }
}




