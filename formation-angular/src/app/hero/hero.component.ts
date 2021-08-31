import { Component, OnInit } from '@angular/core';
import {Hero} from "../model/Hero";
import {HeroHttpService} from "./hero-http.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  heroForm: Hero = null;

  constructor(private heroService: HeroHttpService) { }

  ngOnInit(): void {
  }

  list(): Array<Hero> {
    return this.heroService.findAll();
  }

  add() {
    this.heroForm = new Hero();
  }

  edit(id: number) {
    this.heroService.findById(id).subscribe(resp => {
      this.heroForm = resp;
    })
  }

  save() {
    if (this.heroForm.id) {
      this.heroService.modify(this.heroForm);
    } else {
      this.heroService.create(this.heroForm);
    }
    this.heroForm = null;
  }

  delete(id: number){
    this.heroService.deleteById(id).subscribe(resp => {
      this.heroService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.heroForm = null;
  }

  loading(){
    this.heroService.load();
  }

}
