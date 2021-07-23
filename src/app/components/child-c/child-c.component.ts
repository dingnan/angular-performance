import { Component, OnInit, ChangeDetectionStrategy, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrls: ['./child-c.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildCComponent implements OnInit, DoCheck {
  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log('😃 child-c DoCheck');
  }

  onClick() {}
}
