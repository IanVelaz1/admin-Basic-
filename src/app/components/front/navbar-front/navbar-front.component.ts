import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {NavbarService} from '../../../services/navbar-crear/navbar.service';
import {Navegacion} from '../../../interfaces/navegacion'
import anime from 'animejs';
@Component({
  selector: 'app-navbar-front',
  templateUrl: './navbar-front.component.html',
  styleUrls: ['./navbar-front.component.css']
})
export class NavbarFrontComponent implements OnInit {

  constructor(private navHttp:NavbarService, private ref:ChangeDetectorRef) { }

  ngOnInit() {
    this.recuperarNav();
    setInterval(()=>{
      this.ref.markForCheck();
    },500);
  }
   
  openNav(){
    document.getElementById("myNav").style.width = "100%";

  }

  animateClose:boolean=false;
  closeNav(){
    document.getElementById("myNav").style.width = "0%";
    this.animate=false;
    this.animateClose=true;
  }

  animate:boolean=false;
  animarNav(){
   this.animate=true;
   this.animateClose=false;
  }

  objetoNavbar;
  arrayNavbar:Navegacion[]=[];
  recuperarNav(){
    this.navHttp.recuperarNavbar().subscribe(navbar=>{
      this.objetoNavbar=navbar;
      this.arrayNavbar=this.objetoNavbar.navbar;
    });
  }



  


}
