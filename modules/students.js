class Student {
    constructor({
      id,
      name,
      email,
      username,
      points = 0,
      twitter = undefined,
      instagram = undefined,
      facebook = undefined,
      approvedCourses = [],
      learningPaths = [],
    }) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.username = username;
      this.points = points;
      this.approvedCourses = approvedCourses;
      this.learningPaths = learningPaths;
      this.socialMedia = {
        twitter,
        instagram,
        facebook,
      };
    }
  };

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse){
    if(newCourse.isFree){
      this.approvedCourses.push(newCourse)
    } else{
      console.log(`Lo siento ${this.name}, no puedes tomar este curso`)
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse){
    if(newCourse.lang !== "english"){
      this.approvedCourses.push(newCourse)
    } else{
      console.log(`Lo siento ${this.name}, no puedes tomar este curso`)
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse){
    this.approvedCourses.push(newCourse)
    }
}

export {Student,FreeStudent,BasicStudent,ExpertStudent}