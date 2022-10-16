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

function dateSample( sampleActivity )
{
    let curActivity = parseFloat(sampleActivity);
  
    if( ( typeof(sampleActivity) != 'string' ) || (sampleActivity === undefined) || isNaN(curActivity) || (curActivity === undefined) || (curActivity > MODERN_ACTIVITY) || (curActivity <= 0) ) return false;
    else
    {
      let k = Math.log(2) / HALF_LIFE_PERIOD;
      let date= Math.log(MODERN_ACTIVITY / curActivity) / k;

      return Math.round(date);
    } 
}


module.exports = {
  dateSample
};
