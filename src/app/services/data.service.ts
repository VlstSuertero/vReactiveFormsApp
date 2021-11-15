import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  owners = [
    {
      id: '1',
      firstName: 'Overlord',
      middleName: 'Of Peace',
      lastName: 'Stephenson',
      cars: [
        {
          govNum: 'VL1996ST',
          carBrand: 'Tesla',
          carModel: 'Model Y',
          prodYear: '2019'
        },
        {
          govNum: 'VL1996ST',
          carBrand: 'Tesla',
          carModel: 'Model Y',
          prodYear: '2019'
        },
        {
          govNum: 'VL1996ST',
          carBrand: 'Tesla',
          carModel: 'Model Y',
          prodYear: '2019'
        },
      ]
    },
    {
      id: '2',
      firstName: 'Dean',
      middleName: 'Thomas',
      lastName: 'Morgan',
      cars: [
        {
          govNum: 'VL1996ST',
          carBrand: 'Tesla',
          carModel: 'Model Y',
          prodYear: '2019'
        }
      ]
    },
    {
      id: '3',
      firstName: 'Lui',
      middleName: 'C',
      lastName: 'K',
      cars: [
        {
          govNum: 'VL1996ST',
          carBrand: 'Tesla',
          carModel: 'Model Y',
          prodYear: '2019'
        }
      ]
    },
    {
      id:'4',
      firstName: 'Bruce',
      middleName: 'Thomas',
      lastName: 'Wane',
      cars: [
        {
          govNum: 'VL1996ST',
          carBrand: 'Tesla',
          carModel: 'Model Y',
          prodYear: '2019'
        }
      ]
    },
  ]
}
