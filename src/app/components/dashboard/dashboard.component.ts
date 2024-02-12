import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { EstudianteService } from '../../services/estudiante.service';

export interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  edad: string;
  carrera: string
}

// const estudiantes: Estudiante[] = [
//   {id: 1,nombre: "Paola", apellido: "Lopez", edad: "50", carrera: "Ing. de Sistemas"},
//   {id: 1,nombre: "Paola", apellido: "Lopez", edad: "50", carrera: "Ing. de Sistemas"},
//   {id: 1,nombre: "Paola", apellido: "Lopez", edad: "50", carrera: "Ing. de Sistemas"},
//   {id: 1,nombre: "Paola", apellido: "Lopez", edad: "50", carrera: "Ing. de Sistemas"}
// ];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  estudiantes: Estudiante[] = [];

  nombres_columnas: string[] = ['id','nombre', 'apellido', 'edad', 'carrera'];
  constructor(private estudianteService: EstudianteService) {}


  ngOnInit(): void {
    this.getAllDatos();
  }

  getAllDatos()
  {
    this.estudianteService.getDatos().subscribe(data =>
      {
        this.estudiantes = data;
        //console.log(this.estudiantes);
      })
  }
}
