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
import {MarchandRoutingModule} from "./marchand-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AgePipe,
    HeroComponent,
    MarchandComponent,
    MarchandPotionComponent,
    MarchandArmeComponent,
    MarchandArmureComponent
  ],
  imports: [
    BrowserModule,
    MarchandRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [MarchandComponent]
})
export class MarchandModule { }
