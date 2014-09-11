
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
inProgress = checkRows(inProgress);
inProgress = checkSquares(inProgress);
inProgress = checkColumns(inProgress);

for( var row = 0; row < 9; row++ ) {
  console.log(inProgress[row]);
}

function checkSquares(data) {
  
  data = checkSquare(data,0,0);
  data = checkSquare(data,3,0);
  data = checkSquare(data,6,0);
  data = checkSquare(data,0,3);
  data = checkSquare(data,3,3);
  data = checkSquare(data,6,3);
  data = checkSquare(data,0,6);
  data = checkSquare(data,3,6);
  data = checkSquare(data,6,6);

  return data;
}

function checkSquare(data,row1,col1) {
  var found = [];

  for( var row = row1; row < row1 + 3; row++ ) {
    for( var col = col1; col < col1 + 3; col++ ) {
      found[found.length] = data[row][col].value;
    }
  }

  for( var row = row1; row < row1 + 3; row++ ) {
    for( var col = col1; col < col1 + 3; col++ ) {
      if ( ! data[row][col].value ) {
        for( var i = 0; i < found.length; i++) {
          var index = data[row][col].options.indexOf(found[i]);
          if( index > -1 ) {
              data[row][col].options.splice(index,1);
          }
        }
      }
    }
  }
  return data;
}

function checkColumns(data) {
  for( var col = 0; col < 9; col++ ) {
    data = checkColumn(col, data);
//    console.log(data[col]);
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

//  console.log(found);

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

  var found2 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

  for( var row = 0; row < 9; row++ ) {
    if ( data[row][col].options.length ) {
      for( var i = 0; i < data[row][col].options.length; i++) {
        var numFound = data[row][col].options[i];
//        console.log(numFound);
        found2[numFound-1] = found2[numFound-1] + 1;
      }
    }
  }
//  console.log(found2);

  for( var i = 0; i < found2.length; i++ ) {
    if(found2[i] == 1 ) {
      for( var row = 0; row < 9; row++ ) {
        var index = data[row][col].options.indexOf(i+1);
        if(index>-1) {
          data[row][col].options = [];
          data[row][col].value = i+1;
        }
      }

    }
  }

  return data;
}

function checkRows(data) {
  for( var row = 0; row < 9; row++ ) {
    data = checkRow(row, data);
  }

  return data;
}

function checkRow(row, data) {
  var found = [];
  for( var col = 0; col < 9; col++ ) {
    if ( data[row][col].value ) {
      found[found.length] = data[row][col].value;
    }
  }

//  console.log(found);

  for( var col = 0; col < 9; col++ ) {
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

