import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { PersonaTO } from '../../interfaces/personasto.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url: string = "http://127.0.0.1:1600/api/personas"; //Ruta de conexión

  constructor(private _http:HttpClient) { }

    listarPersonas() : Observable<PersonaTO[]>{ //Devuelve un objeto PersonaTO[]
      return this._http.get<PersonaTO[]>(this.url);
    }

    guardarPersonas(persona: PersonaTO) : Observable<PersonaTO>{ //Devuelve un String
      return this._http.post<PersonaTO>(this.url,persona);
    }

    actualizarPersonas(persona: PersonaTO) : Observable<PersonaTO>{ //Devuelve un String
      return this._http.put<PersonaTO>(this.url,persona);
    }

    eliminarPersonas(id: string) : Observable<String>{ //Devuelve un String
      return this._http.delete<String>(this.url + "/" + id);
    }

}

