var infoMsgES6 = `
Template String/literals  is another way of string literals with string interpolations concept. 
-------------------------------------------------------------------- \n
Let start form string literals example

we can define string 3 format now

1. new String('dinesh')  
2."dinesh" / 'dinesh'

In ES6

We can use back-tick(\`) symbol like "/'

`
console.log(`infoMsgEs6 : ${infoMsgES6}`);

var infoMsgOfEs5 = "In ES5 and previous versions, default to implement multiple line message content as a string" +
  "we want to use plus(+) after line breaks  \n and \n we want use (\\n) for new line.";

console.log('infoMsgOfEs5: \n' + infoMsgOfEs5);

var val = `use this syntax '$/{expression}'`;
console.log(`Now string interpolation also possible,${val}.`);
var val1 = "(+) concat sting'"
console.log('previously we used ' + val1 + '.');

console.log(`
----------------------------------------
multiple example of string interpolation
`);

var errMsg = {code: 123, info: "Check sometime later"};
var uiEle = `Server error (#${errMsg.code}) found.\n msg:${errMsg.info}.`
console.log(uiEle);

function foo() {
  return "conditional operator success"
}
function bar() {
  return "conditional operator fail"
}
console.log(`check conditonal operator: ${(1 == 1) ? foo() : bar()}.`);

console.log(`Note:we can't able use if/for statement, but don't give up still we have 'tagged tempalte string' concept`);

console.log(`--------------- tagged template example ---------------------------`);

console.log('Example 1 : simpleTag');
function simpleTag(string, ...value) {
  console.log("simpleTag called with", string, value);
  var res = '';
  string.forEach(function (str, i) {
    res += str + ((value[i] == undefined) ? '' : value[i]);
  });
  return res;
}
var str = simpleTag `This awesome year ${(new Date).getFullYear()} and your lucky number : ${Math.round(Math.random())}`
console.log('result of str :', str);

console.log('Example 2 : hashIF');

function hashIf(strings, ...values) {
  var out = '';

  for(var i=0;i<strings.length;i++){
    /* remove till #end */
    var str = strings[i].replace(/.*(?=#end)#end?\s/g,'');

    if ((/\s+#if\s+/).test(str)) {
      str = strings[i].replace(/\s+(#if)\s+/,'')
      var nxtStr = strings[i+1];
      replacePart ='';
      if (values[i]) {
        /*value success */
        replacePart = '$1'
      }
      nxtStr = nxtStr.replace(/(.*)(?=#end)#end(.*)/,replacePart);
      out += str;
      out += nxtStr;
    }else {
      out += str;
    }
  }
  return out;
}
isUnknown =false;
var out = hashIf `Hi  #if ${!isUnknown} Friend, #end  How are you ?`
console.log(out);

var ignores = function (ignoreList) {

  return function (strings, ...values) {
    var out =''
    strings.forEach(function (str,i) {
      console.log(ignoreList);
      ignoreList.forEach(function (ignor) {
        console.log(ignor);
        str = str.replace(ignor,'');
      });
      out += str + (values[i] || '');
    });
    return out;
  }
}
var ignoreTag = ignores(["can't","don't"]);
console.log(ignoreTag `I can't do this or you don't do this`);
