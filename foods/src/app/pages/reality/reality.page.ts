import { Component, OnInit } from '@angular/core';
import { AlimentoPage } from '../alimento/alimento.page';
import { RespuestaAlimentos } from 'src/app/interface/alimento';
import { ActivatedRoute } from '@angular/router';
import { AlimentoService } from './../../services/alimento.service';
import { GoogleServiceobjectsService } from 'src/app/services/google-serviceobjects.service';
@Component({
  selector: 'app-reality',
  templateUrl: './reality.page.html',
  styleUrls: ['./reality.page.scss'],

})
export class RealityPage implements OnInit {
  idAlimento;
  oneAlimento;
  // strGlucidos = 'Glúcidos:';
  // constructor(private aliment) {
  //   this.alimento = aliment;
  //  }
  constructor(
    private route: ActivatedRoute,
    private alimentoService: AlimentoService,
    private googleS:GoogleServiceobjectsService
  ) { }

  file;
  ngOnInit() {
    this.changeColor("1bxOcmXisMlo2n7phTkJ4tzO7UBadOf8f");
    this.idAlimento = this.route.snapshot.params['id'];
    this.getAlimentos();
    // this.cargar();
  }

  getAlimentos() {
    this.alimentoService.getOneAlimento(this.idAlimento)
      .subscribe(res => {
        this.oneAlimento = res;
      });
  }

  ionViewDidEnter() {
    var that = this;
    setTimeout(function () {
        that.checkIframeLoaded();
    }, 10000);
  }

  changeColor(fileid) {
    this.googleS.get_objectfromDriven(fileid).subscribe( res =>{
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
          var st = 1;
        } else {
          var st = 0;
        }
        //iframe.contentWindow.alert("Hello");
        iframe.contentWindow.onload = function () {
        };
        // The loading is complete, call the function we want executed once the iframe is loaded
        var text = iframeDoc.getElementById('nombre');
        var proteinas = iframeDoc.getElementById('proteinas');
        var glucidos = iframeDoc.getElementById('glucidos');
        var lipidos = iframeDoc.getElementById('lipidos');
        var kilocalorias = iframeDoc.getElementById('kilocalorias');
        var per = iframeDoc.getElementById('perro');
        // console.log(text.getAttribute('value'));
        // console.log(text.getAttribute('position'));

        // text.setAttribute('position', '-0.4 0 -1');

        //Atributos Nombre
        text.setAttribute('value', 'Nombre: ' + this.oneAlimento.nombre_comun);
        text.setAttribute('scale', '0.26 0.26 0.26');
        //Atributos Proteinas
        proteinas.setAttribute('value', 'Proteinas: ' + this.oneAlimento.proteinas);
        proteinas.setAttribute('scale', '0.26 0.26 0.26');
        //Atributos Glucidos
        glucidos.setAttribute('value', 'Glucidos: ' + this.oneAlimento.glucidos);
        glucidos.setAttribute('scale', '0.26 0.26 0.26');
        //Atributos Lipidos
        lipidos.setAttribute('value', 'Lipidos: ' + this.oneAlimento.lipidos);
        lipidos.setAttribute('scale', '0.26 0.26 0.26');
        //Atributo Kilocalorias
        kilocalorias.setAttribute('value', 'kilocalorias: ' + this.oneAlimento.kilocalorias);
        kilocalorias.setAttribute('scale', '0.26 0.26 0.26');
        //Atributos Drive
        per.setAttribute('gltf-model', this.file);
      }

  }

}
