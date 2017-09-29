/**
 * Created by dinesh_ba on 7/22/2016.
 */
console.log(`
Proxy is create proxy Object for any Objects(Array or another proxy or Object)

Syntax:
  new Proxy(targetObject,configurationObject)
`);

var tar = {a:'foo'};
var p = new Proxy(tar,{});
p.a ='footer';
p.b ="boo";

console.log(`proxy Object`, p);
console.log('changes of proxy will forward to target object', tar);
console.log(`Now we start override internal methods of object`);
var student = {};
var proxyHandler ={};

proxyHandler.get = (obj,key) => {
  if(key in obj){
    return obj[key];
  }
  return 'content need to be create';
};
proxyHandler.set = (obj,key,val) => {
  console.log("set method called :",obj,key,val);
  if(key == "phone")
  {
    if(typeof(val)!='number' || String(val).length != 10){
      console.warn('you must enter valid phone number :',val)
    }
  }
  Reflect.set(obj,key,val);
}
var proxy = new Proxy(student,proxyHandler);
proxy.name = `dinesh`;
proxy.phone = "123123";
console.log("stundent",student.name,"proxy",proxy);
proxy.phone = 9791165551;
console.log('proxy.unknown',proxy.unknown);

console.log(`Let think about DOM for proxy
Following Example i added addtional parent property to append and remove from parent link; 
`);
function proxyDom(target) {
  var config ={};
  config.set =(dom,key,val) =>{
       if(key =="parents"){
          val? val.appendChild(dom):dom.parentElement.removeChild(dom);
       } else {
         dom[key]=val;
       }
     }
  config.get =(dom,key,val) =>{
    if(key =="parents"){
      return dom.parentElement;
    }
    else if(typeof dom[key] == "function"){
        return dom[key].bind(target);
    }
    else {
      return dom[key];
    }

  }
  var pro = Proxy.revocable(target,config);
  pro.proxy.revoke=pro.revoke;
  return pro.proxy;
}
var div = document.createElement('a');
div.textContent="just a text";
var p = proxyDom(div);
document.addEventListener('DOMContentLoaded', function () {
  console.log('add dom element to body just call "p.parent = document.body"')
  p.parents = document.body;
  console.log(` you can read dom property via proxy it self`);
  console.log("p.tagName",p.tagName);
  p.setAttribute("href","//www.google.com");
  setTimeout(()=>{
    console.log('remove dom element from body just call "p.parent = null"')
    p.parents = null;
    console.log(`revoked proxy`);
    p.revoke();
    p.parents = document.body;
  },3000)
}, false);



