import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventoService} from '../../../services/eventos/evento.service';
import {Evento} from '.././../../interfaces/evento';
@Component({
  selector: 'app-evento-especifico',
  templateUrl: './evento-especifico.component.html',
  styleUrls: ['./evento-especifico.component.css']
})
export class EventoEspecificoComponent implements OnInit {

  constructor(private route:ActivatedRoute,private httpEvento:EventoService) { }
  id:string;
  ngOnInit() {
    this.route.params.subscribe(params=>{
       this.id=params.id;
       this.recuperarEvento(this.id);
    });
  }


  objetoEvento;
  eventoRecuperado:Evento={
    _id:"",
    titulo:"",
    descripcion:"",
    comentarios:"",
    fechaReservacion:new Date,
    imagenes:[""],
  };
  recuperarEvento(id){
    this.httpEvento.recuperarEventoEspecifico(id).subscribe(evento=>{
       console.log('====================================');
       console.log(evento);
       console.log('====================================');
       this.objetoEvento=evento;
       this.eventoRecuperado=this.objetoEvento.evento;
    });
  }

}
