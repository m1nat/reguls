const years = '2000';
const regexp = /^(((19|20)[0-9][0-9])|2100)$/g;
console.log(years.match(regexp));
console.log(years);

// const times = '00:21';
// const regexp = /^(([0-1][0-9]|20|21|22|23)\:([0-5][0-9]))$/g; 
// or
// const regexp = /^(([0-1][0-9]|[2][0-3])\:([0-5][0-9]))$/g; 
// console.log(regexp.test(times));

// const letters = 'rrttfdsaxccvbbbbb';
// const regexp = /(.)(?=.*\1)/g;
// console.log(letters.replace(regexp, ""));

// const words = 'ccc bbb bbb aaa aaa';
// const regexp = /\b(\w+)\s+\1/g;
// console.log(words.replace(regexp, "$1"));

