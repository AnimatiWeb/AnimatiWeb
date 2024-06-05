import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject, map, retry, take, takeLast } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class ProductService {
  getAllCategorias: any;

  constructor(private http: HttpClient) { }

  getAllCategoria():  Observable<any[]>{
    return this.http.get<any[]>(environment.API_END_POINT + environment.METHODS.GET_ALL_CATEGORY);
    
  }

  getAllProductos(){
    return this.http.get(environment.API_END_POINT + environment.METHODS.GET_ALL_PRODUCT);
    
  }
  

  gurdarProducto(obj: any){
    return this.http.post(environment.API_END_POINT + environment.METHODS.CREATE_PRODUCT, obj);
  }

  actulizarProducto(obj: any){
    return this.http.put(environment.API_END_POINT + environment.METHODS.UPDATE_PRODUCT, obj);
  }
  eliminarProducto(obj: any){
    return this.http.delete(environment.API_END_POINT + environment.METHODS.DELETE_PRODUCT, obj);
  }
}
