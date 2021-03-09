import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildBComponent implements OnInit {
  @Input() data:string;

  constructor() { }

  ngOnInit(): void {
  }

  check() {
    console.log('child component b view checked');
  }
}
