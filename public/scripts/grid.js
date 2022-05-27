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

function loadClass(studentList, seatsTemplateList) {
  let index = 0;

  studentList.forEach(student => {
    student.x = seatsTemplateList[index][0];
    student.y = seatsTemplateList[index][1];
    index++;
  });

  return studentList;
}

let students = [
  new Student('Tuncay', 'Dagdelen'),
  new Student('Keziban', 'Colak'),
  new Student('Turgay', 'Dagdelen'),
  new Student('Mustafa', 'Colak')
];

let seats = [
  [0,0],
  [0,1],
  [2,0],
  [2,1],
  [0,4],
  [1,0],
  [1,1],
  [1,2],
  [1,3],
  [1,4]
];

const serializedData = loadClass(students, seats);;

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