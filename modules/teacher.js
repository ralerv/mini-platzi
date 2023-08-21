export default class Teacher {
    constructor({
      id,
      name,
      speciality = "none",
    }) {
      this.id = id;
      this.name = name;
      this.speciality = speciality;
    }
  };