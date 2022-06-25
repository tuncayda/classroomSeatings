import { Student } from './student.js';

class SchoolClass {
    constructor(id, name, students, seatingTemplate) {
        this.id = id;
        this.name = name;
        this.seatingTemplate = seatingTemplate;
        this.students = students;
    }

    addStudent(student) {
        this.students.push(student);
    }
}

function addToClass(firstname, lastname, schoolClassID) {
    // Find the input html elements
    // let firstname = document.getElementById("firstname").value;
    // let lastname = document.getElementById("lastname").value;

    // Create student and push to localStorage
    saveToLocalStorage(new Student(firstname, lastname), schoolClassID);
}

function saveToLocalStorage(student, schoolClassId) {
    // Parse localStorage and get the db list
    let db = JSON.parse(localStorage.getItem('db'));

    // Find the right class in the db list and add student
    db.forEach(schoolClass => {
        if (schoolClass.id == schoolClassId) {
            schoolClass.students.push(student);
            return;
        }
    })

    // Push the db object to localStorage
    localStorage.setItem('db', JSON.stringify(db));
    // console.log(JSON.parse(localStorage.getItem('db')));
}

function addClassroom(schoolClassName) {
    // Get all the classes from localStorage
    let db = JSON.parse(localStorage.getItem('db'));
    if (db === null) {
        db = [];
    }

    // Add the new class with date as unique id
    let schoolClassID = Date.now();
    db.push(new SchoolClass(schoolClassID, schoolClassName, [], []));

    // Push the updated classlist to localStorage
    localStorage.setItem('db', JSON.stringify(db));

    // console.log(JSON.parse(localStorage.getItem('db')));
}

export { SchoolClass, addToClass, addClassroom };