console.log(`
Nice to read arrow function in MDN article, "https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/"
In this article, i understand various arrow uses

<!-- single line comment
--> "goes to" operator
<= "less than & equal"
=> "arrow function"
 
`);
console.log(`
Syntax:

  No parameter and one line return ;
    () =>  x;
  single parameter and one line return;
    x = x*1;
  If u had multiple parameter use parentheses 
    (x1,x2) => x1+x2;
  if u had multiple line in the function body use {} blocks but when we are use {}(block) we must explicitly  call 'return' key if u want return 
    () => {exp1; exp2;};
  And we can other ES6 syntax (default params,spreads, destructuring augments)
    
Note:
    From the beginning of the javascript, 'function' keywords create 'this' for function call-context;
    But in the Arrow function, 'this' context always refer parent context (where you define the arrow function); 
`);
console.log(`examples`);
var squre = x => x*x;
squre(2);
  var add = (x,y) => x+y;
add(3,4);
var arr = [1,2,3,4,5];
oddNum = arr.filter(val => val%2);