import { Component, OnInit } from '@angular/core';
import { ServicioPruebaService } from 'core/servicio-prueba/servicio-prueba.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    public dataProductos :any;
    constructor(private serviceProductos : ServicioPruebaService) { }

    ngOnInit() {
        this.getProductos();
    }
    //Funcion para consumir api de todos los productos
    getProductos(){
        
          this.serviceProductos.getProductos().toPromise().then(
            response => {   
                console.log(response.length);
                if(response.length != 0){
                  this.dataProductos = response;
                }
            }
          ).catch(
            error => {
              console.log("error:", error);
            }
          )
    }
    //Funcion para consumir api por categoria
    obtenerProductoCategoria(type:any){
        let data = {
            'filter' : type
        }
        this.serviceProductos.getProductosCategoria(data).toPromise().then(
            response => {   
                console.log(response.length);
                if(response.length != 0){
                  this.dataProductos = response;
                }
            }
          ).catch(
            error => {
              console.log("error:", error);
            }
          )
    }
}
