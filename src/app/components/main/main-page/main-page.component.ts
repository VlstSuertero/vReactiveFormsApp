import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  @Input() owners: any
  ownerId: any;
  public newOwner: any

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  redirectByType($event: any) {

    switch ($event) {

      case 'add': {
        console.log(this.ownerId)
        this.newOwner = {
          id: Date.now().toString(),
          firstName: '',
          middleName: '',
          lastName: '',
          cars: [
            {
              govNum: '',
              carBrand: '',
              carModel: '',
              prodYear: ''
            }
          ]
        }

        this.dataService.owners = [...this.dataService.owners, this.newOwner]

        this.router.navigate([`add/${this.newOwner.id}`])
        break;
      }

      case 'show': {
        console.log(this.ownerId)
        this.router.navigate([`/redact/${this.ownerId}`])
        break;
      }
      case 'change': {
        this.router.navigate([`/redact/${this.ownerId}`])
        console.log(this.owners.id)
        break;
      }
      case 'remove': {
        console.log($event)
        break;
      }
      default: {
        console.log('Err')
        break;
      }
    }
  }

  setId(event: any) {
    this.ownerId = event
  }
}
