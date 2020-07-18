import { Component, OnInit } from '@angular/core';
import { RespuestaAlimentos } from '../../interface/alimento';
import { ActivatedRoute } from '@angular/router';
import { AlimentoService } from '../../services/alimento.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})

export class InfoPage implements OnInit {

  idSubcategoria;
  alimento: RespuestaAlimentos [] = [];
  constructor(private route: ActivatedRoute,
              private alimentoService: AlimentoService ) { }

  ngOnInit() {
    this.idSubcategoria = this.route.snapshot.params['id'];
    this.getAlimentos();
  }

  getAlimentos() {
    this.alimentoService.getAlimento(this.idSubcategoria)
    .subscribe( resp => this.alimento = resp);
  }
}
