import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EstudianteService {
  private apiUrl = 'http://localhost:3000'; // Cambia esto por la URL de tu API

  constructor(private http: HttpClient) {}

  
getDatos(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/estudiante`);
}

createEstudiante(estudiante: any):Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/estudiante`, estudiante);
}

updateEstudiante(id: number, estudiante: any) {
  return this.http.put(`${this.apiUrl}/estudiante/${id}`, estudiante);
}

deleteEstudiante(id: number) {
  return this.http.delete(`${this.apiUrl}/estudiante/${id}`);
}


}
