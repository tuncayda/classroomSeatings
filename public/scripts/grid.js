const Student = require('./student');

let students = [
  new Student('Tuncay', 'Dagdelen'),
  new Student('Kezban', 'Colak'),
  new Student('Mustafa', 'Colak'),
  new Student('Turgay', 'Dagdelen')
];

// TODO: currently there can be more students than total seats eg rows+columns => add a check or make some constraints
// If you add more rows and columns than number of students, the grid will be populated w "undefined" => cannot get firstname
// of undefined
function createClassroomLayout(rows, columns, emptySeatPositions, students) {
  // Create array
  let arr = new Array(rows);
  for(let i = 0; i < rows; i++) {
    arr[i] = new Array(columns);
  }

  // Fill grid with people or leave empty seats
  let i = 0;
  for(let x = 0; x < rows; x++) {
    for(let y = 0; y < columns; y++) {
      if(emptySeatPositions.includes((x,y))) {
        continue;
      } else {
        arr[x][y] = students[i];
        i++;
      }
    }
  }
  return arr;
}

console.log(createClassroomLayout(2,5,[], students));
// console.log(createClassroomLayout(2,5,[(2,1), (3,2), (1,1), (4,4)], students));

// let options = {
//     margin: 4,
//     float: true
//   }

// const serializedData = [
// { x: 1, y:0, h: 1, w: 1, content: 'Kezban' },
// { x: 1, y:1, h: 1, w: 1, content: 'Kezban' },
// { x: 1, y:2, h: 1, w: 1, content: 'Kezban' },
// { x: 1, y:3, h: 1, w: 1, content: 'Kezban' },

// { x: 2, y:0, h: 1, w: 1, content: 'Kezban' },
// { x: 2, y:1, h: 1, w: 1, content: 'Kezban' },
// { x: 2, y:2, h: 1, w: 1, content: 'Kezban' },
// { x: 2, y:3, h: 1, w: 1, content: 'Kezban' },

// { x: 4, y:0, h: 1, w: 1, content: 'Kezban' },
// { x: 4, y:1, h: 1, w: 1, content: 'Kezban' },
// { x: 4, y:2, h: 1, w: 1, content: 'Kezban' },
// { x: 4, y:3, h: 1, w: 1, content: 'Kezban' },
// ];

// let grid = GridStack.init(options);

// grid.load(serializedData);
// grid.enableResize(false);
// grid.cellHeight(grid.cellWidth() * .8);