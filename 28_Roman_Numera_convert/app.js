//  Roman Numereal converter...............
  function decimalToRoman(decimal) 
    if (typeof decimal==='number'){
    const values = [
      { symbol: 'M', value: 1000 },
      { symbol: 'CM', value: 900 },
      { symbol: 'D', value: 500 },
      { symbol: 'CD', value: 400 },
      { symbol: 'C', value: 100 },
      { symbol: 'XC', value: 90 },
      { symbol: 'L', value: 50 },
      { symbol: 'XL', value: 40 },
      { symbol: 'X', value: 10 },
      { symbol: 'IX', value: 9 },
      { symbol: 'V', value: 5 },
      { symbol: 'IV', value: 4 },
      { symbol: 'I', value: 1 },
    ];
    let result = ' ';
    for (const { symbol, value } of values) {
      while (decimal >= value) {//501>=500 and 1>=1
        result += symbol;//DI
        decimal -= value;
      }    
    }
  //   return result;
  // }else if()
    
  
  }
  console.log(decimalToRoman(12));






















  
  const _roman = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

  // 1903 => MCMIII
  function toRoman(number = 0) {
      return Object.keys(_roman).reduce((acc, key) => {
          while (number >= _roman[key]) {
              acc += key;
              number -= _roman[key];
          }
          return acc;
      }, '');
  }
  
  
  // MCMIII => 1903
  function fromRoman(roman = '') {
      return Object.keys(_roman).reduce((acc, key) => {
          while (roman.indexOf(key) === 0) {
              acc += _roman[key];
              roman = roman.substr(key.length);
          }
          return acc;
      }, 0);
  }
  
  console.log(toRoman(1903));  // should return 'MCMIII
  console.log(fromRoman('MCMIII')); // should return 1903