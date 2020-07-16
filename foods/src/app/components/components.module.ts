import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { IonicModule } from '@ionic/angular';
import { SelectorComponent } from './selector/selector.component';



@NgModule({
  declarations: [
    TabsComponent,
    SelectorComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    IonicModule,
  ],
  exports: [
    SelectorComponent,
    TabsComponent,
  ]
})
export class ComponentsModule { }
