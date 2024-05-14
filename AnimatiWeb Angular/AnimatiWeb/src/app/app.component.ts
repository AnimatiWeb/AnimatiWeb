import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './pages/auth/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, GalleryComponent, FooterComponent, LoginComponent,],


  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnimatiWeb';
}
