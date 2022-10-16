const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

 const chainMaker = {
  chain: [],

  getLength()
  {
    //alert('длина цепи=' + this.chain.length + 'цепь сейчас такая: ' + this.chain);
    return this.chain.length;
  },

  addLink( value )
  {
    //alert('value=' + value);
    this.chain.push('( '+ String(value)+ ' )');
    //alert(' добавлено звено ' + value + ' цепь сейчас такая: ' + this.chain + ' длина массива ' + this.getLength() );
    return this;
  },
  
  removeLink( position )
  {
    //alert('начинаем удалять элемент с индексом '+ position);
    if( typeof position === 'number' && (position ^ 0) === position ) // проверка на то, что число, и на целое число
    {
      //alert('индекс удаляемого элемента массива - это число, и оно - целое');
      if( position < 0 || position >= this.getLength() ) 
      {
        //alert('индекс ссылается на несуществующие элементы')
        this.chain.length=0; // удалить массив
        throw new Error("You can't remove incorrect link!");
      }
      else
      {
        //alert('удаляем элемент с позиции '+ position +':  '+ this.chain[position]+ ' длина массива сейчас='+this.getLength() );
        this.chain.splice( position, 1); // удалить, начиная с позиции один элемент
        //alert('новый массив: '+this.chain + ' его длина='+this.getLength() );
        return this;
      }

    }
    else // если неправильный индекс задан 
    {   
      //alert('индекс должен быть положительным числом и целым');
      this.chain.length=0; // удалить массив
      throw new Error("Position must be an integer number")
    }
  },

  reverseChain() {
    this.chain.reverse();
    //alert('перевернули массив, щяс он такой: '+this.chain)
    return this;
  },

  finishChain() {
   let chain_string=this.chain.join('~~'); // преобразовать массив в строку

    this.chain.length=0;
    //alert('окончательный вид массива: '+chain_string);
    return chain_string;
  }

}

module.exports = {
  chainMaker
};
