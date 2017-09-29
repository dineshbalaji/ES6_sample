console.log('------------Let take about Map-----------------');

var map = new Map();
map.set(1,"one");
map.set("one",1);
var emp ={name:"dinesh"};
map.set(emp,{id:"E4385"});
map.set(true,"Right");
map.set(false,"Wrong");
var s = Symbol('Symbol');
map.set(s,"Symbol value assigned");
console.log('map', map);
console.log('map.size',map.size);

console.log("------ 'get' Method -----------------");
console.log('get(1)',map.get(1));
console.log('map.get(emp)', map.get(emp));
console.log('map.get({name:"dinesh"})', map.get({name:"dinesh"}));
console.log('map.get(1===1)',map.get(1===1))
console.log('map.get(1===0)',map.get(1===0))
console.log('map.get(s)',map.get(s));


console.log("-------- iterator method's -------------");
console.log("Note: map.entries() expose to iterators mean for..of / spread operator / symbol.iterator");
console.log('[...map]', [...map]);
console.log('map.entries ', map.entries());

console.log('for ([k,v] of map)')
for(var [k,v] of map){
    console.log(k,v);
}

console.log('for ([k,v] of map.entries())')
for(var [k,v] of map.entries()){
    console.log(k,v);
}
console.log('for (k of map.keys())')
for(var k of map.keys()){
    console.log(k);
}
console.log('for (k of map.values())')
for(var v of map.values()) {
    console.log(v);
}

console.log("---------- has & delete method -----------");
console.log('map.has(1)', map.has(1))
console.log('map.delete(1)', map.delete(1));
console.log('map.has(1)', map.has(1));

console.log('-------- Ways to add values to Map -------');
var mapObj = [['key1',50],['key2',51]]
var m1 = new Map(mapObj);
console.log('m1',m1);
function* generator(){
    yield ['key1',50];
    yield ['key2',51];
}
var m2 = new Map(generator());
console.log('m2',m2);
console.log('------------ Let take about Set -----------------');
console.log('Set is like a array , different : it not allow duplicate entry and indexOf operations fast using set.has method');
console.log('but their is no index based get like array');
var set = new Set([1,2,3,4,5,6]);
set.add(7);
set.add(8);
set.add(1);
console.log('set ',set);
console.log('set.size',set.size);
console.log('set.entries()',set.entries());
console.log('set.delete(2)',set.delete(2));
console.log('set.keys()',set.keys());
console.log('set.values()',set.values());
console.log('set.add(10).add(11)');
console.log(set.add(10).add(11));

console.log('We can regenerate Array from iterable instance');
console.log('Array.from(set)',Array.from(set));
console.log('Array.from(map)',Array.from(map));

console.log('---------------- Symbol -----------------------------');
console.log('symbol useful to create hidden property using that we avoid data conflict');
var sym = Symbol('s1');
var obj = {};
obj[sym] = 'hidden property'
obj.name = 'dinesh';
obj.empId = 'E4385';
console.log('Object',Object.getOwnPropertyNames(obj));
console.log('for in loop');
for(var i in obj)
{
    console.log(`key = ${i} Value = ${obj[i]};`);
}
console.log('To get symbol attached to object use Object.get');
console.log('Object.getOwnPropertySymbols(obj)',Object.getOwnPropertySymbols(obj));
console.log('Use Symbol.for() for global symbol instance');
console.log(Symbol('s1') === Symbol('s1'));
console.log(Symbol.for('s2') === Symbol.for('s2'))
