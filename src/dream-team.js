const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
//function createDreamTeam(/* members */) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
//}

function createDreamTeam( members)
{
  if( !Array.isArray(members) || members == undefined )   return false;
  else
  {
    let arr=[];

    for(let i=0; i < members.length; i++ )
    {
      let word=members[i];
      if( (typeof word == 'string') && word != undefined && word != NaN && word.length != 0 )
      {
        let j=0; 
        while( word[j] === ' ') j++; // пропустить пробелы в начале строки
        // проверка на букву
        if( word[j].toUpperCase() != word[j].toLowerCase() ) arr.push( word[j].toUpperCase() );
      }
    }
  
    arr=arr.sort();
    
    let str='';
    for(let i=0; i < arr.length; i++) str += arr[i]; 
    return str;
  } 
}

module.exports = {
  createDreamTeam
};
