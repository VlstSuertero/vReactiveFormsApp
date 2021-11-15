import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-redact-cars',
  templateUrl: './redact-cars.component.html',
  styleUrls: ['./redact-cars.component.scss']
})
export class RedactCarsComponent implements OnInit {

  @Input() currentOwner: any

  constructor() { }

  ngOnInit(): void {
  }

  addNewCar() {
    this.currentOwner[0].cars.push({
      id: Date.now().toString(),
      govNum: '',
      carBrand: '',
      carModel: '',
      prodYear: ''
    })
  }
}
