import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {Router} from '@angular/router';
import {EventoService} from '../../../services/eventos/evento.service';
import {Evento} from '../../../interfaces/evento';
@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  constructor(private httpEventos:EventoService,private ref:ChangeDetectorRef) { }

  ngOnInit() {
    setInterval(()=>{
      this.ref.markForCheck();
    },500);
    this.recuperarEventos();
  }

  objetoEventos;
  arrayEventos:Evento[]=[];
  recuperarEventos(){
    this.httpEventos.recuperarEventos().subscribe(eventos=>{
      this.objetoEventos=eventos;
      this.arrayEventos=this.objetoEventos.eventos;
      console.log('====================================');
      console.log(this.arrayEventos);
      console.log('====================================');
    })
  }

}
