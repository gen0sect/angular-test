import {Component} from '@angular/core';
import {UserComponent} from './user.component';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-root',
  template: `
    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
    <section>
      <button (click)="greet()">Greet</button>
    </section>
    <app-user occupation="Angular Developer" name="Joshua"></app-user>
    <app-child (addItemEvent)="addItem($event)" />
  `,
  imports: [UserComponent, ChildComponent],
})
export class AppComponent {
  message = '';

  onMouseOver() {
    this.message = '🎉 You are awesome'
  }

greet() {
  console.log('Hello, there 👋');
}

addItem(item: any) {
  console.log('Item added:', item);
}
}
