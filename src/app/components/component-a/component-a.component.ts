import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Injector } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {
  @ViewChild('childContainer', {read: ViewContainerRef}) childContainer: ViewContainerRef | undefined;
  childComponentLoaded = false;

  constructor(private cfr: ComponentFactoryResolver, private injector: Injector) { }

  ngOnInit(): void {
  }

  // lazy load component
  // https://medium.com/angular-in-depth/lazy-load-components-in-angular-596357ab05d8
  async loadChild() {
    this.loadChildComponent();
    this.childComponentLoaded = true;
  }

  private async loadChildComponent() {
    const {ChildAComponent} = await import ("../child-a/child-a.component");
    const childAFactory = this.cfr.resolveComponentFactory(ChildAComponent);
    if (this.childContainer) {
      const { instance } = this.childContainer.createComponent(childAFactory, undefined, this.injector);
      console.log('Child Component', instance);
    }
  }
}
