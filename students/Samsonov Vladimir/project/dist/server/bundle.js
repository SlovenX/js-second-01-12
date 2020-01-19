!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("fs")},function(e,t,n){var r=n(0),o=n(2),i=o(),u=n(3),a=n(4),s="dist/server/db/";i.use(o.json()),i.use("/",o.static("dist/public")),i.get("/catalog",(function(e,t){r.readFile(s+"catalogData.json","utf-8",(function(e,n){e?t.sendStatus(404,JSON.stringify({result:0})):t.send(n)}))})),i.get("/cart",(function(e,t){r.readFile(s+"userCart.json","utf-8",(function(e,n){e?t.sendStatus(404,JSON.stringify({result:0})):t.send(n)}))})),i.post("/cart",(function(e,t){r.readFile(s+"userCart.json","utf-8",(function(n,r){if(n)t.sendStatus(500,'{ "result": 0 }');else{var o=u.add(e,JSON.parse(r)),i=o.newCart,c=o.name;a(s+"userCart.json",JSON.stringify(i),t,{action:"add",name:c})}}))})),i.put("/cart/:id",(function(e,t){r.readFile(s+"userCart.json","utf-8",(function(n,r){if(n)t.sendStatus(500,'{ "result": 0 }');else{var o=u.change(e,JSON.parse(r)),i=o.newCart,c=o.name;a(s+"userCart.json",JSON.stringify(i),t,{action:"change",name:c})}}))})),i.delete("/cart/:id",(function(e,t){r.readFile(s+"userCart.json","utf-8",(function(n,r){if(n)t.sendStatus(500,'{ "result": 0 }');else{var o=u.delete(e,JSON.parse(r)),i=o.newCart,c=o.name;a(s+"userCart.json",JSON.stringify(i),t,{action:"del",name:c})}}))})),i.listen(3030,(function(){return console.log("app listening on port 3030! some")}))},function(e,t){e.exports=require("express")},function(e,t){var n={change:function(e,t){var n=+e.params.id,r=this._findItem(t,n);return r.quantity+=+e.body.q,{newCart:t,name:r.product_name}},add:function(e,t){var n=e.body;return t.contents.push(Object.assign({},n,{quantity:1})),{newCart:t,name:n.product_name}},delete:function(e,t){var n=+e.params.id,r=this._findItem(t,n);return t.contents.splice(t.contents.indexOf(r),1),{newCart:t,name:r.product_name}},_findItem:function(e,t){return e.contents.find((function(e){return e.id_product===t}))}};e.exports=n},function(e,t,n){var r=n(0),o=n(5);e.exports=function(e,t,n,i){r.writeFile(e,t,(function(e){e?n.sendStatus(500,'{ "result": 0} '):(n.send('{ "result": 1 }'),o(i.name,i.action))}))}},function(e,t,n){var r=n(0),o=n(6),i="./server/db/logger.json";e.exports=function(e,t){r.readFile(i,"utf-8",(function(n,u){if(n)console.log("can not read");else{var a=JSON.parse(u);a.push({time:o().format("DD MM YYYY hh:mm:ss"),product_name:e,userAction:t}),r.writeFile(i,JSON.stringify(a),(function(e){e&&console.log("can not write")}))}}))}},function(e,t){e.exports=require("moment")}]);