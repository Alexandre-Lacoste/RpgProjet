import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {HeroComponent} from "./hero/hero.component";
import {MarchandComponent} from "./marchand/marchand.component";
import {Utilisateur} from "./model/utilisateur";
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {InventaireArmeComponent} from "./inventaireArme/inventaire-arme.component";
import {InventaireArmureComponent} from "./inventaireArmure/inventaire-armure.component";
import {CombatComponent} from "./combat/combat.component";
import {AdminComponent} from "./admin/admin.component";
import {ArmeComponent} from "./arme/arme.component";
import {ArmureComponent} from "./armure/armure.component";
import {PotionComponent} from "./potion/potion.component";
import {MonstreComponent} from "./monstre/monstre.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {ConnexionComponent} from "./connexion/connexion.component";


const routes: Routes = [
  {path: "accueil", component: AccueilComponent},
  {path: "hero", component: HeroComponent},
  {path: "utilisateur", component: UtilisateurComponent},
 // {path: "utilisateur/:id", component: UtilisateurComponent},
  {path: "inventaireArme", component: InventaireArmeComponent},
  {path: "inventaireArmure", component: InventaireArmureComponent},
  {path:"combat/:idUtil",component:CombatComponent},
  {path: "marchand/:mar", component: MarchandComponent},
  {path: "admin", component: AdminComponent},
  {path: "arme", component: ArmeComponent},
  {path: "armure", component: ArmureComponent},
  {path: "potion", component: PotionComponent},
  {path: "monstre", component: MonstreComponent},
  {path:"inscription", component: InscriptionComponent},
  {path:"connexion", component: ConnexionComponent},
  {path: "", redirectTo: "accueil", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
