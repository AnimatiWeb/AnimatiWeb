import { Routes } from '@angular/router';
import { SetStickersComponent } from './set-stickers/set-stickers.component';
import { SeparadoresComponent } from './separadores/separadores.component';


const routes: Routes = [
    { path: 'set-stikers', component: SetStickersComponent },
    { path: 'separadores', component: SeparadoresComponent }
];export default routes;

