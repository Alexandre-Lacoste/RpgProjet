import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AgePipe} from "./age.pipe";
import {HttpClientModule} from "@angular/common/http";
import { HeroComponent } from './hero/hero.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import {UtilisateurService} from "./utilisateur/utilisateur.service";
import {InventaireArmureService} from "./inventaireArmure/inventaireArmure.service";
import {InventaireArmeService} from "./inventaireArme/inventaireArme.service";
import { AdminComponent } from './admin/admin.component';
import { ArmeComponent } from './arme/arme.component';
import { PotionComponent } from './potion/potion.component';
import { MonstreComponent } from './monstre/monstre.component';
import {CombatComponent} from "./combat/combat.component";
import {ArmureComponent} from "./armure/armure.component";
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {InventairePotionComponent} from "./inventairePotion/inventaire-potion.component";
import {MarchandArmeComponent} from "./marchand-arme/marchand-arme.component";
import {MarchandPotionComponent} from "./marchand-potion/marchand-potion.component";
import {MarchandComponent} from "./marchand/marchand.component";
import {InventaireArmeComponent} from "./inventaireArme/inventaire-arme.component";
import {InventaireArmureComponent} from "./inventaireArmure/inventaire-armure.component";
import {MarchandArmureComponent} from "./marchand-armure/marchand-armure.component";
import {ObjetComponent} from "./objet/objet.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AgePipe,
    HeroComponent,
    CombatComponent,
    MonstreComponent,
    UtilisateurComponent,
    InventaireArmureComponent,
    InventaireArmeComponent,
    InventairePotionComponent,
    MarchandComponent,
    MarchandPotionComponent,
    MarchandArmeComponent,
    MarchandArmureComponent,
    AdminComponent,
    ArmeComponent,
    ArmureComponent,
    PotionComponent,
    ArmureComponent,
    ArmeComponent,
    AdminComponent,
    ConnexionComponent,
    InscriptionComponent,
    ObjetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
    ReactiveFormsModule


  ],
  providers: [UtilisateurService, InventaireArmureService, InventaireArmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
