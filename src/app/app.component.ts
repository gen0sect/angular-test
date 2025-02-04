import {Component} from '@angular/core';

@Component({
  selector: 
  'app-root',
  template: `
  @if (isLoggedin) {
   <p> You are currently Logged in! </p>
  }
  @else {
   <p> You are currently Logged out! </p>
  }
  `
  })

export class AppComponent {
  isLoggedin=false;
}