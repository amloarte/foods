import { Pipe, PipeTransform } from '@angular/core';
import { RespuestaCategoria } from '../interface/categoria.interface';

@Pipe({
  name: 'buscador'
})

export class BuscadorPipe implements PipeTransform {

  transform(categorias: RespuestaCategoria[], texto: string): RespuestaCategoria[] {
    
    if (texto.length === 0){ return categorias; }
    texto = texto.toLocaleLowerCase();
    
    return categorias.filter( categorias => {
      return categorias.name.toLocaleLowerCase().includes(texto)
    })
  }

}
