module.exports = {
  sum(...arg) {
      console.log('arg:', arg)
    return arg.reduce((preValue, value)=> {
        return preValue + value
    },0)
  }  
}