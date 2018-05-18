import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
@Component({
  selector: 'app-index-front',
  templateUrl: './index-front.component.html',
  styleUrls: ['./index-front.component.css']
})
export class IndexFrontComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.drawing();
  }

  drawing(){
    var line=anime({
      targets:'#lineDrawing .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 3500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: false
    })
  }

  

}
