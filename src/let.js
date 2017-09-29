console.log(`
Before understanding, We should know about variable hosting;
check : https://www.sitepoint.com/back-to-basics-javascript-hoisting/
This variable hosting grown as issue instead of feature. Because var deceleration set on top of function instead of block({})
`);

console.log(`There is no  variable hosting concept in 'let' `);
(function (){
  try {
    let a = 1;
    console.log(a,b,c);
    let b = 2;
    let c = 3;}
  catch(e){
    console.log('no hosting',e)
  }
})();

(function (){
  try {
    console.log('empty block and define a and try outside block');
    {
      let a = 10;
    }
    console.log('let check a ');
    console.log(a);
  }
  catch(e){
    console.log('U can not find a ',e)
  }
})();
(function (){
  try {
    function fn(){
     console.log(a);
    }
    console.log('empty block and define a and try inside fn call of same block');
    {
      let a = 10;
      fn();
    }
    console.log('let check a  again');
    console.log(a);
  }
  catch(e){
    console.log('U can not find a ',e)
  }
})();

console.log(`var is scope to window but not let`);
var name = 'dinesh';
console.log('window.name',window.name);
let id = 'E4385';
console.log('window.id',window.id);

console.log("Once declared 'let' variable  we can't re-declare let/var");
let name = 'balaji';
try {
  var name = 'dinesh';
}
catch(e) {
  console.log(`Error : var instance cant redefine `,e);
}
console.log(`-------- Constant ----------`);
console.log(`Constant also same like let rules but u can define`);
const PI = 3.44;
