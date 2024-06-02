import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-de-usuarios',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro-de-usuarios.component.html',
  styleUrl: './registro-de-usuarios.component.css'
})

export class RegistroDeUsuariosComponent {
  form!:FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group(
      {
        usuario:['',[Validators.required],[]],
        telefono:['',[Validators.required,Validators.pattern('[0-9]{10}')],[]],
        email:['',[Validators.required, Validators.email],[]],
        password:['',[Validators.required,Validators.minLength(6)],[]],
        condiciones:[false,[Validators.requiredTrue],[]]
      }
    )
}
onEnviar(event:Event){
  console.log(this.form.value)
  event.preventDefault;
if (this.form.valid)
{
alert ("Enviar al servidor...")
}
else
{
this.form.markAllAsTouched();
}
}

get usuario(){
  return this.form.get("usuario");
}
get telefono(){
  return this.form.get("telefono");
}
get email(){
  return this.form.get("email");
}
get password(){
  return this.form.get("password");
}
get condiciones(){
  return this.form.get("condiciones")
}

}

