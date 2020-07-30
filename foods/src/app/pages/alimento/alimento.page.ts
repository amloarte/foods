import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlimentoService } from '../../services/alimento.service';
import { RespuestaAlimentos } from '../../interface/alimento';

@Component({
  selector: 'app-alimento',
  templateUrl: './alimento.page.html',
  styleUrls: ['./alimento.page.scss'],
})
export class AlimentoPage implements OnInit {

  idSubcategoria;
  // alimento: RespuestaAlimentos[] = [];
  constructor(private route: ActivatedRoute,
    private alimentoService: AlimentoService) {
    // setInterval(() => {
    
    //     this.getAlimentos();
    
    // }, 5000)
  }


  ngOnInit() {
    this.idSubcategoria = this.route.snapshot.params['id'];
    this.getAlimentos();
  }

  ionViewWillEnter() {
    var that = this;
    setTimeout(function () {
        that.getAlimentos();
    }, 1000);
  }

  // ionViewDidEnter() {
  //   var that = this;
  //   setTimeout(function () {
  //       that.checkIframeLoaded();
  //   }, 10000);
  // }

  getAlimentos() {
    this.alimentoService.getAlimento(this.idSubcategoria)
      .subscribe(res => {
        this.alimentoService.alimentos = res as RespuestaAlimentos[];
      });
  }
}