console.log(`
Destructuring syntax:-
assign array/object literals into local variables

------
Array
-----
 
[var1,var2] = [val1,value2];
 
*ecaping index and assigning values
[,var2] = [value1,value2];

You can tell this with variable decleartions or definations.
var [var1,var2] = [val1,value2];

OR

var var1,var2;
[var1,var2] = [val1,value2];

`);

var [var1,var2] = [1,2];
var var3,var4;
var arr = [3,4];
[var3,var4]  =  arr;
console.log('var1,var2,var3,var4',var1,var2,var3,var4);
var [,v4] = arr;
console.log('escaping value v4',v4);

var arr2d = [[1,2,3],[11,12,13],[21,22,23]];
console.log(`play with 2d array`,arr2d);
var [[v1],[,v2],[,,v3]] = arr2d;
console.log('v1,v2,v3 :',v1,v2,v3);
console.log(' We can talk with default value');
var [v1=0.1,v2 =0.2] = [3];
console.log('v1,v2',v1,v2);
console.log('default values with 2d array');
var [[v1,,v11=11],[,v2,v12],[,,v3,v13=11]] = arr2d;
console.log('v11,v12,v13',v11,v12,v13);

console.log(`
--------------
    Object
---------------
var {k1,k2} = {k1:v1,k2:v2};
 *k1 & k2  available as local variables
OR
var k1,k2
({k1,k2}) = {k1:v1,k2:v2}
  * We must to use parentheses in object destructuring initials
  
We can set alias names 
({k1:a1,k2:a2}) = {k1:v1,k2:v2}
  
Assigning default values:
({k1=def1,k2=def2 }) = {k1:v1,k2:v2};

`);

var {k0='default',k1,k2,k3:a3} = {k1:'v1',k2:'v2',k3:'v3'};
console.log("k0,k1,k2,a3",k0,k1,k2,a3);

var records={name:'unknown',studied:{deg:'DCE',college:"SAP"},workProfile:[{name:'Teledata',role:'fronted developer'},{name:'Photon',role:'Tech lead'}]}
var {name,studied:{deg},workProfile:[{name:lastCompanyName},{role:currentCompanyRole}]} = records;
console.log('name,deg,lastCompanyName,currentCompanyRole',name,deg,lastCompanyName,currentCompanyRole);

console.log('we can use as function parameters');

function f1 ({name,studied:{deg},workProfile:[{name:lastCompanyName},{role:currentCompanyRole}]}){
  console.log('functions arguments');
  console.log(name,deg,lastCompanyName,currentCompanyRole);
}
f1(records);