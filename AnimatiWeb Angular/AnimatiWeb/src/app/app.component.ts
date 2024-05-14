import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { NavComponent } from "./shared/nav/nav.component";
import { PaginaPrincipalComponent } from "./pagina-principal/pagina-principal.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, GalleryComponent, FooterComponent, LoginComponent, NavComponent, PaginaPrincipalComponent, RouterOutlet]
})
export class AppComponent {
  title = 'AnimatiWeb';
}
