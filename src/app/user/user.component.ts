import {Component} from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    {{ username | uppercase}}
    <br>
    {{ username | lowercase}}
  `,
  imports: [UpperCasePipe, LowerCasePipe],
})
export class UserComponent {
  username = 'yOunGTECh';
}
