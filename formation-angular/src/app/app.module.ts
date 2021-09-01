import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import {FormsModule} from "@angular/forms";
import {AgePipe} from "./age.pipe";
import {HttpClientModule} from "@angular/common/http";
import { HeroComponent } from './hero/hero.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import {UtilisateurService} from "./utilisateur/utilisateur.service";
import {InventaireArmureService} from "./inventaireArmure/inventaireArmure.service";
import {InventaireArmeService} from "./inventaireArme/inventaireArme.service";
import {MarchandModule} from "./marchandmodule";
import { AdminComponent } from './admin/admin.component';
import { ArmeComponent } from './arme/arme.component';
import { PotionComponent } from './potion/potion.component';
import {MarchandRoutingModule} from "./marchand-routing.module";
import { MonstreComponent } from './monstre/monstre.component';
import {CombatComponent} from "./combat/combat.component";
import {ArmureComponent} from "./armure/armure.component";
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {InventairePotionComponent} from "./inventairePotion/inventaire-potion.component";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AgePipe,
    HeroComponent,
    CombatComponent,
    MonstreComponent,
    UtilisateurComponent,
    //InventaireArmureComponent,
    //InventaireArmeComponent,
    //InventairePotionComponent,
    // MarchandComponent,
    // MarchandPotionComponent,
    // MarchandArmeComponent,
    // MarchandArmureComponent,
    AdminComponent,
    ArmeComponent,
    ArmureComponent,
    PotionComponent,
    ArmureComponent,
    ArmeComponent,
    AdminComponent,
    InscriptionComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MarchandModule,
    MarchandRoutingModule


  ],
  providers: [UtilisateurService, InventaireArmureService, InventaireArmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
