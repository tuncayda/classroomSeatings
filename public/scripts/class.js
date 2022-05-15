/**
 * A school class
 */

let Student = require('./student.js');

class SchoolClass {
    constructor(className, students) {
        this.className = className;
        this.students = students;
    }
}

let student1 = new Student('tuncay', 'dagdelen');
let student2 = new Student('keziban', 'colak');
let student3 = new Student('turgay', 'dagdelen');
let student4 = new Student('murre', 'colak');

let students = [student1, student2, student3, student4];

let class7a = new SchoolClass('Klass 7A', students);
console.log(class7a);