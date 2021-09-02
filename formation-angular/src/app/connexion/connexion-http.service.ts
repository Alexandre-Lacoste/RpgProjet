import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Compte} from "../model/compte";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {AppConfigService} from "../app-config.service";

@Injectable({
  providedIn: 'root'
})
export class ConnexionHttpService {

  private currentUserSubject: BehaviorSubject<Compte>;
  currentUser:Observable<Compte>;
  private username: any;

  connexion=false;

  constructor(private http:HttpClient,private  appConfigService:AppConfigService) {
   this.currentUserSubject = new BehaviorSubject<Compte>(JSON.parse(localStorage.getItem('currentUser')));
   this.currentUser = this.currentUserSubject.asObservable();
  }



  utilisateurConnecte():Compte{
    return this.currentUserSubject.value;
  }

  login(pseudo:string,mdp:string){

    const params = new HttpParams()

      .set('pseudo', pseudo)
      .set('mdp', mdp);

    return this.http.post<any>( this.appConfigService.backEndUrl+'compte/users/connexion',{params})
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }))

  }



  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }


}
