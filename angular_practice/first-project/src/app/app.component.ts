import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';
  name: string = 'Emma';
  itemList: string[] = ['pizza', 'apple', 'cake', 'carrot']

  rectangle = {
    length: 5,
    width: 6,
    area: function() {
      return this.length * this.width
    }
  }
}
