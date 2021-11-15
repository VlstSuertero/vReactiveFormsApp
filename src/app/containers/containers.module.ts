import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedactContainerComponent } from './redact-container/redact-container.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ComponentsModule } from '../components';



@NgModule({
  declarations: [
    RedactContainerComponent,
    MainContainerComponent
  ],
  exports: [
    MainContainerComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ContainersModule { }
