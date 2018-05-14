import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {Navegacion} from '../../../interfaces/navegacion';
import {NavbarService} from '../../../services/navbar-crear/navbar.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from "ngx-bootstrap/modal/bs-modal-ref.service";
import {Router} from '@angular/router';
@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  constructor(private ref:ChangeDetectorRef,private httpNavbar:NavbarService, private router:Router) { }

  ngOnInit() {
    setInterval(()=>{
     this.ref.markForCheck();
    },500)
    this.recuperarObjetosNavegacion();
  }
   
  objetoNavbarRecuperada;

  objetosNavegacion:Navegacion[]=[];

  

  recuperarObjetosNavegacion(){
  this.httpNavbar.recuperarNavbar().subscribe(navbar=>{
     console.log('====================================');
     console.log(navbar);
     console.log('====================================');
     this.objetoNavbarRecuperada=navbar;
     this.objetosNavegacion=this.objetoNavbarRecuperada.navbar;
  });
  }
  
  verObjetoNavbar(id){
    this.router.navigate(['/admin/interfaz/navegacion/ver/'+id]);
  }

  eliminarObjetoNavbar(id){
    for(let i=0;i<this.objetosNavegacion.length;i++){
      if(id==this.objetosNavegacion[i]._id){
        this.objetosNavegacion.splice(i,1);
      }
    }
    this.httpNavbar.eliminarNavbar(id).subscribe(nabvar=>{
    });
  }
  

}
