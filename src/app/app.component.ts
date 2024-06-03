import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LLaverosComponent } from './LLaveros/llaveros.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-LLaveros',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterOutlet, LLaverosComponent]
   })
export class AppComponent {
  title = 'AnimatiWeb';
}


