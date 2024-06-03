import { Routes } from '@angular/router';
import { LLaverosComponent } from './LLaveros/llaveros.component';

export const routes: Routes = [ 
    {path:'LLaveros', component:LLaverosComponent},

    {path:"", redirectTo:"/", pathMatch:"full"}
];


