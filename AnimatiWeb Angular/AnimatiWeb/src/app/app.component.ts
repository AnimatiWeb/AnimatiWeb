import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
=======
import { LoginComponent } from './pages/auth/login/login.component';
>>>>>>> JonJonathanArias

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet],
=======
  imports: [LoginComponent, RouterOutlet],
>>>>>>> JonJonathanArias
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnimatiWeb';
}
