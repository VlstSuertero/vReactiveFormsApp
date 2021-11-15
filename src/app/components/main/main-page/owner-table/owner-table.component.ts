import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-owner-table',
  templateUrl: './owner-table.component.html',
  styleUrls: ['./owner-table.component.scss']
})

export class OwnerTableComponent implements OnInit {

  @Input() owners: any
  @Output() ownerId = new EventEmitter()
  active?: boolean;


  constructor() { }

  ngOnInit(): void {
    this.active = false
  }

  switchActive(id: any) {
    this.active = !this.active
    this.ownerId.emit(id)
  }
}
