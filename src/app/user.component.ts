import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>The user's name is {{name}} and he is an {{occupation}}</p>
  `,
})
export class UserComponent {
  @Input() occupation = '';
  @Input() name = '';
}
