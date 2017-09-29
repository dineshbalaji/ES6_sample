/*Simple generator*/
console.log('--------------------Simple Generator-------------------------------');
function* simpleIter() {
    var name = yield "Hi, Your Name ?";
    if(name){
        yield "Welcome ,";
    }
    yield "Welcome "+(name||'guest')+",";
    yield "Have fun with generator";
}
var s = simpleIter();
console.log(s.next());
console.log(s.next('dinesh'));
console.log(s.next());
console.log(s.next());
/*
 for(var i of s){
 console.log(i);
 }*/
console.log('------------------- Example of "yield" key ---------------------------');
function* changeNo(){
    var a=10,b=20,c=30,d=40;
    b = yield a;
    c = yield b;
    d = yield c;
    yield d;
}
var n = changeNo();
console.log(n.next(1));
console.log(n.next(2));
console.log(n.next(3));
console.log(n.next(4));
console.log('------------------- Example of "yield*" key ---------------------------');
function* nestedIter(){
    yield 'Nested generator example';
    yield 'Using yield* , we are executing another generator';
    yield* simpleIter();
    yield 'nestedIter completed'
}
for(var l of nestedIter()){
    console.log(l);
}
console.log('------------------- return or throw are break iterations ---------------------------');
function* numberIter(){
    yield  1;
    for(var i=2;i<5;i++){
        yield i;
    }
    return 5;
    yield 6;
    yield 7;
    yield 8;
}
console.log('output should be 1 to 8 but we return in 5. so it stop in 4')
for (var i of numberIter())
{
    console.log(i);
}
console.log('------ generator / iterator used in spread operator/for of Loop/ Destructuring assignment -----');
console.log('spread operator [...numberIter()]', [...numberIter()]);
console.log('var [a,b,c,d] = numberIter();');
var [a,b,c,d] = numberIter();
console.log('a,b,c,d',a,b,c,d);

console.log('------ user-defined iterables  -----');
var obj ={};
obj[Symbol.iterator]=function* () {yield 1; yield 2;};
console.log('obj[Symbol.iterator]',obj[Symbol.iterator])
console.log('for..of result')
for(var i of obj){
 console.log(i);
}
console.log('[...obj]',[...obj]);

console.log('------ We can override default iterables (Array,Set,Map) -----');
console.log('Array');
var arr =[1,2,3,4];
console.log("[...arr]",[...arr]);
arr[Symbol.iterator] = function* () {
    yield 'we'; yield 'can'; yield 'override';
}
console.log("[...arr]",[...arr]);

console.log('Set');
var set = new Set([1,2,3,4]);
console.log('[...set]',[...set]);
set[Symbol.iterator] = function* () {
    yield 'we'; yield 'can'; yield 'override';
}
console.log('[...set]',[...set]);
var str = new String("Hi i m string");
console.log('[...str]',[...str]);
str[Symbol.iterator] = function* () {
    yield 'we'; yield 'can'; yield 'override';
}
console.log('[...str]',[...str]);
console.log('Note:without new operator, string iterator override will not work');
console.log('Note: Normally - Array,String,Map,Set have in-build iterator');
var arr = [1,2,3,4];
var str =new String("test");
var set = new Set();
var map = new Map();

console.log('arr[Symbol.iterator]',arr[Symbol.iterator]);
console.log('str[Symbol.iterator]',str[Symbol.iterator]);
console.log('set[Symbol.iterator]',set[Symbol.iterator]);
console.log('map[Symbol.iterator]',map[Symbol.iterator]);

console.log("So we can use inside the 'yield*' meaning of that this all are iterable");
var nestedIter1 = function* () {
    yield "looping external array";
    yield* arr;
    yield "end"
}
console.log('nestIter1',[...nestedIter1()]);
console.log('');