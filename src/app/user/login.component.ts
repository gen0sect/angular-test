import { Component } from "@angular/core";
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "login-form",
    template: `
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">>
      <label>Name
        <input type="text" formControlName="name" />
      </label>
      <label>Email
        <input type="email" formControlName="email" />
      </label>
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>

    <div>
        <h2>Profile Form</h2>
        <p>Name: {{ profileForm.value.name }}</p>
        <p>Email: {{ profileForm.value.email }}</p>
    </div>    
    `,
    imports: [ReactiveFormsModule]
})

export class LoginComponent{
    profileForm= new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email])
    });

    handleSubmit(){
        alert('Profile Form submitted: ' + this.profileForm.value.name + '|' + this.profileForm.value.email);
    }
}