const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
//function getSeason(/* date */) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
// }

function getSeason( date )
{
  if( !date )
    return 'Unable to determine the time of year!';
      
  // https://overcoder.net/q/27069/%D0%BA%D0%B0%D0%BA-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%B8%D1%82%D1%8C-%D1%8F%D0%B2%D0%BB%D1%8F%D0%B5%D1%82%D1%81%D1%8F-%D0%BB%D0%B8-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82-%D0%B4%D0%B0%D1%82%D0%BE%D0%B9
  
  if (!date.getTime) {
    throw new Error('Invalid date!');
  }
  if (Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth();

  switch( month )
  {
    case 0:
    case 1:
    case 11:
      return 'winter';
    case 2:
    case 3:
    case 4:
      return 'spring';
    case 5:
    case 6:
    case 7:
      return 'summer';
    case 8:
    case 9:
    case 10:
      return 'autumn';
    default:
      return 'Invalid date!';
  };
    
  //throw new Error('Invalid date!');

}   


module.exports = {
  getSeason
};
