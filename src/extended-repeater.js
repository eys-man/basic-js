const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options )
{
  let res = [], 
      repeat_Times = (options.hasOwnProperty('repeatTimes')) ? options.repeatTimes : 1, /* количество повторений str */
      separator_str = (options.hasOwnProperty('separator')) ? options.separator : '+',    /* разделитель str */
      add_str = (options.hasOwnProperty('addition')) ? String( options.addition) : '',  /* дополнительная строка, которая будет добавляться к каждому повторению str - придаток */
      additionRepeat_Times = (options.hasOwnProperty('additionRepeatTimes')) ? options.additionRepeatTimes : 1, /* количество повторений придатка к str - addition */
      addition_Separator = (options.hasOwnProperty('additionSeparator')) ? options.additionSeparator : '|';    /* разделитель повторений придатка addition */

  for( let i=0; i < repeat_Times; i++)
  {
    res.push(str); 

    for( let j=0; j < additionRepeat_Times; j++)
    {
      res[i] += add_str;
      
      if(j < additionRepeat_Times-1 ) res[i] += addition_Separator; // если не последний придаток, то добавить разделитель придатков
    }
  }

  return res.join(separator_str);

}

module.exports = {
  repeater
};
