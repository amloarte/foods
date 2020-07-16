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
  // constructor(private aliment) {
  //   this.alimento = aliment;
  //  }
  constructor(){}

  ngOnInit() {
  }

}
