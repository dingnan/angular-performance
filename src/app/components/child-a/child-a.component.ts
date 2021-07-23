import { Component, OnInit } from '@angular/core';

// lazy loaded, no need to be imported in app.module.ts
@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
