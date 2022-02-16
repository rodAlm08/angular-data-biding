import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  count: number = 0;
  hideStar: boolean = true;

  numberOfClicks() {
    this.count++;
  }

  starClicked() {
    if (this.hideStar == true) this.hideStar = false;
    else this.hideStar = true;
  }
}