import Teacher from'./modules/teacher.js'
import Course from'./modules/courses.js'
import Lesson from'./modules/lessons.js'
import LearningPath from'./modules/LearningPaths.js'
import Student from'./modules/students.js';
import {PlatziClass} from './modules/platziclass.js';

// PlatziClass
const clase67 = new PlatziClass({
    name: "JavaScript: orientado a objetos, basado en prototipos",
    videoID: "wertyuio;p87htreghtyuioouyjtrh",
  });
  

// ESCUELAS

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoPrograBásica,
        cursoDefinitivoHTML,
        cursoPracticoHTML
    ]
})

const escuelaVideogames = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
        cursoUnity,
        cursoUnreal
    ]
})

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoDataBus,
        cursoDataViz
    ]
})

// ESTUDIANTES

const juan1 = new Student({
    name: "Juan DC",
    email: "juandc",
    username: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVideogames
    ],
})

const miguelito1 = new Student({
    name: "Miguelito",
    email: "Miguelitofeliz",
    username: "Miguelito@Miguelito.com",
    twitter: "Miguelito_Feliz",
    learningPaths: [
        escuelaData,
        escuelaWeb
    ],
})

// CURSOS

const cursoPrograBásica = new Course ({
    name: "Curso Gratis de Programación Básica",
})

const cursoDefinitivoHTML = new Course ({
    name: "Curso Definitivo de HTML y CSS",
})

const cursoPracticoHTML = new Course ({
    name: "Curso Práctico de HTML y CSS",
})

const cursoUnity = new Course ({
    name: "Curso de Unity",
})

const cursoUnreal = new Course ({
    name: "Curso de Unreal",
})

const cursoDataBus = new Course ({
    name: "Curso Data Business",
})

const cursoDataViz = new Course ({
    name: "Curso Visualización de Data",
})