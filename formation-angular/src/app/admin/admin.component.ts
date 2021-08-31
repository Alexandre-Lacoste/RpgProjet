import {Component, OnInit} from '@angular/core';
import {Admin} from "../model/Admin";
import {AdminHttpService} from "./admin-http.service";
import {ArmeHttpService} from "../arme/arme-http.service";
import {ArmureHttpService} from "../armure/armure-http.service";
import {PotionHttpService} from "../potion/potion-http.service";
import {HeroHttpService} from "../hero/hero-http.service";
import {MonstreHttpService} from "../monstre-Http.service";
import {MarchandHttpService} from "../marchand/marchand-http.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {

  adminForm: Admin = null;

  constructor(private adminService: AdminHttpService, private armeService: ArmeHttpService, private armureService: ArmureHttpService, private potionService: PotionHttpService,
              private heroService: HeroHttpService, private monstreService: MonstreHttpService, private marchandService: MarchandHttpService) {
  }

  ngOnInit(): void {
  }

  list(): Array<Admin> {
    return this.adminService.findAll();
  }

  add() {
    this.adminForm = new Admin();
  }

  edit(id: number) {
    this.adminService.findById(id).subscribe(resp => {
      this.adminForm = resp;
    })
  }

  save() {
    if (this.adminForm.id) {
      this.adminService.modify(this.adminForm);
    } else {
      this.adminService.create(this.adminForm);
    }
    this.adminForm = null;
  }

  delete(id: number){
    this.adminService.deleteById(id).subscribe(resp => {
      this.adminService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.adminForm = null;
  }

  loading(){
    this.adminService.load();
  }

  loadingArme() {
    this.armeService.load();
  }

  loadingArmure() {
    this.armureService.load();
  }



  loadingPotion() {
    this.potionService.load();
  }

  loadingHero() {
    this.heroService.load();
  }

  loadingMonstre() {
    this.monstreService.load();
  }

  loadingMarchand() {
    this.marchandService.load();
  }

}
