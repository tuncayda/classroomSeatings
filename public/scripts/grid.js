import { Student, fillClass } from './student.js';
import { addModalButtons } from './modal.js';
import { showModal } from './navbar.js';

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

// Serialized example [{ x: 1, y:0, h: 1, w: 1, content: 'Kezban' },...]
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


addModalButtons();
showModal();

console.log(JSON.parse(localStorage.getItem('db')));