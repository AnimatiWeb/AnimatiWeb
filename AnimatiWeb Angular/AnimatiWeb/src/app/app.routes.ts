import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { CubecraftCityComponent } from './cubecraft-city/cubecraft-city.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistroDeUsuariosComponent } from './registro-de-usuarios/registro-de-usuarios.component';
import { SetStickersComponent } from './set-stickers/set-stickers.component';
import { SeparadoresComponent } from './separadores/separadores.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SamplepageComponent } from './samplepage/samplepage.component';

import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { QuienesSomosComponent } from './pages/auth/quienes-somos/quienes-somos.component';

export const routes: Routes = [
    {path:"gallery", component:GalleryComponent},
    {path:"contacto", component:ContactoComponentComponent},
    {path:"cubecraft", component:CubecraftCityComponent},
    {path:"registroUsuarios", component:RegistroDeUsuariosComponent},
    {path:'login', component:LoginComponent},
    {path:'separadores', component:SeparadoresComponent},
    {path:'set-stickers', component:SetStickersComponent},
    {path:'', component:PaginaPrincipalComponent},
    {path:'Quien-somos', component:QuienesSomosComponent},
    {path: '', title: 'Dashboard Page', component: DashboardComponent},
    {path: 'samplepage', title: 'Sample Page', component: SamplepageComponent},
    
    {path:"", redirectTo:"/", pathMatch:"full"}
];
