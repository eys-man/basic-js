const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
//function encodeLine(/* str */) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
// }
function encodeLine( str )
{
  let res_str='';
  let count;
  let symbol;

  let i=0;
  while( i < str.length )
  {
    //alert(i + '-й символ строки, - '+str[i] );

    count=1; // число одинаковых символов подряд
    symbol=str[i]; 
    // пробежаться по таким же следующим символам в строке
    let j=i+1;
    while( j < str.length && str[j] == str[i] )
    {
      j++;
      count++;
    }
    //alert('найдено '+ count + ' подряд символов ' + str[i] );
    if( count > 1 )  res_str += (count + str[i]);
    else res_str += str[i];
    
    i=j;

  }

  //alert('закодированная строка: ' + res_str);
  return res_str;
}

module.exports = {
  encodeLine
};
