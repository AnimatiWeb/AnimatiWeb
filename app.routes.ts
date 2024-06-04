import { Routes } from '@angular/router';
import { LLaverosComponent } from './LLaveros/llaveros.component';
import { Carrito-HistorialComponent } from './Carrito-Historial/compras.component';
import { Carrito-PagarComponent } from './Carrito-Pagar/pagar.component';
import { Carrito-ProductosComponent } from './Carrito-Productos/productos.component';

export const routes: Routes = [ 
    {path:'LLaveros', component:LLaverosComponent},
    {path:'Carrito-Historial', component:Carrito-HistorialComponent},
    {path:'Carrito-Pagar', component:Carrito-PagarComponent},
    {path:'Carrito-Productos', component:Carrito-ProductosComponent},

    {path:"", redirectTo:"/", pathMatch:"full"}
];

