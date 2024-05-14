import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { CubecraftCityComponent } from './cubecraft-city/cubecraft-city.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistroDeUsuariosComponent } from './registro-de-usuarios/registro-de-usuarios.component';
import { SetStickersComponent } from './set-stickers/set-stickers.component';
import { SeparadoresComponent } from './separadores/separadores.component';

export const routes: Routes = [
    {path:"gallery", component:GalleryComponent},
    {path:"contacto", component:ContactoComponentComponent},
    {path:"cubecraft", component:CubecraftCityComponent},
    {path:"registroUsuarios", component:RegistroDeUsuariosComponent},
    {path:'login', component:LoginComponent},
    {path:'separadores', component:SeparadoresComponent},
    {path:'set-stickers', component:SetStickersComponent},
    
    {path:"", redirectTo:"/home", pathMatch:"full"}
]


