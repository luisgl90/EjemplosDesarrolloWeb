export interface IPersonaTO{
  _id: String;
  nombres: String;
  apellidos: String;
  documento: String;
  genero: String;
  correo: String;
}

export class PersonaTO implements IPersonaTO{
  public _id = "";
  public nombres = "";
  public apellidos = "";
  public documento = "";
  public genero = "";
  public correo = "";
}
