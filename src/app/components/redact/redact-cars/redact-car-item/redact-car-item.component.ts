import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redact-car-item',
  templateUrl: './redact-car-item.component.html',
  styleUrls: ['./redact-car-item.component.scss']
})
export class RedactCarItemComponent implements OnInit {

  @Input() cars: any

  public car: any

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.route.url)

    this.car = new FormGroup({
      govNum: new FormControl(this.cars.govNum || '' ,Validators.required),
      carBrand: new FormControl(this.cars.carBrand || '', Validators.required),
      carModel: new FormControl(this.cars.carModel || '', Validators.required),
      prodYear: new FormControl(this.cars.prodYear || '',Validators.required)
    })
  }

  removeCar() {

  }
}
