import { Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [

    {   path: 'nav',
        component: NavComponent
    },

    {   path: 'footer',
    component: FooterComponent
    }

];
