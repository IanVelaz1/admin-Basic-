import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../../../services/navbar-crear/navbar.service';
import {Navegacion} from '../../../interfaces/navegacion'
@Component({
  selector: 'app-navbar-front',
  templateUrl: './navbar-front.component.html',
  styleUrls: ['./navbar-front.component.css']
})
export class NavbarFrontComponent implements OnInit {

  constructor(private navHttp:NavbarService) { }

  ngOnInit() {
    this.recuperarNav();
  }
   
  openNav(){
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav(){
    document.getElementById("myNav").style.width = "0%";
  }

  objetoNavbar;
  arrayNavbar:Navegacion[]=[];
  recuperarNav(){
    this.navHttp.recuperarNavbar().subscribe(navbar=>{
      this.objetoNavbar=navbar;
      this.arrayNavbar=this.objetoNavbar.navbar;
      console.log('====================================');
      console.log(navbar);
      console.log('====================================');
    });
  }

  


}
