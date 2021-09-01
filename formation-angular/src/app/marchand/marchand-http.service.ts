import { Injectable } from '@angular/core';
import {Marchand} from "../model/Marchand";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";

@Injectable({
  providedIn: 'root'
})
export class MarchandHttpService {

  marchands: Array<Marchand> = new Array<Marchand>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<Marchand> {
    return this.marchands;
  }

  findById(id: number): Observable<Marchand> {
    return this.http.get<Marchand>(this.appConfigService.backEndUrl + "marchand/" + id);
  }

  create(marchand: Marchand) {
    this.http.post<Marchand>(this.appConfigService.backEndUrl + "marchand/", marchand).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(marchand: Marchand) {
    this.http.put<Marchand>(this.appConfigService.backEndUrl + "marchand/" + marchand.id, marchand).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "marchand/" + id);
  }

  reload(){
    return this.http.delete<void>("http://localhost:4200/marchand/");
  }

  load() {
    this.http.get<Array<Marchand>>(this.appConfigService.backEndUrl + "marchand/").subscribe(response => {
      this.marchands = response;
    }, error => console.log(error));
  }


}
