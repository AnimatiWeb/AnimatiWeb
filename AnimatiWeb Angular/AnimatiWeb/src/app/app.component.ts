import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SetStickersComponent } from './set-stickers/set-stickers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SetStickersComponent],
  template: '  <app-set-stickers></app-set-stickers>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnimatiWeb';
}
