import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealityPage } from './reality.page';

const routes: Routes = [
  {
    path: '',
    component: RealityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealityPageRoutingModule {}
