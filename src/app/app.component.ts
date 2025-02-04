import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
    <section>
      <button (click)="greet()">Greet</button>
  `,
})
export class AppComponent {
  message = '';

  onMouseOver() {
    this.message = '🎉 You are awesome'
  }

  greet() {
    console.log('Hello, there 👋');
}
}
