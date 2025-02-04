import {Component} from '@angular/core';
import {UserComponent} from './user.component';

@Component({
  selector: 
  'app-root',
  template: 
  `<section><app-user/></section>`,
  imports:[UserComponent]
})

export class AppComponent {
}