import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class PaginasService {


  domain:string="http://localhost:8000";

  constructor(private http:HttpClient) { }

  guardarPagina(pagina){
    return this.http.post(`${this.domain}/pagina`,pagina);
  }

  recuperarPaginas(){
    return this.http.get(`${this.domain}/pagina`);
  }

  recuperarPaginaById(id){
    return this.http.get(`${this.domain}/pagina/`+id);
  }

  editarPagina(id,pagina){
    return this.http.put(`${this.domain}/pagina/`+id,pagina);
  }

  eliminarPagina(id){
    return this.http.delete(`${this.domain}/pagina/`+id);
  }

}
