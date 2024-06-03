import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (!this.isLoggedIn()) {
      this.router.navigate(['/registro']);
      return false;
    }
    return true;
  }

  private isLoggedIn(): boolean {
    // Aquí debes implementar la lógica para verificar si el usuario está logueado
    // Por ejemplo, verificar si hay un token válido en localStorage
    return !!localStorage.getItem('token');
  }
}
