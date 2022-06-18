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

// let klass7a = new SchoolClass(4711,"Klass 7A",[new Student("Tuncay", "Dagdelen"), new Student("Keziban", "Colak")], seats);
// let klass7b = new SchoolClass(1234,"Klass 7B",[new Student("Tuncay", "Dagdelen"), new Student("Keziban", "Colak")], seats);
// let klass7c = new SchoolClass(4321,"Klass 7C",[new Student("Tuncay", "Dagdelen"), new Student("Keziban", "Colak")], seats);
// localStorage.setItem('db', JSON.stringify([klass7a, klass7b, klass7c]));


function addToClass(schoolClassID) {
  // Find the input html elements
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;

  // Create student and push to localStorage
  saveToLocalStorage(new Student(firstname, lastname), schoolClassID);
}

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
  console.log(JSON.parse(localStorage.getItem('db')));
}

function addClassroom() {
  // Find the input html element
  let schoolClassName = document.getElementById("schoolClass").value;

  // Get all the classes from localStorage
  let db = JSON.parse(localStorage.getItem('db'));
  
  // Add the new class with date as unique id
  let schoolClassID = Date.now();
  db.push(new SchoolClass(schoolClassID, schoolClassName, [], []));

  // Push the updated classlist to localStorage
  localStorage.setItem('db', JSON.stringify(db));

  console.log(JSON.parse(localStorage.getItem('db')));
}

// Hamburger menu icon
const hamburgerBtn = document.querySelector('.hamburger-btn');
const modal = document.querySelector('.modal');
hamburgerBtn.addEventListener('click', () => {
  modal.style = 'display: block'
});
window.addEventListener('click', e => {
  if(e.target == modal) {
    modal.style = 'display: none'
  }
})

let addClassButton = document.querySelector('.modal-content-addClassButton');
addClassButton.addEventListener('click', () => {
  
  // Show input field and action buttons
  let inputField = document.querySelector('.modal-content-actions');
  addClassButton.style.display = 'none';
  inputField.style.display = 'block';

  // Clear input field
  let input = document.querySelector('.modal-content-actions-inputSchoolClassName');
  input.addEventListener('focusin', () => {
    input.value = ' ';
  });

  // Cancel
  document.querySelector('.modal-content-actions-cancel').addEventListener('click', () => {
    addClassButton.style.display = 'block';
    input.value = 'Klassnamn';
    inputField.style.display = 'none';
  });
});

