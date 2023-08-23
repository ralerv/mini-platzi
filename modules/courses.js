export default class Course {
    constructor({
      id,
      name,
      classes = [],
      teacher,
    }){
      this.id = id;
      this._name = name;
      this.classes = classes;
      this.teacher = teacher;
    };

    get name() {
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      if (nuevoNombrecito === "Curso Malito de Programación Básica") {
        console.error("NooN");
      } else {
        this._name = nuevoNombrecito; 
      }
    }

  }