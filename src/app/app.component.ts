import {Component} from '@angular/core';

@Component({
  selector: 
  'app-root',
  template:`
  @for (fruit of fruits; track fruit.id) {
    {{fruit.name}},
    <img alt="photo" [src]="imageURL">
    <div [contentEditable]="isEditable">{{fruit.name}}</div>
  }
  `
  })

export class AppComponent {
  fruits = [{id: 1, name: 'Apple'}, {id: 2, name: 'Banana'}, {id: 3, name: 'Cherry'}];
  imageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5rGAYo0IfaL0D8tLXb23tuAMOWC2viTpefQ&s';
  isEditable = true;
}