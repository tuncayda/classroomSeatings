let options = {
    margin: 4,
    float: true
  }

const serializedData = [
{ x: 1, y:0, h: 1, w: 1, content: 'Kezban' },
{ x: 1, y:1, h: 1, w: 1, content: 'Kezban' },
{ x: 1, y:2, h: 1, w: 1, content: 'Kezban' },
{ x: 1, y:3, h: 1, w: 1, content: 'Kezban' },

{ x: 2, y:0, h: 1, w: 1, content: 'Kezban' },
{ x: 2, y:1, h: 1, w: 1, content: 'Kezban' },
{ x: 2, y:2, h: 1, w: 1, content: 'Kezban' },
{ x: 2, y:3, h: 1, w: 1, content: 'Kezban' },

{ x: 4, y:0, h: 1, w: 1, content: 'Kezban' },
{ x: 4, y:1, h: 1, w: 1, content: 'Kezban' },
{ x: 4, y:2, h: 1, w: 1, content: 'Kezban' },
{ x: 4, y:3, h: 1, w: 1, content: 'Kezban' },
];

let grid = GridStack.init(options);

grid.load(serializedData);
grid.enableResize(false);
grid.cellHeight(grid.cellWidth() * .8);