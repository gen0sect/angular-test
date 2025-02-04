import { Component } from "@angular/core";

@Component({
    selector: `app-user`,
    template: `Username: {{username}}`
  })
  
  export class UserComponent{
    username = `John Doe`;
  }
  