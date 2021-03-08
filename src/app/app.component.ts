import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-performance';
  buttonText = "🞬";
  hideMenu = false;

  toggle(e:MouseEvent) {
    if (this.buttonText === "🞬") {
      this.buttonText = "☰";
      this.hideMenu = true;
    } else {
      this.buttonText = "🞬";
      this.hideMenu = false;
    }
  }
}
