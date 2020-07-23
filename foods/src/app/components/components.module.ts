import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { IonicModule } from '@ionic/angular';
import { SelectorComponent } from './selector/selector.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    TabsComponent,
    SelectorComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    SelectorComponent,
    TabsComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
