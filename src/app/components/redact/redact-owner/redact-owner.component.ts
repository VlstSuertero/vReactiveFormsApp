import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-redact-owner',
  templateUrl: './redact-owner.component.html',
  styleUrls: ['./redact-owner.component.scss']
})
export class RedactOwnerComponent implements OnInit, OnChanges {

  @Input() currentOwner: any
  @Output() ownerData = new EventEmitter()
  public owner: any

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

    this.owner = new FormGroup({
      firstName: new FormControl( this.currentOwner[0].firstName || '', Validators.required),
      middleName: new FormControl(this.currentOwner[0].middleName || '', Validators.required),
      lastName: new FormControl(this.currentOwner[0].lastName || '', Validators.required),
    })

    this.ownerData.emit(this.owner.value)
  }
}
