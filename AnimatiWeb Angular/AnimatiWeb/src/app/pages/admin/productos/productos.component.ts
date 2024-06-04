import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../../services/productoServices/producto.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductsComponent implements OnInit {
  
  panelLateralVisible:boolean = false;

  objetoProducto:any ={
    "Codigo_Producto": 0,
    "Id_Categoria": "",
    "Nombre_Producto": "",
    "Imagen": "",
    "Precio": "",
    "Stock": 0
  };

  listaCategorias: any [] = [];
  listaProductos: any [] = [];

  constructor(private productoServicio:ProductService) {  }

  ngOnInit(): void {
    this.getProductos();
    this.getAllCategorias();
  }

  getAllCategorias(){
    this.productoServicio.getAllCategorias().subscribe((res:any) => {
      this.listaCategorias = res.data;

    })
  }

  getProductos(){
    this.productoServicio.getAllProductos().subscribe((res:any) => {
      this.listaProductos = res.data;

    })
  }

  enviarProducto(){
    this.productoServicio.gurdarProducto(this.objetoProducto).subscribe((res:any) =>{
      debugger;
      if(res.result){
        alert('producto creado')
        this.getProductos();
      }else{
        alert(res.message)
      }
    })
  }

  onEditarProducto(item: any){
    this.objetoProducto = item;
    this.abrirPanelNuevoProducto();
  }

  onEliminarProdicto(item: any){
    const eliminar = confirm('¿Estas seguro de eliminar el producto?')
    if(eliminar){
      this.productoServicio.eliminarProducto(item.Codigo_Producto).subscribe((res:any) =>{
        debugger;
        if(res.result){
          alert('producto eliminado')
          this.getProductos();
        }else{
          alert(res.message)
        }
      })      
    }
  }

  actualizarProducto(){
    this.productoServicio.gurdarProducto(this.objetoProducto).subscribe((res:any) =>{
      debugger;
      if(res.result){
        alert('producto actualizado')
        this.getProductos();
      }else{
        alert(res.message)
      }
    })
  }
  abrirPanelNuevoProducto(){
    this.panelLateralVisible = true;
  }
  cerrarPanelNuevoProducto(){
    this.panelLateralVisible = false;
  }
  
}
