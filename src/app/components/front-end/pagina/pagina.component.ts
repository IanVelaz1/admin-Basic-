import { Component, OnInit } from '@angular/core';
import {PaginasService} from '../../../services/paginas/paginas.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  constructor(private httpPaginas:PaginasService,private route:ActivatedRoute) { }

  id:string='';
  slideIndex = 1;
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=params.id;
    });
  
    this.recuperarPagina(this.id);
  }

  objetoPagina;
  imagenInicial:{secure_url:""};
  imagenesCarousel:any[]=[{secure_url:''}];

  imagenesColeccion:any[]=[{secure_url:''}];

  arrCol:any[]=["","","",""];

  recuperarPagina(id){
    this.httpPaginas.recuperarPaginaById(id).subscribe(pagina=>{
   this.objetoPagina=pagina;
   this.imagenesCarousel=this.objetoPagina.pagina.pagina.imagenesCarousel;
   this.imagenesColeccion=this.objetoPagina.pagina.pagina.imagenesColeccion;

    
   console.log('====================================');
   console.log(pagina);
   console.log('====================================');

    });
  }

  



}
