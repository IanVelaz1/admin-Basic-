import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import aos from 'aos';
import Typed from 'typed.js';
import fullpage from 'fullpage.js';

@Component({
  selector: 'app-index-front',
  templateUrl: './index-front.component.html',
  styleUrls: ['./index-front.component.css']
})
export class IndexFrontComponent implements OnInit {

  constructor() { }

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;



  ngOnInit() {
    this.drawing();
    aos.init();
    this.initTyped();
   this.particulas();
   var page=document.getElementById("fullpage");
 
  }

  drawing(){
    var line=anime({
      targets:'#lineDrawing .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 4000,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: false
    })
  }

  initTyped(){
    var typed= new Typed('.typed',{
     strings:["Hola","Bienvenido a SitesMX","Somos una compañía de tecnología dedicada a la creacion de experiencias web."],
     typeSpeed:50,
     smartBackspace: true,
     loop: true,
     backDelay: 500
    });
  }

  particulas(){
    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'z-index': 1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
  };

     this.myParams={
      
        "particles": {
          "number": {
            "value": 22,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#262939"
          },
          "shape": {
            "type": "polygon",
            "stroke": {
              "width": 0,
              "color": "#000"
            },
            "polygon": {
              "nb_sides": 6
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 63.13280775270874,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 10,
              "size_min": 40,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 200,
            "color": "#ffffff",
            "opacity": 0.06313280775270874,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 8,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      
    }
  }
  

}
