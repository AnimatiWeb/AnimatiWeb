import { Routes } from '@angular/router';
<<<<<<< HEAD

export const routes: Routes = [];
=======
import { LoginComponent } from './pages/auth/login/login.component';

export const routes: Routes = [
    {path:'/login', component:LoginComponent},
    {path:"", redirectTo:"/home", pathMatch:"full"}
];
>>>>>>> JonJonathanArias
