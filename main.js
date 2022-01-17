const str = `
  010-1234-5678.
  crash2@naver.com
  https://www.abcd.com/?apikey=289322=frozen
  The quick brown fox jumps over the lazy dog.
  abbcccdddd
  http://localhost:1234
`;

// const regexp = new RegExp('the', 'gi');
const regexp = /the/gi;
console.log(str.match(regexp));
// ['The', 'the']

const regexp1 = /fox/gi;
console.log(regexp1.test(str));
// true

const regexp2 = /over/gi;
console.log(str.replace(regexp2, 'AAA'));
// The quick brown fox jumps AAA the lazy dog.
console.log(str);
// The quick brown fox jumps over the lazy dog.

console.log(str.match(/the/gi));
// [ 'The', 'the' ]

const regexp3 = /\.$/gim;
console.log(str.match(regexp3));
// [ '.', '.' ]

console.log(str.match(/d$/gm));
// [ 'd' ]

console.log(str.trim().match(/^t/gim));
// [ 'T' ]

console.log(str.match(/h..p/g));
// [ 'http', 'http' ]

console.log(str.match(/fox|dog/g));
// [ 'fox', 'dog' ]

console.log(str.match(/https?/g));
// [ 'https', 'http' ]

console.log(str.match(/d{2}/g));
// [ 'dd', 'dd' ]

console.log(str.match(/d{2,}/g));
// [ 'dddd' ]

console.log(str.match(/d{2,3}/g));
// [ 'ddd' ]

console.log(str.match(/\b\w{2,3}\b/g));
/* 
  [
  '010', 'com',
  'www', 'com',
  'The', 'fox',
  'the', 'dog'
  ] 
*/

console.log(str.match(/[0-9]{1,}/g));
// [ '010', '1234', '5678', '2', '289322', '1234' ]

console.log(str.match(/\d{1,}/g));
// [ '010', '1234', '5678', '2', '289322', '1234' ]

console.log(str.match(/\bf\w{1,}\b/g));
// [ 'frozen', 'fox' ]

const h = `  the hello  world   !

`;

console.log(h.replace(/\s/g, ''));
// thehelloworld!

console.log(str.match(/.{1,}(?=@)/g));
// [ 'crash2' ]

console.log(str.match(/(?<=@).{1,}/g));
// [ 'naver.com' ]
