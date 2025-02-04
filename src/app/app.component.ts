import {Component} from '@angular/core';
import {RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a style="text-decoration:none" routerLink="/">Home</a>
      |
      <a style="text-decoration:none" routerLink="/user">User</a>
      |
      <a style="text-decoration:none" routerLink="/loginform"> Login Form</a>
      |
      <a style="text-decoration:none" routerLink="/cars">Cars</a>
    </nav>
    <router-outlet/>
  `,
  imports: [RouterOutlet, RouterLink],
})
export class AppComponent {}
