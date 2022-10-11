import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioPruebaService {
  public url = environment.url;
  private api_productos = this.url+'api/';  //url del nombre del servicio

  constructor(private http: HttpClient) { 

  }
  getProductos() : Observable<any>{  
    return this.http.get(this.api_productos +'articles')
  }
  
  getProductosCategoria(data:any) : Observable<any>{ 
    return this.http.get(this.api_productos +'articles', {params:data})
  }

  
  setFormulario(data: any): Observable<any>{ 
    return this.http.post(this.api_productos +'newsletter',data)
  }

}
