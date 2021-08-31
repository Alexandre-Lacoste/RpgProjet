import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {AgePipe} from "./age.pipe";
import {HttpClientModule} from "@angular/common/http";
import { HeroComponent } from './hero/hero.component';
import { MarchandComponent } from './marchand/marchand.component';
import { MarchandPotionComponent } from './marchand-potion/marchand-potion.component';
import { MarchandArmeComponent } from './marchand-arme/marchand-arme.component';
import { MarchandArmureComponent } from './marchand-armure/marchand-armure.component';
import {MarchandRoutingModule} from "./marchand-routing.module";
import {InventaireArmureComponent} from "./inventaireArmure/inventaire-armure.component";
import {InventaireArmeComponent} from "./inventaireArme/inventaire-arme.component";
import {InventairePotionComponent} from "./inventairePotion/inventaire-potion.component";
import {ObjetComponent} from "./objet/objet.component";

@NgModule({
  declarations: [
    ObjetComponent,
    MarchandComponent,
    MarchandPotionComponent,
    MarchandArmeComponent,
    MarchandArmureComponent,
    InventaireArmureComponent,
    InventaireArmeComponent,
    InventairePotionComponent


  ],
  imports: [
    // BrowserModule,
    // MarchandRoutingModule,
    // FormsModule,
    // HttpClientModule


  ],
  providers: [],
  exports: [
    InventaireArmeComponent,
    InventaireArmureComponent,
    InventairePotionComponent
  ],
  bootstrap: [MarchandComponent]
})
export class MarchandModule { }
