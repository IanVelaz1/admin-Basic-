import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-front',
  templateUrl: './navbar-front.component.html',
  styleUrls: ['./navbar-front.component.css']
})
export class NavbarFrontComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   
  openNav(){
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav(){
    document.getElementById("myNav").style.width = "0%";
  }


}
