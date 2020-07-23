import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlimentoService } from '../../services/alimento.service';
import { RespuestaAlimentos} from '../../interface/alimento';

@Component({
  selector: 'app-alimento',
  templateUrl: './alimento.page.html',
  styleUrls: ['./alimento.page.scss'],
})
export class AlimentoPage implements OnInit {

  idAlimento;
  alimento: RespuestaAlimentos [] = [];
  constructor(private route: ActivatedRoute,
              private alimentoService: AlimentoService ) { }

  getAlimentos() {
    this.alimentoService.getAlimento(this.idAlimento)
    .subscribe( resp => this.alimento = resp);
  }

  ngOnInit() {
    this.idAlimento = this.route.snapshot.params['id'];
    this.getAlimentos();
  }
}
