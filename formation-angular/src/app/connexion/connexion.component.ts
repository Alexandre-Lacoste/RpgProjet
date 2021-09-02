import { Component, OnInit } from '@angular/core';
import {Compte} from "../model/compte";
import {ConnexionHttpService} from "./connexion-http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  connexionForm:FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;


  constructor(private connexionService:ConnexionHttpService, private formBuilder: FormBuilder,private router:Router,private route: ActivatedRoute) {
    if(this.connexionService.utilisateurConnecte()){
      this.router.navigate(['/acceuil']);
    };
  }

  ngOnInit(): void {
  console.log(this.connexionForm);
    this.connexionForm = this.formBuilder.group({
      pseudo: ['', Validators.required],
      mdp: ['', Validators.required]
    });
    this.returnUrl='/';
  }

  get f() { return this.connexionForm.controls; }
  connexion(){
    console.log(this.connexionForm);

    this.submitted=true;
    this.loading=true;
    this.connexionService.login(this.f.pseudo.value,this.f.mdp.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log(error);
          this.loading = false;
        });
  }

}
