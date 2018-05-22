import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {PaginasService} from '../../../services/paginas/paginas.service';
import {DomSanitizer} from '@angular/platform-browser';
import Typed from 'typed.js';
import aos from 'aos';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private httpPaginas:PaginasService,private ref:ChangeDetectorRef,private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.recuperarPaginas();
    this.typeContacto();
    aos.init();
  }

  urlVideo:any=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ")

  objetoPaginaRec;
  arrayPaginas:any[]=[{hover:false,
    pagina:{imagenesCarousel:[{secure_url:""}],},
    videoUrl:""
  }];

  recuperarPaginas(){
    this.httpPaginas.recuperarPaginas().subscribe(paginas=>{
      this.objetoPaginaRec=paginas;
      this.arrayPaginas=this.objetoPaginaRec.paginas;
      
    });
  }

  cambiarVideo(url){
    this.urlVideo=this.sanitizer.bypassSecurityTrustResourceUrl(url+"?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&start=5");
    
  }

  typeContacto(){
    var typed= new Typed('.typed-contacto',{
      strings:[" ","Queremos trabajar contigo, contáctanos."],
      typeSpeed:80,
      smartBackspace: true,
      loop: false,
      cursorChar: '|',
      backDelay: 500
     });
  }

}
