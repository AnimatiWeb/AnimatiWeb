import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(private loginService:LoginService, private router:Router){}
  ngOnInit(): void {
    
  }

  logout():void {
    this.loginService.logout();
    this.router.navigate(['/']);
  
  }

}
