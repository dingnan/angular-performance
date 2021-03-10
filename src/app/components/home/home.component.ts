import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  time: string;

  constructor() { }

  ngOnInit(): void {
    this.time = moment().format('MM.DD.YYYY');
  }

}
