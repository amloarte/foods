import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    IonicModule
  ],
  exports:[
    TabsComponent
  ]
})
export class ComponentsModule { }
