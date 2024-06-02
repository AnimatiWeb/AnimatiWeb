import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Route } from '@angular/router';
import { User } from '../../../models/user';

@Component({
  selector: 'app-registro-de-usuarios',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro-de-usuarios.component.html',
  styleUrl: './registro-de-usuarios.component.css'
})

export class RegistroDeUsuariosComponent {
  form:FormGroup;
  usuarios: User = new User();

  constructor(private formBuilder: FormBuilder, private authService:AuthService, private router:Route){
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
    event.preventDefault;
    if (this.form.valid)
    {
      console.log("Enviando al servidor.")
      this.authService.createUser(this.form.value as User).subscribe(
        data => {
          console.log(data.id);
          console.log(this.form.value as User)
            if (data.id>0){
              alert('Se ha Registrado Correctamente. Ahora Puede Inciciar Sesion.')
              this.router.navigate(['/login'])
            }
        }
      )
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

