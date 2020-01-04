!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";e.a=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){return e.reject(n)}))}))}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e),n.d(e,"Headers",(function(){return c})),n.d(e,"Request",(function(){return m})),n.d(e,"Response",(function(){return v})),n.d(e,"DOMException",(function(){return w})),n.d(e,"fetch",(function(){return _}));var r={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(r.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(t){return t&&o.indexOf(Object.prototype.toString.call(t))>-1};function s(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function a(t){return"string"!=typeof t&&(t=String(t)),t}function u(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return r.iterable&&(e[Symbol.iterator]=function(){return e}),e}function c(t){this.map={},t instanceof c?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function f(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function l(t){return new Promise((function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function d(t){var e=new FileReader,n=l(e);return e.readAsArrayBuffer(t),n}function h(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:r.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:r.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:r.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():r.arrayBuffer&&r.blob&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=h(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):r.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||i(t))?this._bodyArrayBuffer=h(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},r.blob&&(this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var t,e,n,r=f(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,n=l(e),e.readAsText(t),n;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},r.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}c.prototype.append=function(t,e){t=s(t),e=a(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},c.prototype.delete=function(t){delete this.map[s(t)]},c.prototype.get=function(t){return t=s(t),this.has(t)?this.map[t]:null},c.prototype.has=function(t){return this.map.hasOwnProperty(s(t))},c.prototype.set=function(t,e){this.map[s(t)]=a(e)},c.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},c.prototype.keys=function(){var t=[];return this.forEach((function(e,n){t.push(n)})),u(t)},c.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),u(t)},c.prototype.entries=function(){var t=[];return this.forEach((function(e,n){t.push([n,e])})),u(t)},r.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(t,e){var n,r,o=(e=e||{}).body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new c(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new c(e.headers)),this.method=(n=e.method||this.method||"GET",r=n.toUpperCase(),y.indexOf(r)>-1?r:n),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}})),e}function v(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new c(e.headers),this.url=e.url||"",this._initBody(t)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},p.call(m.prototype),p.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var g=[301,302,303,307,308];v.redirect=function(t,e){if(-1===g.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})};var w=self.DOMException;try{new w}catch(t){(w=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack}).prototype=Object.create(Error.prototype),w.prototype.constructor=w}function _(t,e){return new Promise((function(n,o){var i=new m(t,e);if(i.signal&&i.signal.aborted)return o(new w("Aborted","AbortError"));var s=new XMLHttpRequest;function a(){s.abort()}s.onload=function(){var t,e,r={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new c,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}})),e)};r.url="responseURL"in s?s.responseURL:r.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;n(new v(o,r))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.onabort=function(){o(new w("Aborted","AbortError"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&r.blob&&(s.responseType="blob"),i.headers.forEach((function(t,e){s.setRequestHeader(e,t)})),i.signal&&(i.signal.addEventListener("abort",a),s.onreadystatechange=function(){4===s.readyState&&i.signal.removeEventListener("abort",a)}),s.send(void 0===i._bodyInit?null:i._bodyInit)}))}_.polyfill=!0,self.fetch||(self.fetch=_,self.Headers=c,self.Request=m,self.Response=v)},function(t,e,n){"use strict";(function(t){var r=n(0),o=setTimeout;function i(t){return Boolean(t&&void 0!==t.length)}function s(){}function a(t){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],h(t,this)}function u(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,a._immediateFn((function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var r;try{r=n(t._value)}catch(t){return void f(e.promise,t)}c(e.promise,r)}else(1===t._state?c:f)(e.promise,t._value)}))):t._deferreds.push(e)}function c(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof a)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void h((r=n,o=e,function(){r.apply(o,arguments)}),t)}t._state=1,t._value=e,l(t)}catch(e){f(t,e)}var r,o}function f(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&a._immediateFn((function(){t._handled||a._unhandledRejectionFn(t._value)}));for(var e=0,n=t._deferreds.length;e<n;e++)u(t,t._deferreds[e]);t._deferreds=null}function d(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function h(t,e){var n=!1;try{t((function(t){n||(n=!0,c(e,t))}),(function(t){n||(n=!0,f(e,t))}))}catch(t){if(n)return;n=!0,f(e,t)}}a.prototype.catch=function(t){return this.then(null,t)},a.prototype.then=function(t,e){var n=new this.constructor(s);return u(this,new d(t,e,n)),n},a.prototype.finally=r.a,a.all=function(t){return new a((function(e,n){if(!i(t))return n(new TypeError("Promise.all accepts an array"));var r=Array.prototype.slice.call(t);if(0===r.length)return e([]);var o=r.length;function s(t,i){try{if(i&&("object"==typeof i||"function"==typeof i)){var a=i.then;if("function"==typeof a)return void a.call(i,(function(e){s(t,e)}),n)}r[t]=i,0==--o&&e(r)}catch(t){n(t)}}for(var a=0;a<r.length;a++)s(a,r[a])}))},a.resolve=function(t){return t&&"object"==typeof t&&t.constructor===a?t:new a((function(e){e(t)}))},a.reject=function(t){return new a((function(e,n){n(t)}))},a.race=function(t){return new a((function(e,n){if(!i(t))return n(new TypeError("Promise.race accepts an array"));for(var r=0,o=t.length;r<o;r++)a.resolve(t[r]).then(e,n)}))},a._immediateFn="function"==typeof t&&function(e){t(e)}||function(t){o(t,0)},a._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},e.a=a}).call(this,n(6).setImmediate)},function(t,e,n){n(2),t.exports=n(11)},function(t,e,n){"use strict";(function(t){var e=n(3),r=n(0),o=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("unable to locate global object")}();"Promise"in o?o.Promise.prototype.finally||(o.Promise.prototype.finally=r.a):o.Promise=e.a}).call(this,n(1))},function(t,e,n){(function(t){var r=void 0!==t&&t||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n(7),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(1))},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var r,o,i,s,a,u=1,c={},f=!1,l=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?r=function(t){e.nextTick((function(){p(t)}))}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((i=new MessageChannel).port1.onmessage=function(t){p(t.data)},r=function(t){i.port2.postMessage(t)}):l&&"onreadystatechange"in l.createElement("script")?(o=l.documentElement,r=function(t){var e=l.createElement("script");e.onreadystatechange=function(){p(t),e.onreadystatechange=null,o.removeChild(e),e=null},o.appendChild(e)}):r=function(t){setTimeout(p,0,t)}:(s="setImmediate$"+Math.random()+"$",a=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(s)&&p(+e.data.slice(s.length))},t.addEventListener?t.addEventListener("message",a,!1):t.attachEvent("onmessage",a),r=function(e){t.postMessage(s+e,"*")}),d.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return c[u]=o,r(u),u++},d.clearImmediate=h}function h(t){delete c[t]}function p(t){if(f)setTimeout(p,0,t);else{var e=c[t];if(e){f=!0;try{!function(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}(e)}finally{h(t),f=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(1),n(8))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var u,c=[],f=!1,l=-1;function d(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&h())}function h(){if(!f){var t=a(d);f=!0;for(var e=c.length;e;){for(u=c,c=[];++l<e;)u&&u[l].run();l=-1,e=c.length}u=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new p(t,e)),1!==c.length||f||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(2),n(5);var r={el:"#app",components:{cart:{components:{item:{template:'\n    <div class="cart-item">\n        <div class="product-bio">\n            <img :src="image" alt="Some image">\n            <div class="product-desc">\n                <p class="product-title">{{ item.product_name }}</p>\n                <p class="product-quantity">Quantity: {{ item.quantity }}</p>\n                <p class="product-single-price">$ {{item.price}} each</p>\n            </div>\n        </div>\n        <div class="right-block">\n            <p class="product-price">$ {{ item.quantity * item.price }}</p>\n            <button class="del-btn" @click="$parent.delProduct (item)">&times;</button>\n        </div>\n    </div>\n    ',props:{image:{type:String,default:function(){return"https://placehold.it/100x80"}},item:{type:Object,default:function(){return{}}}}}},template:'\n    <div class="cart-block-main">\n        <button class="btn-cart" type="button" @click="cartShown = !cartShown">Корзина</button>\n        <div class="cart-block" v-show="cartShown">\n            <p>Всего товаров: {{ getSum.qua }} </p>\n            <item v-for="prod of items" :key="prod.id_product" :item="prod"></item>\n            <p>Общая ст-ть: $ {{ getSum.sum }} </p>\n        </div>\n    </div>\n    ',data:function(){return{items:[],cartShown:!1}},methods:{addProduct:function(t){var e=this,n=this.items.find((function(e){return e.id_product===t.id_product}));if(n)this.$parent.putJson("/cart/"+t.id_product,{q:1}).then((function(t){t.result?n.quantity++:console.log("error")}));else{var r=Object.assign({},t,{quantity:1});this.$parent.postJson("/cart",r).then((function(t){t.result?e.items.push(r):console.log("error")}))}},delProduct:function(t){var e=this,n=this.items.find((function(e){return e.id_product===t.id_product}));n.quantity>1?this.$parent.putJson("/cart/"+t.id_product,{q:-1}).then((function(t){t.result?n.quantity--:console.log("error")})):this.$parent.deleteJson("/cart/"+t.id_product).then((function(n){n.result?e.items.splice(e.items.indexOf(t),1):console.log("error")}))}},mounted:function(){var t=this;this.$parent.getJson("/cart").then((function(e){t.items=e.contents}))},computed:{getSum:function(){var t=0,e=0;return this.items.forEach((function(n){t+=n.price*n.quantity,e+=n.quantity})),{sum:t,qua:e}}}},catalog:{components:{item:{template:'\n    <div class="product-item">\n        <img :src="image" alt="Some img">\n        <div class="desc">\n            <h3>{{ item.product_name }}</h3>\n            <p>{{ item.price }} $</p>\n            <button class="buy-btn" @click="$root.$refs.cart.addProduct (item)">Купить</button>\n        </div>\n    </div>\n    ',props:{image:{type:String,default:function(){return"https://placehold.it/200x150"}},item:{type:Object,default:function(){return{}}}}}},template:'\n    <div class="products">\n        <item v-for="prod of filtered" :key="prod.id_product" :item="prod"></item>\n    </div>\n    ',data:function(){return{url:"/catalog",items:[],filtered:[]}},methods:{filter:function(t){var e=this,n=new RegExp(t,"i");this.filtered=[],this.items.forEach((function(t){n.test(t.product_name)&&e.filtered.push(t)}))}},mounted:function(){var t=this;this.$parent.getJson(this.url).then((function(e){t.items=e,t.filtered=e}))}},filtercomp:{template:'\n    <form action="#" class="search-form" @submit.prevent="$root.$refs.catalog.filter (str)">\n        <input type="text" class="search-field" v-model="str">\n        <button class="btn-search" type="submit">\n            <i class="fas fa-search"></i>\n        </button>\n    </form>\n    ',data:function(){return{str:""}}}},methods:{getJson:function(t){return fetch(t).then((function(t){return t.json()}))},postJson:function(t,e){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()}))},putJson:function(t,e){return fetch(t,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()}))},deleteJson:function(t){return fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}))}}};n(9),n(10),new Vue(r)}]);