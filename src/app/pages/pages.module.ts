import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerTableComponent } from './owner-table/owner-table.component';
import { OwnerTableListComponent } from './owner-table/owner-table-list/owner-table-list.component';
import { OwnerTableItemComponent } from './owner-table/owner-table-list/owner-table-item/owner-table-item.component';



@NgModule({
  declarations: [
    OwnerTableComponent,
    OwnerTableListComponent,
    OwnerTableItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
