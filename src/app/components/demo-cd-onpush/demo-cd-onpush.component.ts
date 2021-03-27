import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DemoCdDefaultComponent } from '../demo-cd-default/demo-cd-default.component';

@Component({
  selector: 'demo-cd-on-push',
  templateUrl: './demo-cd-onpush.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.demo-component]': 'true'
  }
})
export class DemoCdOnpushComponent extends DemoCdDefaultComponent {  }