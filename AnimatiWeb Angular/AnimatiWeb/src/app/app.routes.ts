import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactoComponentComponent } from './pages/contacto-component/contacto-component.component';
import { CubecraftCityComponent } from './pages/cubecraft-city/cubecraft-city.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistroDeUsuariosComponent } from './pages/auth/registro-de-usuarios/registro-de-usuarios.component';
import { SetStickersComponent } from './pages/set-stickers/set-stickers.component';
import { SeparadoresComponent } from './pages/separadores/separadores.component';

import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { QuienesSomosComponent } from './pages/auth/quienes-somos/quienes-somos.component';

export const routes: Routes = [
    {path:"gallery", component:GalleryComponent},
    {path:"contacto", component:ContactoComponentComponent},
    {path:"cubecraft", component:CubecraftCityComponent},
    {path:"registroUsuarios", component:RegistroDeUsuariosComponent},
    {path:'login', component:LoginComponent},
<<<<<<< HEAD
    {path:'separadores', component:SeparadoresComponent},
    {path:'set-stickers', component:SetStickersComponent},
    {path:'', component:PaginaPrincipalComponent},
    {path:'Quien-somos', component:QuienesSomosComponent},
    
    {path:"", redirectTo:"/", pathMatch:"full"}
=======
    
>>>>>>> developer
];

