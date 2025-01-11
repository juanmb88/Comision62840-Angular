import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: false,
  
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

loginForms:FormGroup; //defino propiedad formGroup, clase q representa grupo de controles.(inputs)

  constructor(private fb:FormBuilder){
    this.loginForms =this.fb.group({
      email:[null,[Validators.required,Validators.email]],//definimos un array xq al usar form group cada control adquiere argumentos, el primer valor es por defecto(myemail@com)
      password:[],
      checkBox:true
    })
  }
}
