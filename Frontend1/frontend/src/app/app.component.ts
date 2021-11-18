import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Luis Eduardo';
  apellido = 'García Linares';
  titulo = 'Ingeniero electrónico';
  posgrado = 'Magíster en ingeniería con énfasis en automática'
}
