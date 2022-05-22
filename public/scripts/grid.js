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
  getLastName() { return this.lastName }
  getX() { return this.x }
  getY() { return this.y }
  getContent() { return this.content }
}

//TODO: skapa templates som automatisk placerar ut studenter på sådana positioner att det uppstår "empty seats", utan 
// att behöva specificera vart  empty seats ska vara...Kom ihåg; där det inte placeras en widget så kommer det fyllas
// av empty seat.
let students = [
  new Student('Tuncay', 'Dagdelen', 1, 1),
  new Student('Keziban', 'Colak', 2, 1),
  new Student('Turgay', 'Dagdelen', 2, 0),
  new Student('Mustafa', 'Colak', 3, 0),
];

const serializedData = students;

let options = {
  margin: 4,
  float: true
}

let grid = GridStack.init(options);

grid.enableResize(false);
grid.cellHeight(grid.cellWidth() * .8);
grid.load(serializedData);

// Serialized example
// [{ x: 1, y:0, h: 1, w: 1, content: 'Kezban' },...]
