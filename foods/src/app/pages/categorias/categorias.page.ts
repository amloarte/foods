import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { RespuestaCategoria} from '../../interface/categoria.interface';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})

export class CategoriasPage implements OnInit {

  categorias: RespuestaCategoria [] = [];
  textoBuscar = '';

  ngOnInit() {}

  constructor(public  categoriaService: CategoriaService) {
    this.categoriaService.getCategories()
    .subscribe( resp => this.categorias = resp);
  }


  buscarCategoria( event ){
    const texto = event.target.value;
    this.textoBuscar = texto;
  }
}
