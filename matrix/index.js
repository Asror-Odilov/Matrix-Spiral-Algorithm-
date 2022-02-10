// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples

//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

    /* Problem Solving Steps */
// 1 => Create am empty array
// 2 => Create nested arrays inside main array based on  the number (n)
// 3 => Setting the starting point number at 1 
// 4 => Setting up starting and ending point of columns and rows
// 5 => Write condition to define the starting point of columns and rows are less than or equal to ending point
        // Ass long as ( colStart <= colEnd && rowStart <= rowEnd )
// 6 => Looping trough

function matrix(n) {
    const result = [];

    for (let i = 0; i < n; i++) {
        result.push([]);
    }

    let counter = 1;
    let colStart = 0;
    let colEnd = n - 1;
    let rowStart = 0;
    let rowEnd = n - 1
    
    while (colStart <= colEnd && rowStart <= rowEnd) {

        // 7 => Looping from start column to end column

    for (let i = colStart; i <= colEnd; i++) {
        result[rowStart][i] = counter;             
        counter ++ ;
    }
    rowStart ++ ;

        // 8 => Looping from start row to end row

    for (let i = rowStart; i <= rowEnd; i++) {
        result[i][colEnd] = counter;
        counter ++ ;
    }
    colEnd --;
    
        // 9 => Looping from end column to start column

    for(let i = colEnd; i >= colStart; i--) {
        result[rowEnd][i] = counter;
        counter ++ ;
    }
    rowEnd -- ;

        // 10 => Looping from end row to start row
    for(let i = rowEnd; i >= rowStart; i--){
        result[i][colStart] = counter;
        counter ++ ;
    }
    colStart ++ ;
}
return result;
}


module.exports = matrix;
