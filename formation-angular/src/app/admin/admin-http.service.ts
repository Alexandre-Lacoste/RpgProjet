import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Admin} from "../model/Admin";
import {Observable} from "rxjs";
import {MonstreHttpService} from "../monstre-Http.service";

@Injectable({
  providedIn: 'root'
})
export class AdminHttpService {

  admins: Array<Admin> = new Array<Admin>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService, private httpMonstre: MonstreHttpService) {
    // this.load();
    this.httpMonstre.load();
  }

  findAll(): Array<Admin> {
    return this.admins;
  }

  findById(id: number):  Observable<Admin> {
    return this.http.get<Admin>(this.appConfigService.backEndUrl + "admin/" + id);
  }

  create(admin: Admin) {
    this.http.post<Admin>(this.appConfigService.backEndUrl + "admin/", admin).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(admin: Admin) {
    this.http.put<Admin>(this.appConfigService.backEndUrl + "admin/" + admin.id, admin).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "admin/" + id);
  }

  load() {
    this.http.get<Array<Admin>>(this.appConfigService.backEndUrl + "admin/").subscribe(response => {
      this.admins = response;
    }, error => console.log(error));
  }

}
