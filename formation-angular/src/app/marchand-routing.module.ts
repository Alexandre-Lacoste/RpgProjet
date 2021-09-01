import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MarchandComponent} from "./marchand/marchand.component";
import {HeroComponent} from "./hero/hero.component";
import {MarchandArme} from "./model/MarchandArme";
import {MarchandArmeComponent} from "./marchand-arme/marchand-arme.component";
import {MarchandArmure} from "./model/MarchandArmure";
import {MarchandArmureComponent} from "./marchand-armure/marchand-armure.component";


const routes: Routes = [
  {path: "hero", component: HeroComponent},
  {path: "marchand/:mar", component: MarchandComponent},


  {path: "", redirectTo: "accueil", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarchandRoutingModule {
}
