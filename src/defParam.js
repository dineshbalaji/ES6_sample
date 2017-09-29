console.log(`Default Parameters`);
function simpleLog (name = "Guest",task = "Not assigned") {
    console.log(`Hi ${name}, task is ${task}`);
}
simpleLog()
simpleLog('dinesh')
simpleLog('dinesh','sleep well');

console.log(`Default Parameters - so DYNAMIC`);
var val1 =2;
function add(a=val1,b=a*2){
  return a+b;
}
console.log('add() :',add());
console.log('changing value1 as 5');
val1=5;
console.log('add() :',add());