import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {HeroComponent} from "./hero/hero.component";
import {Utilisateur} from "./model/utilisateur";
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {InventaireArmeComponent} from "./inventaireArme/inventaire-arme.component";
import {InventaireArmureComponent} from "./inventaireArmure/inventaire-armure.component";
import {CombatComponent} from "./combat/combat.component";
import {AdminComponent} from "./admin/admin.component";
import {ArmeComponent} from "./arme/arme.component";
import {ArmureComponent} from "./armure/armure.component";
import {PotionComponent} from "./potion/potion.component";


const routes: Routes = [
  {path: "accueil", component: AccueilComponent},
  {path: "hero", component: HeroComponent},
  {path: "monProfil", component: UtilisateurComponent},
  {path: "inventaireArme", component: InventaireArmeComponent},
  {path: "inventaireArmure", component: InventaireArmureComponent},
  {path:"combat",component:CombatComponent},
  {path: "admin", component: AdminComponent},
  {path: "arme", component: ArmeComponent},
  {path: "armure", component: ArmureComponent},
  {path: "armure", component: PotionComponent},
  {path: "", redirectTo: "accueil", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
