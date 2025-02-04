import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  styles: `.btn { padding: 5px; }`,
  template: `
    <button class="btn" (click)="addItem()">Add Item</button>
  `,
})
export class ChildComponent {

    @Output() addItemEvent = new EventEmitter<string>();

    addItem() {
        this.addItemEvent.emit('a turtle has been added: 🐢');
      }

  @Output() incrementCountEvent = new EventEmitter<number>();
    count = 0;

  onClick() {
    this.count++;
    this.incrementCountEvent.emit(this.count);}

    
}
