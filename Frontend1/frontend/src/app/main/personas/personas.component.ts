import { Component, OnInit } from '@angular/core';
import { PersonaService } from './service/persona.service';
import { PersonaTO } from '../interfaces/personasto.interface';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(private _personaService: PersonaService) { }

  listaPersonas: PersonaTO[] = new Array<PersonaTO>(); //Crear arreglo de personas
  persona: PersonaTO = new PersonaTO(); //Crear una persona

  ngOnInit(): void { //Se ejecutan cuando inicia la página
    //debugger;
    this.listarPersonas();
  }

  listarPersonas(){
    //debugger;
    this._personaService.listarPersonas().subscribe(
      data => {
        console.log(data);
        this.listaPersonas = data;
      }
    );
  }

  limpiarFormulario(){
    this.persona = new PersonaTO();
  }

  guardarPersonas(){
    if (this.persona._id == "") {
      this._personaService.guardarPersonas(this.persona).subscribe(
        data => {
          console.log(data);
          this.listarPersonas();
          this.limpiarFormulario();
        }
      );
    } else {
      this._personaService.actualizarPersonas(this.persona).subscribe(
        data => {
          console.log(data);
          this.listarPersonas();
          this.limpiarFormulario();
        }
      );
    }
  }

  eliminarPersonas(id: string){
    this._personaService.eliminarPersonas(id).subscribe(
      data => {
        console.log(data);
        this.listarPersonas();
      }
    );
  }

  mostrarPersonas(pPersona: PersonaTO){
    this.persona = pPersona;
  }

}
