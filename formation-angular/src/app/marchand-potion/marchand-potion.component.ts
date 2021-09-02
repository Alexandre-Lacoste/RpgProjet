import {Component, Input, OnInit} from '@angular/core';
import {MarchandPotion} from "../model/MarchandPotion";
import {MarchandPotionHttpService} from "./marchand-potion-http.service";
import {ActivatedRoute} from "@angular/router";
import {InventairePotion} from "../model/inventairePotion";
import {Observable} from "rxjs";
import {Inventaire} from "../model/inventaire";
import {Objet} from "../model/objet";
import {ObjetService} from "../objet/objet.service";
import {InventairePotionService} from "../inventairePotion/inventairePotion.service";
import {InventaireService} from "../inventaire.service";
import {PotionHttpService} from "../potion/potion-http.service";

@Component({
  selector: 'marchand-potion',
  templateUrl: './marchand-potion.component.html',
  styleUrls: ['../marchand-arme/marchand-arme.component.scss']
})
export class MarchandPotionComponent implements OnInit {
  private marchandPotion: MarchandPotion;
  inventairePotion: InventairePotion = new InventairePotion()

  marchandPotionForm: MarchandPotion = null;
  private invArm: Observable<InventairePotion>;
  private inPotion: InventairePotion;

  private idPossesseur: number;
  private idAcheteur: number;

  inventairePotions: Array<InventairePotion> = new Array<InventairePotion>();
  private inventaire: Inventaire;

  private qtegold: number;
  private objet: Objet;
  constructor(private route: ActivatedRoute,private potionService : PotionHttpService,private inventaireService : InventaireService,private inventairePotionService : InventairePotionService,private objetService : ObjetService, private marchandPotionService: MarchandPotionHttpService) {
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

  list(): Array<MarchandPotion> {
    return this.marchandPotionService.findAll();
  }

  add() {
    this.marchandPotionForm = new MarchandPotion();
  }

  edit(id: number) {
    this.marchandPotionService.findById(id).subscribe(resp => {
      this.marchandPotionForm = resp;
    })
  }

  save() {
    if (this.marchandPotionForm.id) {
      this.marchandPotionService.modify(this.marchandPotionForm);
    } else {
      this.marchandPotionService.create(this.marchandPotionForm);
    }

    this.marchandPotionForm = null;
  }



  delete(id: number) {
    this.marchandPotionService.deleteById(id).subscribe(resp => {
      this.marchandPotionService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.marchandPotionForm = null;
  }

  rechercheinventairePotionbyidPotion(marchandPotion: MarchandPotion) {
    let idPotion = marchandPotion.potion.id;
    this.idAcheteur = 1;                        // Pour avoir l'id de l'acheteur même si ici on le force à etre le 1
    // let idInventaire = this.inventairePotion.inventaire.id;
    console.log(idPotion)
    console.log(this.idAcheteur)
    this.inventairePotionService.findInventairePotionByIdPotionAndIdInv(idPotion,this.idAcheteur).subscribe(response => {
        this.inventairePotion = response;
        console.log(this.inventairePotion);
        console.log(this.inventairePotion.qte);

        // comment recuper l'inventaire_id de la personne connectée ? ici on obtient juste celui qui a deja l'potion dans son inventeur
        this.idPossesseur = this.inventairePotion.inventaire.id;
        console.log(this.idPossesseur);
        // ----------------------------------------------------------------------------------
        console.log(this.idPossesseur)
        console.log(this.idAcheteur)
        if (this.idAcheteur==this.idPossesseur)
        {this.createoraddqte(this.inventairePotion, idPotion);}
      },
      error => {
        console.log(error);



        this.inventaireService.findById(this.idAcheteur).subscribe(response => {
            this.inventaire = response;                                                       // inventaire de l'acheteur et par conditions precedentes, il n'a pas l'potion dans son inventairePotion
            console.log(this.inventaire);
            this.creationinventPotionlorsdelachat(this.inventaire,idPotion);                      // du coup, creation de l'inventaire

          },
          error =>{ console.log(error)});
      }
    );
  }


  createoraddqte(inventairePotion: InventairePotion, idPotion: number, ) {
    this.inventairePotion = inventairePotion;

    if (this.inventairePotion.qte > 0) {
      this.inventairePotion.qte = inventairePotion.qte + 1;
      this.inventairePotionService.modify(this.inventairePotion);

    }

  }
  creationinventPotionlorsdelachat(inventaire: Inventaire, idPotion: number){

    let newinventPotion = new InventairePotion();
    console.log(this.idAcheteur);
    console.log(this.inventaire);

    this.potionService.findById(idPotion).subscribe(response => {
        let potionachetee = response;                                                //objet Potion qui à l'id de celle à achetée, donc potion à achetée
        console.log(potionachetee);
        this.inventairePotion = new InventairePotion(1,1,1, inventaire, potionachetee);
        console.log(this.inventairePotion);
        this.inventairePotionService.create(this.inventairePotion);
      },
      error =>{ console.log(error)});

  }


  gaingold(marchandPotion : MarchandPotion,id:number) {

    this.qtegold = this.qtegold - marchandPotion.potion.prixAchat;
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
