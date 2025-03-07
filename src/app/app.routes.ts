import { Routes } from '@angular/router';
import { addAbortSignal } from 'stream';

export const routes: Routes = [
    //Login Path
    {
        path: '',
        loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
    },
    //Register Path
    {
        path: 'register',
        loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent)
    }        
];