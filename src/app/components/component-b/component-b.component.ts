import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {
  data = {
    id: 1,
    value: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

  setValue(val: string) {
    this.data.value = val;
  }

  onClick() {
    console.log('component b -- button clicked');
  }
}
