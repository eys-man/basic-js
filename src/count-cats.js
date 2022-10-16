const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

 function countCats(matrix)
 {
   let rows=matrix.length;
   let count=0; // число котов
 
   for(let i=0; i < rows; i++)
   {
     let cols=matrix[0];
     
     for( let j=0; j< cols.length; j++)
       if( typeof(matrix[i][j]) === 'string' && matrix[i][j] === '^^') count++;
   
   }
   return count;
 }

module.exports = {
  countCats
};
