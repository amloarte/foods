import { Component, OnInit } from '@angular/core';
import { AlimentoPage } from '../alimento/alimento.page';
import { RespuestaAlimentos } from 'src/app/interface/alimento';
import { GoogleServiceobjectsService } from 'src/app/services/google-serviceobjects.service';


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
  constructor(private googleS:GoogleServiceobjectsService) {

  }
  file;
  ngOnInit() {
    this.changeColor("1bxOcmXisMlo2n7phTkJ4tzO7UBadOf8f");
  }

 

  ionViewDidEnter() {
    var that = this;
    setTimeout(function () {
        // Crea la capa del mapa
        that.checkIframeLoaded();
    }, 10000);   

  }

  changeColor(fileid) {
    this.googleS.get_objectfromDriven(fileid).subscribe( res =>{
      console.log(res)
      
      this.file = URL.createObjectURL(res);
    });

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
        var per = iframeDoc.getElementById('perro');
        per.setAttribute('gltf-model', this.file);
      }

      // If we are here, it is not loaded. Set things up so we check   the status again in 100 millisecond
      
    
  }

  afterLoading() {
    console.log("I am here");
  }


}
