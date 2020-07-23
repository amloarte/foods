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
    private alimentoService: AlimentoService) { }


  ngOnInit() {
    this.idSubcategoria = this.route.snapshot.params['id'];
    this.getAlimentos()
  }

  getAlimentos() {
    this.alimentoService.getAlimento(this.idSubcategoria)
      .subscribe(res => {
        console.log(res);
        this.alimentoService.alimentos = res as RespuestaAlimentos[];
      });
  }
}
