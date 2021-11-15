import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-redact',
  templateUrl: './redact.component.html',
  styleUrls: ['./redact.component.scss']
})
export class RedactComponent implements OnInit {

  public currentOwner: any
  ownerData: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(value => {
      this.currentOwner = this.dataService.owners.filter(i => i.id === value.id)
    })
  }

  submit($event: any) {

  }

  setOwner($event: any) {
    console.log($event)
  }
}
