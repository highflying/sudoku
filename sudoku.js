
var grid = [
  [ 0, 9, 0, 0, 0, 0, 8, 3, 0 ],
  [ 3, 0, 4, 0, 1, 0, 0, 2, 0 ],
  [ 0, 0, 0, 0, 0, 9, 0, 1, 4 ],
  [ 0, 0, 9, 0, 0, 1, 0, 0, 3 ],
  [ 0, 0, 0, 2, 7, 4, 0, 0, 0 ],
  [ 6, 0, 0, 9, 0, 0, 2, 0, 0 ],
  [ 9, 2, 0, 7, 0, 0, 0, 0, 0 ],
  [ 0, 6, 0, 0, 3, 0, 9, 0, 1 ],
  [ 0, 5, 3, 0, 0, 0, 0, 6, 0 ],

 ];

console.log(grid);

var inProgress = [];

for( var x = 0;x < 9;x++ ) {
  inProgress[x] = [];
  for( var y = 0;y < 9;y++ ) {
    inProgress[x][y] = {
      value:   grid[x][y],
      options: [1,2,3,4,5,6,7,8,9],
    };
    if(grid[x][y]) {
      inProgress[x][y].options = [];
    }
  }
//  console.log(inProgress[x]);
}

//console.log(inProgress);
