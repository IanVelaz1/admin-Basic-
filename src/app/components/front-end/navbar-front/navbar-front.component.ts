import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../../../services/navbar-crear/navbar.service';
import {Navegacion} from '../../../interfaces/navegacion';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar-front',
  templateUrl: './navbar-front.component.html',
  styleUrls: ['./navbar-front.component.css']
})
export class NavbarFrontComponent implements OnInit {

  constructor(private httpNavbar:NavbarService,private router:Router) { }

  ngOnInit() {
    this.recuperarElementosNavbar();
  }

  openNav() {
    document.getElementById("myNav").style.width = "100%";
}

closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
  
  objetoNavbar;
  navbarRecuperada:Navegacion[]=[];

  recuperarElementosNavbar(){
    this.httpNavbar.recuperarNavbar().subscribe(navbar=>{
   this.objetoNavbar=navbar;
   this.navbarRecuperada=this.objetoNavbar.navbar;
   console.log('====================================');
   console.log(navbar);
   console.log('====================================');
    });
  }

  navegarPagina(id){
    this.router.navigate(['index/'+id]);
  }

  navegar(click){
    
    this.router.navigate(['/'+click]);
  }



}
