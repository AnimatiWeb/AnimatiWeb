import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
=======
import { GalleryComponent } from './gallery/gallery.component';
>>>>>>> Audicio-Nicolas

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnimatiWeb';
}
