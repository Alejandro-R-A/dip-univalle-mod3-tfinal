import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { EstudianteService } from '../../../services/estudiante.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nuevo-usuario',
  standalone: true,
  imports: [NavbarComponent, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})

export class NuevoUsuarioComponent {
  form = new FormGroup({

    id: new FormControl('',[Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]+$")]),
    nombre: new FormControl('',[Validators.required, Validators.minLength(4), Validators.pattern("^[a-zA-Z]+$")]),
    apellido: new FormControl('',[Validators.required, Validators.minLength(4), Validators.pattern("^[a-zA-Z]+$")]),
    edad: new FormControl('',[Validators.required, Validators.minLength(2), Validators.pattern("^[0-9]+$")]),
    carrera: new FormControl('',[Validators.required, Validators.minLength(5)]),
  });
  constructor(private estudianteService: EstudianteService, private router: Router) {}
  saveNew()
  {
    this.estudianteService.createEstudiante(this.form.value).subscribe(estudiante => console.log(estudiante));
    this.router.navigate(['/dashboard']);
  }
  cancelar() {
    this.router.navigate(['/dashboard']);
}
}
