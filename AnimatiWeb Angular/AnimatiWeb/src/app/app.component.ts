import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { NavComponent } from "./shared/nav/nav.component";
import { PaginaPrincipalComponent } from "./pagina-principal/pagina-principal.component";
import { CommonModule } from '@angular/common';
import { QuienesSomosComponent } from './pages/auth/quienes-somos/quienes-somos.component';
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, QuienesSomosComponent, GalleryComponent, FooterComponent, LoginComponent, NavComponent, PaginaPrincipalComponent, RouterOutlet, RouterLink, HeaderComponent]
})
export class AppComponent {
  title = 'AnimatiWeb';
}
