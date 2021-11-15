import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

import { MainPageComponent } from './main/main-page/main-page.component';
import { ButtonPanelComponent } from './main/button-panel/button-panel.component';
import { RedactCarsComponent } from './redact/redact-cars/redact-cars.component';
import { RedactOwnerComponent } from './redact/redact-owner/redact-owner.component';
import { RedactButtonsComponent } from './redact/redact-buttons/redact-buttons.component';
import { RedactCarItemComponent } from './redact/redact-cars/redact-car-item/redact-car-item.component';
import { OwnerTableComponent } from './main/main-page/owner-table/owner-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RedactComponent } from './redact/redact.component';




@NgModule({
  declarations: [
    MainPageComponent,
    ButtonPanelComponent,
    RedactCarsComponent,
    RedactOwnerComponent,
    RedactButtonsComponent,
    RedactCarItemComponent,
    OwnerTableComponent,
    RedactComponent
  ],
  exports: [
    MainPageComponent
  ],
    imports: [
        CommonModule,
        MatTableModule,
        ReactiveFormsModule,
        MatButtonModule
    ]
})
export class ComponentsModule { }
