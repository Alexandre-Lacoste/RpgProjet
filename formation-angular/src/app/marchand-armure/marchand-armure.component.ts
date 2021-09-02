import {Component, Input, OnInit} from '@angular/core';
import {MarchandArmure} from "../model/MarchandArmure";
import {MarchandArmureHttpService} from "./marchand-armure-http.service";
import {ActivatedRoute} from "@angular/router";
import {InventaireArmure} from "../model/inventaireArmure";
import {Inventaire} from "../model/inventaire";
import {Observable} from "rxjs";
import {Objet} from "../model/objet";
import {ObjetService} from "../objet/objet.service";
import {PotionHttpService} from "../potion/potion-http.service";
import {InventaireService} from "../inventaire.service";
import {InventairePotionService} from "../inventairePotion/inventairePotion.service";
import {InventaireArmureService} from "../inventaireArmure/inventaireArmure.service";
import {ArmureHttpService} from "../armure/armure-http.service";

@Component({
  selector: 'marchand-armure',
  templateUrl: './marchand-armure.component.html',
  styleUrls: ['../marchand-arme/marchand-arme.component.scss']
})
export class MarchandArmureComponent implements OnInit {
  private marchandArmure: MarchandArmure;
  inventaireArmure: InventaireArmure = new InventaireArmure()

  marchandArmureForm: MarchandArmure = null;
  private invArm: Observable<InventaireArmure>;
  private inArmure: InventaireArmure;

  private idPossesseur: number;
  private idAcheteur: number;

  inventaireArmures: Array<InventaireArmure> = new Array<InventaireArmure>();
  private inventaire: Inventaire;

  private qtegold: number;
  private objet: Objet;
  constructor(private route: ActivatedRoute,private armureService : ArmureHttpService, private inventaireArmureService : InventaireArmureService,private potionService : PotionHttpService,private inventaireService : InventaireService,private inventairePotionService : InventairePotionService,private objetService : ObjetService, private marchandArmureService: MarchandArmureHttpService) {
  }

  ngOnInit() {this.objetService.findById(1).subscribe(response=>
    {
      this.objet=response;

      this.qtegold = this.objet.qte;
      console.log(this.qtegold);


    },
    error=>console.log(error));

  }

  list(): Array<MarchandArmure> {
    return this.marchandArmureService.findAll();
  }

  add() {
    this.marchandArmureForm = new MarchandArmure();
  }

  edit(id: number) {
    this.marchandArmureService.findById(id).subscribe(resp => {
      this.marchandArmureForm = resp;
    })
  }

  save() {
    if (this.marchandArmureForm.id) {
      this.marchandArmureService.modify(this.marchandArmureForm);
    } else {
      this.marchandArmureService.create(this.marchandArmureForm);
    }

    this.marchandArmureForm = null;
  }



  delete(id: number) {
    this.marchandArmureService.deleteById(id).subscribe(resp => {
      this.marchandArmureService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.marchandArmureForm = null;
  }


  rechercheinventaireArmurebyidArmure(marchandArmure: MarchandArmure) {
    let idArmure = marchandArmure.armure.id;
    this.idAcheteur = 1;                        // Pour avoir l'id de l'acheteur même si ici on le force à etre le 1
    // let idInventaire = this.inventaireArmure.inventaire.id;
    console.log(idArmure)
    console.log(this.idAcheteur)
    this.inventaireArmureService.findInventaireArmureByIdArmureAndIdInv(idArmure,this.idAcheteur).subscribe(response => {
        this.inventaireArmure = response;
        console.log(this.inventaireArmure);
        console.log(this.inventaireArmure.qte);

        // comment recuper l'inventaire_id de la personne connectée ? ici on obtient juste celui qui a deja l'armure dans son inventeur
        this.idPossesseur = this.inventaireArmure.inventaire.id;
        console.log(this.idPossesseur);
        // ----------------------------------------------------------------------------------
        console.log(this.idPossesseur)
        console.log(this.idAcheteur)
        if (this.idAcheteur==this.idPossesseur)
        {this.createoraddqte(this.inventaireArmure, idArmure);}
      },
      error => {
        console.log(error);



        this.inventaireService.findById(this.idAcheteur).subscribe(response => {
            this.inventaire = response;                                                       // inventaire de l'acheteur et par conditions precedentes, il n'a pas l'armure dans son inventaireArmure
            console.log(this.inventaire);
            this.creationinventArmurelorsdelachat(this.inventaire,idArmure);                      // du coup, creation de l'inventaire

          },
          error =>{ console.log(error)});
      }
    );
  }


  createoraddqte(inventaireArmure: InventaireArmure, idArmure: number, ) {
    this.inventaireArmure = inventaireArmure;

    if (this.inventaireArmure.qte > 0) {
      this.inventaireArmure.qte = inventaireArmure.qte + 1;
      this.inventaireArmureService.modify(this.inventaireArmure);

    }

  }
  creationinventArmurelorsdelachat(inventaire: Inventaire, idArmure: number){

    let newinventArmure = new InventaireArmure();
    console.log(this.idAcheteur);
    console.log(this.inventaire);

    this.armureService.findById(idArmure).subscribe(response => {
        let armureachetee = response;                                                //objet Armure qui à l'id de celle à achetée, donc armure à achetée
        console.log(armureachetee);
        this.inventaireArmure = new InventaireArmure(1, armureachetee, inventaire);
        console.log(this.inventaireArmure);
        this.inventaireArmureService.create(this.inventaireArmure);
      },
      error =>{ console.log(error)});

  }


  gaingold(marchandArmure : MarchandArmure,id:number) {

    this.qtegold = this.qtegold - marchandArmure.armure.prixAchat;
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
