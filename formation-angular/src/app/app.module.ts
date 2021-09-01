import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import {FormsModule} from "@angular/forms";
import {AgePipe} from "./age.pipe";
import {HttpClientModule} from "@angular/common/http";
import { HeroComponent } from './hero/hero.component';
import { MarchandComponent } from './marchand/marchand.component';
import { MarchandPotionComponent } from './marchand-potion/marchand-potion.component';
import { MarchandArmeComponent } from './marchand-arme/marchand-arme.component';
import { MarchandArmureComponent } from './marchand-armure/marchand-armure.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { InventaireArmeComponent } from './inventaireArme/inventaire-arme.component';
import { InventaireArmureComponent } from './inventaireArmure/inventaire-armure.component';
import {UtilisateurService} from "./utilisateur/utilisateur.service";
import {InventaireArmureService} from "./inventaireArmure/inventaireArmure.service";
import {InventaireArmeService} from "./inventaireArme/inventaireArme.service";
import {MarchandModule} from "./marchandmodule";
import { ObjetComponent } from './objet/objet.component';
import { AdminComponent } from './admin/admin.component';
import { ArmeComponent } from './arme/arme.component';
import { ArmureComponent } from './armure/armure.component';
import { PotionComponent } from './potion/potion.component';
import {MarchandRoutingModule} from "./marchand-routing.module";
import { MonstreComponent } from './monstre/monstre.component';
import {InventairePotionComponent} from "./inventairePotion/inventaire-potion.component";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AgePipe,
    HeroComponent,
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
    MonstreComponent
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
