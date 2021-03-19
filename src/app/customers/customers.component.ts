import { Component, OnInit } from '@angular/core';

interface Item {
  name: string,
  id: number
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  items: Array<Item>;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {name: 'John', id: 10},
      {name: 'Smith', id: 20}
    ];
  }

  liRender(item: Item) {
    console.log('<li> rendered: ', item.name);
  }

  // Open Google Chrome DevTools, Elements tab
  // observe the <li> re-render
  changeName() {
    // regardless use trackBy or not, first <li> will not be re-rendered
    //this.items[1].name = this.generateName();
    //this.items[1] = {name: this.generateName(), id: 20};

    // without trackBy, both <li> will be re-rendered
    // with trackBy, even the object reference changed (brand new object with new id), 
    // the first item will not be re-rendered since the name is the same.
    this.items = [
      {name: 'John', id: 11},
      {name: this.generateName(), id: 20}
    ];
  }

  identifyByName(index: number, item: Item) {
    console.log('identifyByName() called: ', index, item.name);
    return item.name;
  }

  capFirst(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  generateName(){
    const name1 = ["abandoned","able","absolute","adorable","adventurous","academic","acceptable","acclaimed","accomplished"];
    const name2 = ["people","history","way","art","world","information","map","family","government","health","system"];

    const name = this.capFirst(name1[this.getRandomInt(0, name1.length)]) + ' ' 
      + this.capFirst(name2[this.getRandomInt(0, name2.length)]);
    return name;
  }
}
