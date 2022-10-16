const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
//function dateSample(/* sampleActivity */) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
//}

/*function dateSample( sampleActivity )
{
    if( sampleActivity === undefined || ( typeof(sampleActivity) != 'string' ) ) return false;
    else {
      let curActivity = parseFloat(sampleActivity);
  
      if(  isNaN(curActivity) || (curActivity === undefined) || (curActivity > MODERN_ACTIVITY) || (curActivity <= 0) ) return false;
      else
      {
        let k = Math.log(2) / HALF_LIFE_PERIOD;
        let date= Math.log(MODERN_ACTIVITY / curActivity) / k;

        return Math.round(date);
      } 
    }
}*/

function dateSample( sampleActivity )
{
    if( sampleActivity === undefined )
    {
      //alert('undefined');
      return false;
    }
    else if ( typeof(sampleActivity) != 'string' ) 
    {
      //alert('не строка');
      return false;
    } 
    else {
      let curActivity = parseFloat(sampleActivity);
      //alert(curActivity);
  
      if( isNaN(curActivity) )
      {
        //alert('nan');
        return false;
      }
      else if(curActivity > MODERN_ACTIVITY)
      {
        //alert('больше чем надо');
        return false;
      }
      else if(curActivity <= 0 )
      {
        //alert('меньше чем надо');
        return false;
      } 
      else
      {
        //alert('типа все норм, вычисляем');
        //let k = Math.log(2) / HALF_LIFE_PERIOD;
        //let date= Math.log(MODERN_ACTIVITY / curActivity) / k;
        let date= Math.log(MODERN_ACTIVITY / curActivity) / 0.00012093762;

        return Math.round(date);
      } 
    }
}


module.exports = {
  dateSample
};
