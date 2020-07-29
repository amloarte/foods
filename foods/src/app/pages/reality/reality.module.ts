import { PruebaPage } from './../prueba/prueba.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealityPageRoutingModule } from './reality-routing.module';

import { RealityPage } from './reality.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealityPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RealityPage, PruebaPage]
})
export class RealityPageModule {}
