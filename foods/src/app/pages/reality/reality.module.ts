import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealityPageRoutingModule } from './reality-routing.module';

import { RealityPage } from './reality.page';
import { RealitypartComponent } from 'src/app/components/realitypart/realitypart.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   
    RealityPageRoutingModule
  ],
  declarations: [RealityPage, RealitypartComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RealityPageModule {}
