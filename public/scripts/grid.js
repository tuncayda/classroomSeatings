/**
 * x coordinate and y coordinate
 * h is heigt
 * w is width
 */


class Student {
  constructor(firstName, lastName, x, y, h = 1, w = 1) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.content = firstName;
  }

  getFirstName() { return this.firstName }
  getLastName()  { return this.lastName }
  getX() { return this.x }
  getY() { return this.y }
  getContent()   { return this.content }
}

function fillClass(studentList, seatsTemplateList) {
  let index = 0;
  let classList = [];

  studentList.forEach(student => {
    student.x = seatsTemplateList[index][0];
    student.y = seatsTemplateList[index][1];
    classList.push(student);
    index++;
  });

  return classList;
}

let students = [
  new Student('Tuncay', 'Dagdelen'),
  new Student('Keziban', 'Colak'),
  new Student('Turgay', 'Dagdelen'),
  new Student('Mustafa', 'Colak')
];

let seats = [
  [4,0],
  [8,0],
  [2,0],
  [2,1],
  [0,4],
  [1,0],
  [1,1],
  [1,2],
  [1,3],
  [1,4]
];

const serializedData = fillClass(students, seats);

let options = {
  margin: 4,
  float: true
}

let grid = GridStack.init(options);

grid.enableResize(false);
grid.cellHeight(grid.cellWidth() * .8);
grid.load(serializedData);


let saved;
function saveLayout() {
  saved = grid.save();
}

function loadLayout() {
  grid.load(saved);
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}


// Serialized example
// [{ x: 1, y:0, h: 1, w: 1, content: 'Kezban' },...]



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

let klass7a = new SchoolClass(4711,"Klass 7A",[new Student("Tuncay", "Dagdelen"), new Student("Keziban", "Colak")], seats);
let klass7b = new SchoolClass(1234,"Klass 7B",[new Student("Tuncay", "Dagdelen"), new Student("Keziban", "Colak")], seats);
let klass7c = new SchoolClass(4321,"Klass 7C",[new Student("Tuncay", "Dagdelen"), new Student("Keziban", "Colak")], seats);


// // Find the right class and append the new student to the list into the array 'students'
// console.log(myclass)


function addToClass(schoolClass) {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let student = new Student(firstname, lastname);
}

localStorage.setItem('db', JSON.stringify([klass7a, klass7b, klass7c]));

function saveToLocalStorage(student, schoolClassId) {
  
  // Parse localStorage and get the db list
  let db = JSON.parse(localStorage.getItem('db'));
  
  // Find the right class in the db list and add student
  db.forEach(schoolClass => {
    if(schoolClass.id == schoolClassId) {
      schoolClass.students.push(student);
      return;
    }
  })

  // Push the db object to localStorage
  localStorage.setItem('db', JSON.stringify(db));
  
}
saveToLocalStorage(new Student('Hanna', 'Davidsson'), 4711);
saveToLocalStorage(new Student('Lorem', 'Ipsum'), 1234);
saveToLocalStorage(new Student('Jackass', 'ass'), 4321);
console.log(JSON.parse(localStorage.getItem('db')))
