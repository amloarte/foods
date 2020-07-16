import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealityPageRoutingModule } from './reality-routing.module';

import { RealityPage } from './reality.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealityPageRoutingModule
  ],
  declarations: [RealityPage]
})
export class RealityPageModule {}
