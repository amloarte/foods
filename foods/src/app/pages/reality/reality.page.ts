import { Component, OnInit } from '@angular/core';
import { AlimentoPage } from '../alimento/alimento.page';
import { RespuestaAlimentos } from 'src/app/interface/alimento';


@Component({
  selector: 'app-reality',
  templateUrl: './reality.page.html',
  styleUrls: ['./reality.page.scss'],
})
export class RealityPage implements OnInit {
  alimento: RespuestaAlimentos;
  saludo: string;
  // constructor(private aliment) {
  //   this.alimento = aliment;
  //  }
  constructor() {

  }

  ngOnInit() {

  }

 

  ionViewDidEnter() {
    var that = this;
    setTimeout(function () {
        // Crea la capa del mapa
        that.checkIframeLoaded();
    }, 2000);   

  }

  changeColor() {
    if (!document.querySelector('a-text')) {

      console.log('no apraece')
    } else {
      console.log('vale vrg')
      var text = document.getElementById('test');
      text.setAttribute('value', '20:31');
    }

  }

  checkIframeLoaded() {
    // Get a handle to the iframe element
    var iframe = document.getElementById('testo') as HTMLObjectElement;
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Check if loading is complete

      if (iframeDoc.readyState == 'complete') {
        if (iframeDoc.getElementById('test')) {
          console.log("ya existe")
          var st = 1;
        } else {
          console.log("no existe")
          var st = 0;
        }
        //iframe.contentWindow.alert("Hello");
        iframe.contentWindow.onload = function () {
          console.log("I am loaded");
          
        };
        // The loading is complete, call the function we want executed once the iframe is loaded
        var text = iframeDoc.getElementById('test');
        console.log("pppppppppppppppppp");
        console.log(text.getAttribute('value'));
        text.setAttribute('value', '20:31');

      }

      // If we are here, it is not loaded. Set things up so we check   the status again in 100 milliseconds
      window.setTimeout(this.checkIframeLoaded, 100);
      
    
  }

  afterLoading() {
    console.log("I am here");
  }


}
