
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

for( var row = 0;row < 9;row++ ) {
  inProgress[row] = [];
  for( var col = 0;col < 9;col++ ) {
    inProgress[row][col] = {
      value:   grid[row][col],
      options: [1,2,3,4,5,6,7,8,9],
    };
    if(grid[row][col]) {
      inProgress[row][col].options = [];
    }
  }
//  console.log(inProgress[row]);
}

//console.log(inProgress);


checkColumns(inProgress);

function checkColumns(data) {
//  for( var row = 0; row< 9 
}

