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

  idAlimento;
  alimentos;

  ngOnInit() {
    this.idAlimento = this.route.snapshot.params['id'];
    this.getAlimentos();
  }

  constructor(private route: ActivatedRoute,
              private alimentoService: AlimentoService ) { }


  getAlimentos() {
    this.alimentoService.getOneAlimento(this.idAlimento)
      .subscribe(res => {
        this.alimentos = res;
      });
  }

}
