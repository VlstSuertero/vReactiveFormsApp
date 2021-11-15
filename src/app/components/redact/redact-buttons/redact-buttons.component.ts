import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redact-buttons',
  templateUrl: './redact-buttons.component.html',
  styleUrls: ['./redact-buttons.component.scss']
})
export class RedactButtonsComponent implements OnInit {

  @Output() saveEvent = new EventEmitter()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.saveEvent.emit(true)
  }

  backToBack() {
    this.router.navigate([''])
  }
}
