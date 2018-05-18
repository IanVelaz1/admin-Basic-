import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class NavbarService {
  domain:string="http://localhost:8000";

  constructor(private http:HttpClient) { }
  
  guardarNavbar(navbar){
   return this.http.post(`${this.domain}/navbar`,navbar);
  }

  recuperarNavbar(){
    return this.http.get(`${this.domain}/navbar`);
  }

  recuperarNavbarById(id){
    return this.http.get(`${this.domain}/navbar/`+id);
  }

  editarNavbar(id,navbar){
    return this.http.put(`${this.domain}/navbar/`+id,navbar);
  }

  eliminarNavbar(id){
    return this.http.delete(`${this.domain}/navbar/`+id);
  }

}
