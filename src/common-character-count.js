const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
//function getCommonCharacterCount(/* s1, s2 */) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
//}
function getCommonCharacterCount(s1, s2 )
{
  let num_same_letters=0;
  
  let arr1=new Array(s1.length); arr1.fill(0);
  let arr2=new Array(s2.length); arr2.fill(0);
 
  // alert(s1 +' ' + s2);
  
  // сначала смотрим его присутствие в 1й строке и помечаем в массиве 
  for(let i=0; i< s1.length; i++)
  {
    //alert('первая строка, буква: ' + s1[i] );
    if( arr1[i] == 1 ) continue; // эту букву уже раньше подсчитывали
    
    let count1=1; // число вхождений нового проверяемого символа в первой строке
    arr1[i]=1; // пометить, что ее вхождение в слове уже считали
    for( let j= i+1; j < s1.length; j++) // ищем количество этих символов в первой строке
    {
      if( s1[i] == s1[j] ) 
      {
        count1++;
        arr1[j]=1;
      }

    }
    //alert('массив вхождений символа ' + s1[i] + ': ' + arr1);
    //alert('число вхождений символа ' + s1[i] + ' равно ' + count1);

    // поиск во второй строке
    let count2=0; // // число вхождений нового проверяемого символа во второй стороке
    for( let j=0; j < s2.length; j++)
    {
      if( arr2 == 1 ) continue; // если этот символ уже считали

      if( s1[i] == s2[j] )
      {
        count2++;
        arr2[j]=1;
      }
    }

    num_same_letters += count1 < count2 ? count1 : count2;


  }  

  return num_same_letters;
}


module.exports = {
  getCommonCharacterCount
};
