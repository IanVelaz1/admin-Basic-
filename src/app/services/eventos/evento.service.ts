import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class EventoService {
   
  domain:string="http://localhost:8000";
   
  constructor(private httpClient:HttpClient) {

   }

   guardarEvento(evento){
    return this.httpClient.post(`${this.domain}/evento`,evento);
   }

   recuperarEventos(){
    return this.httpClient.get(`${this.domain}/evento`);
   }

   recuperarEventoEspecifico(id){
     return this.httpClient.get(`${this.domain}/evento/`+id);
   }

   editarEventoEspecifico(id,evento){
     return this.httpClient.put(`${this.domain}/evento/`+id,evento);
   }

   eliminarEventos(id){
     return this.httpClient.delete(`${this.domain}/evento/`+id);
   }

}
