import { Component, OnInit } from '@angular/core';
import {SetNumberService} from '../services/set-number.service';

@Component({
  selector: 'app-left-content',
  templateUrl: './left-content.component.html',
  styleUrls: ['./left-content.component.scss']
})
export class LeftContentComponent implements OnInit {

  options = 11;
  num: number;
  numbers: Array<number> = [...Array(this.options).keys()].slice(1);

  constructor(public service: SetNumberService) { }


  ngOnInit() {
  }

  selectNumber(num) {
    this.num = num;
    this.service.setNumber(num);
  }

  reset() {
    this.num = 0;
    this.service.setNumber(0);
  }

}
