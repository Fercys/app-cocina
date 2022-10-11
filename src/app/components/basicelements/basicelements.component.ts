import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioPruebaService } from 'core/servicio-prueba/servicio-prueba.service';

@Component({
  selector: 'app-basicelements',
  templateUrl: './basicelements.component.html',
  styleUrls: ['./basicelements.component.scss']
})
export class BasicelementsComponent implements OnInit {
    simpleSlider = 40;
    doubleSlider = [20, 60];
    state = true;

    tagItems = ['Minimal', 'Light', 'New', 'Friends'];
    formulario: FormGroup;
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    dropdownList1 = [];
    selectedItems1 = [];
    dropdownSettings1 = {};

    focus;
    focus1;

    constructor(private serviceProductos : ServicioPruebaService) {
      this.formulario = new FormGroup({
        nombre : new FormControl('',[
          Validators.required
        ]),
        apellido : new FormControl('',[
          Validators.required
        ]),
        mail : new FormControl('',[
          Validators.required
        ]),
        telefono : new FormControl('',[
          Validators.required
        ])
       })
     }

    ngOnInit() {
        this.dropdownList = [
                              {"id":1,"itemName":"Roman"},
                              {"id":2,"itemName":"Paris"},
                              {"id":3,"itemName":"Bucharest"},
                              {"id":4,"itemName":"Rome"},
                              {"id":5,"itemName":"New York"},
                              {"id":6,"itemName":"Miami"},
                              {"id":7,"itemName":"Piatra Neamt"},
                              {"id":8,"itemName":"Paris"},
                              {"id":9,"itemName":"Bucharest"},
                              {"id":10,"itemName":"Rome"},
                              {"id":11,"itemName":"New York"},
                              {"id":12,"itemName":"Miami"},
                              {"id":13,"itemName":"Piatra Neamt"}
                            ];
        this.selectedItems = [
                            ];
        this.dropdownSettings = {
                                  singleSelection: false,
                                  text:"Multiple Select",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:""
                                };

        this.dropdownList1 = [
                              {"id":1,"itemName":"Roman"},
                              {"id":2,"itemName":"Paris"},
                              {"id":3,"itemName":"Bucharest"},
                              {"id":4,"itemName":"Rome"},
                              {"id":5,"itemName":"New York"},
                              {"id":6,"itemName":"Miami"},
                              {"id":7,"itemName":"Piatra Neamt"},
                              {"id":8,"itemName":"Paris"},
                              {"id":9,"itemName":"Bucharest"},
                              {"id":10,"itemName":"Rome"},
                              {"id":11,"itemName":"New York"},
                              {"id":12,"itemName":"Miami"},
                              {"id":13,"itemName":"Piatra Neamt"}
                            ];
        this.selectedItems1 = [
                            ];
        this.dropdownSettings1 = {
                                  singleSelection: true,
                                  text:"Single Select",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:""
                                };
    }
    onItemSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items: any){
        console.log(items);
    }
    onDeSelectAll(items: any){
        console.log(items);
    }

    guardarFormulario(){
      console.log(this.formulario.value);
      let data = {
        'firstname' : this.formulario.value.nombre,
        'lastname' : this.formulario.value.apellido,
        'email' : this.formulario.value.mail,
        'phone' : this.formulario.value.telefono
    }
    this.serviceProductos.setFormulario(data).toPromise().then(
        response => {   
            console.log(response);
            if(response.length != 0){

            }
        }
      ).catch(
        error => {
          console.log("error:", error);
        }
      )
    }

}
