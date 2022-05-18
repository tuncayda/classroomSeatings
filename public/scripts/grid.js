let options = {
    margin: 4
  }

const serializedData = [
{ w: 2, h: 1, w: 1, content: 'Kezban' },
{ w: 2, h: 1, w: 1, content: 'Tuncay' },
{ w: 2, h: 1, w: 1, content: 'Kezban' },
{ w: 2, h: 1, w: 1, content: 'Tuncay' },
{ w: 2, h: 1, w: 1, content: 'Daniella'},
{ w: 2, h: 1, w: 1, content: 'Lorem' },
{ w: 2, h: 1, w: 1, content: 'Tuncay' },
{ w: 2, h: 1, w: 1, content: 'Kezban' },
{ w: 2, h: 1, w: 1, content: 'Tuncay' },
{ w: 2, h: 1, w: 1, content: 'Kezban' },
{ w: 2, h: 1, w: 1, content: 'Tuncay' },
{ w: 2, h: 1, w: 1, content: 'Kezban' },
{ w: 2, h: 1, w: 1, content: 'Tuncay' },
{ w: 2, h: 1, w: 1, content: 'Kezban' },
{ w: 2, h: 1, w: 1, content: 'Tuncay' },
{ w: 2, h: 1, w: 1, content: 'Murre' },
];

let grid = GridStack.init(options);

grid.load(serializedData);
grid.enableResize(false);
grid.cellHeight(grid.cellWidth() * .8);