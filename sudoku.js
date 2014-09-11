
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


inProgress = checkColumns(inProgress);

//console.log(inProgress);

function checkColumns(data) {
  for( var col = 0; col < 9; col++ ) {
    data = checkColumn(col, data);
    console.log(data[col]);
  }

  return data;
}

function checkColumn(col, data) {
  var found = [];
  for( var row = 0; row < 9; row++ ) {
    if ( data[row][col].value ) {
      found[found.length] = data[row][col].value;
    }
  }

  console.log(found);

  for( var row = 0; row < 9; row++ ) {
    if ( ! data[row][col].value ) {
      for( var i = 0; i < found.length; i++) {
        var index = data[row][col].options.indexOf(found[i]);
        if( index > -1 ) {
            data[row][col].options.splice(index,1);
        }
      }
    }
  }

  return data;
}

