import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorPipe } from './buscador.pipe';


@NgModule({
  declarations: [BuscadorPipe],
  imports: [
    CommonModule
  ],
  exports: [BuscadorPipe],
})
export class PipesModule { }
