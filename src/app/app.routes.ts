import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login.component';

export const routes: Routes = [
    {
        path: '',
        title: 'App Home Page',
        component: HomeComponent
    },
    {
        path:'user',
        title: 'App User Page',
        component: UserComponent
    },
    {
        path:'loginform',
        title: 'App Login Form',
        component: LoginComponent
    }
];
