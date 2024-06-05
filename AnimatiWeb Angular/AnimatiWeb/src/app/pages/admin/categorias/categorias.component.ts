import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/productoServices/producto.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit {
  productos$: Observable<any> ;
  
  
  constructor(private productSrv: ProductService) {
    this.productos$ = this.productSrv.getAllCategoria().pipe(
      map((item:any) => {
        return item.data;
      })
    );
  }

  getAllCategorias(){

  }
  ngOnInit(): void {
    
  }

  
}

