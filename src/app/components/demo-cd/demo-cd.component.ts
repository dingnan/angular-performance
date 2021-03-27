import { Component, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, ElementRef } from '@angular/core';

/**
 * @license 
 * Copyright https://stackblitz.com/edit/angular-qyybtn
 */
@Component({
  selector: 'app-demo-cd',
  templateUrl: './demo-cd.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.demo-component]': 'true'     // <demo-cd-default class="demo-component">...
  }
})
export class DemoCdComponent {
  public currentView: string = 'default';
  public currentViewOptions: string[] = ['default', 'on-push', 'detached-on-push'];

  // Change it to increase/decrease the number of children
  public leftBranchDepth: number = 4;
  public rightBranchDepth: number = 2;

  constructor(private cdRef: ChangeDetectorRef, private elRef: ElementRef, private ngZone: NgZone) { }

  public changeCurrentView(currentView: string): void {
    if (this.currentView !== currentView && currentView === 'detached-on-push') {
      this.cdRef.detach();
    }
    if (this.currentView !== currentView && currentView !== 'detached-on-push') {
      this.cdRef.reattach();
    }

    this.currentView = currentView;
    this.triggerChangeIfNeeded();
  }

  public triggerChangeIfNeeded(): void {
    if (this.currentView === 'detached-on-push') {
      this.cdRef.detectChanges();      
    }
  }

  public doNothing() {}

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
}
