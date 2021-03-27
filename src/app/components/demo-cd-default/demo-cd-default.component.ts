import { Component, Input, ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';

// shared by all instances of DemoCdDefaultComponent class
let _globalCheckCount = 0;

const startTime = (new Date()).getTime();

@Component({
  selector: 'demo-cd-default',
  templateUrl: './demo-cd-default.component.html',
  host: {
    '[class.demo-component]': 'true'     // <demo-cd-default class="demo-component">...
  }
})
export class DemoCdDefaultComponent {
  @Input() public leftBranchDepth: number;
  @Input() public rightBranchDepth: number;
  @Input() public counter: number = 0;

  public internalCounter: number = 0; // passed down to all children components

  // How many times this component has been re-rendered
  protected _thisCheckCount: number = 0;
  public get thisCheckCount(): number { return ++this._thisCheckCount; }

  public _globalCheckCounts: number[] = [];
  public get globalCheckCounts(): number[] {
    return this._globalCheckCounts = this._globalCheckCounts.concat([++_globalCheckCount]);
  }

  // It will show the order of component rendering, the bigger the number, the late in the show
  public get time(): number { return (new Date).getTime() - startTime; }

  constructor(
    public cdRef: ChangeDetectorRef,
    protected elRef: ElementRef,
    protected ngZone: NgZone,
  ) { }

  public ngDoCheck(): void {
    const el: HTMLElement = this.elRef.nativeElement;
    if (!el) { return; }
    this.ngZone.runOutsideAngular(() => {
      requestAnimationFrame(() => {
        el.classList.remove('during-ngDoCheck');
        requestAnimationFrame(() => {
          el.classList.add('during-ngDoCheck');
          setTimeout(() => {
            requestAnimationFrame(() => {
              el.classList.remove('during-ngDoCheck');
            });
          }, 300);
        });
      });
    });
  }

  public doNothing(): void {
    console.log("doNothing");
  }

  public increaseInternalCounter(): void {
    this.internalCounter++;
  }
}
