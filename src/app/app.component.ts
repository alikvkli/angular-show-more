import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  showMore = false;
  showText = 'daha fazla göster';
  showMoree() {
    this.showMore = !this.showMore;
    if (this.showMore == true) {
      this.showText = 'daha az göster';
    } else {
      this.showText = 'daha fazla göster';
    }
    console.log(this.showMore);
  }
}
