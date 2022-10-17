const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( arr, dep )
  {
    //let depth=0;
    if( Array.isArray( arr ) )
    {
      this.depth++;
      for(let i=0; i< arr.length; i++) this.calculateDepth( arr[i], depth );


    }
    else
    {
      throw new Error("It's not array!");
    }

  }
}

const getMaxDepth = arr =>
  Array.isArray(arr)
    ? 1 + Math.max(0, ...arr.map(getMaxDepth))
    : 0;


module.exports = {
  DepthCalculator
};
