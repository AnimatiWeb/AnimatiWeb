import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
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

  constructor(private formBuilder: FormBuilder, private authService:AuthService, private router:Router){
    this.form = this.formBuilder.group(
      {
        username:['',[Validators.required],[]],
        first_name:['',[Validators.required,]],
        last_name:['',[Validators.required,]],
        email:['',[Validators.required, Validators.email],[]],
        password:['',[Validators.required,Validators.minLength(4)],[]],
        password2:['',[Validators.required,Validators.minLength(4)],[]],
        condiciones:[false,[Validators.requiredTrue],[]]
      }
    )
  }
  
  onEnviar(){
    
    if (this.form.valid)
    {
      console.log("Enviando al servidor.")
      this.authService.createUser(this.form.value as User).subscribe(
        data => {
          console.log(data.id);
          console.log(this.form.value as User)
            if (data.id>0){
              alert('Se ha Registrado Correctamente. Ahora Puede Inciciar Sesion.')
              this.router.navigate(['/'])
            }
        }
      )
    }
    else
    {
    this.form.markAllAsTouched();
    }
  }

  
}

