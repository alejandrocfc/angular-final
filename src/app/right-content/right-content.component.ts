import { Component, OnInit } from '@angular/core';
import {SetNumberService} from '../services/set-number.service';
import {FetchDataService} from '../services/fetch-data.service';

@Component({
  selector: 'app-right-content',
  templateUrl: './right-content.component.html',
  styleUrls: ['./right-content.component.scss']
})
export class RightContentComponent implements OnInit {

  head: Array<string> = ['Title', 'Publisher', 'Issued', 'About'];
  loading: boolean;
  list: Array<any> = [];

  constructor(public service: SetNumberService, public http: FetchDataService) { }

  ngOnInit() {
    this.service.getNumber().subscribe(num => this.fetchData(num));
  }

  fetchData(num) {
    if (num > 0) {
      this.loading = true;
      this.http.getData(num).subscribe((res: any) => {
        this.list = res.result.items;
        this.loading = false;
      });
    } else {
      this.list = [];
    }
  }

}
