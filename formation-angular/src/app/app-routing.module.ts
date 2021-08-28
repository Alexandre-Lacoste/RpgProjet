import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {HeroComponent} from "./hero/hero.component";
import {MarchandComponent} from "./marchand/marchand.component";


const routes: Routes = [
  {path: "accueil", component: AccueilComponent},
  {path: "hero", component: HeroComponent},
  {path: "marchand", component: MarchandComponent},
  {path: "", redirectTo: "accueil", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
