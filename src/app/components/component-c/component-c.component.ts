import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.scss']
})
export class ComponentCComponent implements OnInit {
  value: number = 12.340005;
  constructor() { }

  ngOnInit(): void {
  }

  setValue(v: number) {
    this.value = v;
  }

  dollarAmount() {
    console.log('👩 dollarAmount() method called: ', this.value);
    return '$' + this.value.toFixed(2);
  }
}
