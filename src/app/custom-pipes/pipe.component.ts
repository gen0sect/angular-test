import {Component} from '@angular/core';
import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-root',
  template: `
    Reverse Machine: {{ word | reverse }}
  `,
  imports: [ReversePipe],
})
export class PipeComponent {
  word = 'You are a champion';
}
