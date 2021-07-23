import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildBComponent implements OnInit, OnChanges, DoCheck {
  @Input() data:any;
  oldValue: string;
  childData = { id: 1, age: 42 };
  constructor(private cd: ChangeDetectorRef) { 
    console.log('😎 child-b constructor');
  }

  ngOnInit(): void {
    console.log('😎 child-b OnInit', this.data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('😎 child-b OnChange', changes, this.data);
    this.oldValue = this.data.value;
  }

  // it is called when
  // 1. parent is being checked (do nothing button clicked)
  // 2. the current component is being checked,  (do nothing button clicked)
  // 3. the child component is being checked,  (do nothing button clicked)
  // we can use the ngDoCheck lifecycle hook to check for object mutation and notify Angular using markForCheck method.
  // Please note that Angular team recommends using immutable objects instead of object mutations so that you can rely on default Angular bindings change tracking mechanism.
  ngDoCheck(): void {
    console.log('😎 child-b DoCheck');

    // Since it is same object reference, angular will not be able to tell difference
    // however, we can check if object property has changed, and notify angular
    if (this.oldValue !== this.data.value) {
      this.oldValue = this.data.value;
      this.cd.markForCheck(); // if comment out this line, angular will not run view check
    }
  }
  
  get check() {
    console.log('😎 child-b view checked');
    return true;
  }

  onclick() {
    console.log('😎 child-b button click');
  }
}
