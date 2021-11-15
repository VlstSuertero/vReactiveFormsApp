import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-button-panel',
  templateUrl: './button-panel.component.html',
  styleUrls: ['./button-panel.component.scss']
})
export class ButtonPanelComponent implements OnInit {

  @Output() buttonType = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  openRedact(type: string) {
    this.buttonType.emit(type)
  }
}
