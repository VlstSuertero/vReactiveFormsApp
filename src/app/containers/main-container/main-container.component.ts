import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  owners: any

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.owners = this.dataService.owners
  }

}
