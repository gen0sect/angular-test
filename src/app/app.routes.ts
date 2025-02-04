import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login.component';
import { CarsComponent } from './car-service/car.component';
import { DateComponent } from './date/date.component';
import { PipeComponent } from './custom-pipes/pipe.component';

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
    },
    {
        path:'cars',
        title: 'App Cars Page',
        component: CarsComponent
    },
    {
        path:'date',
        title: 'App Date Page',
        component: DateComponent
    },
    {
        path:'custom-pipe',
        title: 'App Custom Pipe Page',
        component: PipeComponent
    }
];
