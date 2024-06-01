import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { NavComponent } from "./shared/nav/nav.component";
import { PaginaPrincipalComponent } from "./pages/pagina-principal/pagina-principal.component";
import { CommonModule } from '@angular/common';
import { QuienesSomosComponent } from './pages/auth/quienes-somos/quienes-somos.component';


@Component({
<<<<<<< HEAD
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, QuienesSomosComponent, GalleryComponent, FooterComponent, LoginComponent, NavComponent, PaginaPrincipalComponent, RouterOutlet]
=======
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent, RouterOutlet],


  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
>>>>>>> developer
})
export class AppComponent {
  title = 'AnimatiWeb';
}
