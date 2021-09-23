/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";var t,r,e,i={exports:{}};t=i,r="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,e=function(n){var t,e,i=void 0!==(n=n||{})?n:{};i.ready=new Promise((function(n,r){t=n,e=r}));var o,a={};for(o in i)i.hasOwnProperty(o)&&(a[o]=i[o]);var u="./this.program",c="object"==typeof window,f="function"==typeof importScripts;"object"==typeof process&&"object"==typeof process.versions&&process.versions.node;var s,l="";function d(n){return i.locateFile?i.locateFile(n,l):l+n}(c||f)&&(f?l=self.location.href:"undefined"!=typeof document&&document.currentScript&&(l=document.currentScript.src),r&&(l=r),l=0!==l.indexOf("blob:")?l.substr(0,l.lastIndexOf("/")+1):"",f&&(s=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}));var m,p,v=i.print||console.log.bind(console),y=i.printErr||console.warn.bind(console);for(o in a)a.hasOwnProperty(o)&&(i[o]=a[o]);a=null,i.arguments,i.thisProgram&&(u=i.thisProgram),i.quit,i.wasmBinary&&(m=i.wasmBinary),i.noExitRuntime,"object"!=typeof WebAssembly&&on("no native wasm support detected");var g=!1,h="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function _(n,t,r){for(var e=t+r,i=t;n[i]&&!(i>=e);)++i;if(i-t>16&&n.subarray&&h)return h.decode(n.subarray(t,i));for(var o="";t<i;){var a=n[t++];if(128&a){var u=63&n[t++];if(192!=(224&a)){var c=63&n[t++];if((a=224==(240&a)?(15&a)<<12|u<<6|c:(7&a)<<18|u<<12|c<<6|63&n[t++])<65536)o+=String.fromCharCode(a);else{var f=a-65536;o+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}function w(n,t){return n?_(F,n,t):""}function b(n,t,r,e){if(!(e>0))return 0;for(var i=r,o=r+e-1,a=0;a<n.length;++a){var u=n.charCodeAt(a);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&n.charCodeAt(++a)),u<=127){if(r>=o)break;t[r++]=u}else if(u<=2047){if(r+1>=o)break;t[r++]=192|u>>6,t[r++]=128|63&u}else if(u<=65535){if(r+2>=o)break;t[r++]=224|u>>12,t[r++]=128|u>>6&63,t[r++]=128|63&u}else{if(r+3>=o)break;t[r++]=240|u>>18,t[r++]=128|u>>12&63,t[r++]=128|u>>6&63,t[r++]=128|63&u}}return t[r]=0,r-i}function A(n,t,r){return b(n,F,t,r)}function C(n){for(var t=0,r=0;r<n.length;++r){var e=n.charCodeAt(r);e>=55296&&e<=57343&&(e=65536+((1023&e)<<10)|1023&n.charCodeAt(++r)),e<=127?++t:t+=e<=2047?2:e<=65535?3:4}return t}var T,E,F,D,S,P,j,k,W,R,M="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function O(n,t){for(var r=n,e=r>>1,i=e+t/2;!(e>=i)&&S[e];)++e;if((r=e<<1)-n>32&&M)return M.decode(F.subarray(n,r));for(var o="",a=0;!(a>=t/2);++a){var u=D[n+2*a>>1];if(0==u)break;o+=String.fromCharCode(u)}return o}function x(n,t,r){if(void 0===r&&(r=2147483647),r<2)return 0;for(var e=t,i=(r-=2)<2*n.length?r/2:n.length,o=0;o<i;++o){var a=n.charCodeAt(o);D[t>>1]=a,t+=2}return D[t>>1]=0,t-e}function I(n){return 2*n.length}function U(n,t){for(var r=0,e="";!(r>=t/4);){var i=P[n+4*r>>2];if(0==i)break;if(++r,i>=65536){var o=i-65536;e+=String.fromCharCode(55296|o>>10,56320|1023&o)}else e+=String.fromCharCode(i)}return e}function Y(n,t,r){if(void 0===r&&(r=2147483647),r<4)return 0;for(var e=t,i=e+r-4,o=0;o<n.length;++o){var a=n.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++o)),P[t>>2]=a,(t+=4)+4>i)break}return P[t>>2]=0,t-e}function H(n){for(var t=0,r=0;r<n.length;++r){var e=n.charCodeAt(r);e>=55296&&e<=57343&&++r,t+=4}return t}function z(n,t){E.set(n,t)}function V(n,t,r){for(var e=0;e<n.length;++e)E[t++>>0]=n.charCodeAt(e);r||(E[t>>0]=0)}function N(n,t){return n%t>0&&(n+=t-n%t),n}function B(n){T=n,i.HEAP8=E=new Int8Array(n),i.HEAP16=D=new Int16Array(n),i.HEAP32=P=new Int32Array(n),i.HEAPU8=F=new Uint8Array(n),i.HEAPU16=S=new Uint16Array(n),i.HEAPU32=j=new Uint32Array(n),i.HEAPF32=k=new Float32Array(n),i.HEAPF64=W=new Float64Array(n)}i.INITIAL_MEMORY;var L=[],G=[],J=[];function q(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)$(i.preRun.shift());dn(L)}function X(){dn(G)}function Z(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)Q(i.postRun.shift());dn(J)}function $(n){L.unshift(n)}function K(n){G.unshift(n)}function Q(n){J.unshift(n)}var nn=0,tn=null;function rn(n){nn++,i.monitorRunDependencies&&i.monitorRunDependencies(nn)}function en(n){if(nn--,i.monitorRunDependencies&&i.monitorRunDependencies(nn),0==nn&&tn){var t=tn;tn=null,t()}}function on(n){i.onAbort&&i.onAbort(n),y(n+=""),g=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.";var t=new WebAssembly.RuntimeError(n);throw e(t),t}i.preloadedImages={},i.preloadedAudios={};var an,un="data:application/octet-stream;base64,";function cn(n){return n.startsWith(un)}function fn(n){try{if(n==an&&m)return new Uint8Array(m);if(s)return s(n);throw"both async and sync fetching of the wasm failed"}catch(y){on(y)}}function sn(){return m||!c&&!f||"function"!=typeof fetch?Promise.resolve().then((function(){return fn(an)})):fetch(an,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+an+"'";return n.arrayBuffer()})).catch((function(){return fn(an)}))}function ln(){var n={env:Zt,wasi_snapshot_preview1:Zt};function t(n,t){var r=n.exports;i.asm=r,B((p=i.asm.memory).buffer),R=i.asm.__indirect_function_table,K(i.asm.__wasm_call_ctors),en()}function r(n){t(n.instance)}function o(t){return sn().then((function(t){return WebAssembly.instantiate(t,n)})).then(t,(function(n){y("failed to asynchronously prepare wasm: "+n),on(n)}))}function a(){return m||"function"!=typeof WebAssembly.instantiateStreaming||cn(an)||"function"!=typeof fetch?o(r):fetch(an,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(r,(function(n){return y("wasm streaming compile failed: "+n),y("falling back to ArrayBuffer instantiation"),o(r)}))}))}if(rn(),i.instantiateWasm)try{return i.instantiateWasm(n,t)}catch(u){return y("Module.instantiateWasm callback failed with error: "+u),!1}return a().catch(e),{}}function dn(n){for(;n.length>0;){var t=n.shift();if("function"!=typeof t){var r=t.func;"number"==typeof r?void 0===t.arg?R.get(r)():R.get(r)(t.arg):r(void 0===t.arg?null:t.arg)}else t(i)}}function mn(n){return $t(n+16)+16}function pn(n,t){}function vn(n,t){return pn()}function yn(n){this.excPtr=n,this.ptr=n-16,this.set_type=function(n){P[this.ptr+4>>2]=n},this.get_type=function(){return P[this.ptr+4>>2]},this.set_destructor=function(n){P[this.ptr+8>>2]=n},this.get_destructor=function(){return P[this.ptr+8>>2]},this.set_refcount=function(n){P[this.ptr>>2]=n},this.set_caught=function(n){n=n?1:0,E[this.ptr+12>>0]=n},this.get_caught=function(){return 0!=E[this.ptr+12>>0]},this.set_rethrown=function(n){n=n?1:0,E[this.ptr+13>>0]=n},this.get_rethrown=function(){return 0!=E[this.ptr+13>>0]},this.init=function(n,t){this.set_type(n),this.set_destructor(t),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var n=P[this.ptr>>2];P[this.ptr>>2]=n+1},this.release_ref=function(){var n=P[this.ptr>>2];return P[this.ptr>>2]=n-1,1===n}}function gn(n,t,r){throw new yn(n).init(t,r),n}cn(an="i3s.wasm")||(an=d(an));var hn={};function _n(n){for(;n.length;){var t=n.pop();n.pop()(t)}}function wn(n){return this.fromWireType(j[n>>2])}var bn={},An={},Cn={},Tn=48,En=57;function Fn(n){if(void 0===n)return"_unknown";var t=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return t>=Tn&&t<=En?"_"+n:n}function Dn(n,t){return n=Fn(n),function(){return t.apply(this,arguments)}}function Sn(n,t){var r=Dn(t,(function(n){this.name=t,this.message=n;var r=new Error(n).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(n.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var Pn=void 0;function jn(n){throw new Pn(n)}function kn(n,t,r){function e(t){var e=r(t);e.length!==n.length&&jn("Mismatched type converter count");for(var i=0;i<n.length;++i)Hn(n[i],e[i])}n.forEach((function(n){Cn[n]=t}));var i=new Array(t.length),o=[],a=0;t.forEach((function(n,t){An.hasOwnProperty(n)?i[t]=An[n]:(o.push(n),bn.hasOwnProperty(n)||(bn[n]=[]),bn[n].push((function(){i[t]=An[n],++a===o.length&&e(i)})))})),0===o.length&&e(i)}function Wn(n){var t=hn[n];delete hn[n];var r=t.rawConstructor,e=t.rawDestructor,i=t.fields;kn([n],i.map((function(n){return n.getterReturnType})).concat(i.map((function(n){return n.setterArgumentType}))),(function(n){var o={};return i.forEach((function(t,r){var e=t.fieldName,a=n[r],u=t.getter,c=t.getterContext,f=n[r+i.length],s=t.setter,l=t.setterContext;o[e]={read:function(n){return a.fromWireType(u(c,n))},write:function(n,t){var r=[];s(l,n,f.toWireType(r,t)),_n(r)}}})),[{name:t.name,fromWireType:function(n){var t={};for(var r in o)t[r]=o[r].read(n);return e(n),t},toWireType:function(n,t){for(var i in o)if(!(i in t))throw new TypeError('Missing field:  "'+i+'"');var a=r();for(i in o)o[i].write(a,t[i]);return null!==n&&n.push(e,a),a},argPackAdvance:8,readValueFromPointer:wn,destructorFunction:e}]}))}function Rn(n,t,r,e,i){}function Mn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}function On(){for(var n=new Array(256),t=0;t<256;++t)n[t]=String.fromCharCode(t);xn=n}var xn=void 0;function In(n){for(var t="",r=n;F[r];)t+=xn[F[r++]];return t}var Un=void 0;function Yn(n){throw new Un(n)}function Hn(n,t,r){if(r=r||{},!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=t.name;if(n||Yn('type "'+e+'" must have a positive integer typeid pointer'),An.hasOwnProperty(n)){if(r.ignoreDuplicateRegistrations)return;Yn("Cannot register type '"+e+"' twice")}if(An[n]=t,delete Cn[n],bn.hasOwnProperty(n)){var i=bn[n];delete bn[n],i.forEach((function(n){n()}))}}function zn(n,t,r,e,i){var o=Mn(r);Hn(n,{name:t=In(t),fromWireType:function(n){return!!n},toWireType:function(n,t){return t?e:i},argPackAdvance:8,readValueFromPointer:function(n){var e;if(1===r)e=E;else if(2===r)e=D;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+t);e=P}return this.fromWireType(e[n>>o])},destructorFunction:null})}var Vn=[],Nn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Bn(n){n>4&&0==--Nn[n].refcount&&(Nn[n]=void 0,Vn.push(n))}function Ln(){for(var n=0,t=5;t<Nn.length;++t)void 0!==Nn[t]&&++n;return n}function Gn(){for(var n=5;n<Nn.length;++n)if(void 0!==Nn[n])return Nn[n];return null}function Jn(){i.count_emval_handles=Ln,i.get_first_emval=Gn}function qn(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var t=Vn.length?Vn.pop():Nn.length;return Nn[t]={refcount:1,value:n},t}}function Xn(n,t){Hn(n,{name:t=In(t),fromWireType:function(n){var t=Nn[n].value;return Bn(n),t},toWireType:function(n,t){return qn(t)},argPackAdvance:8,readValueFromPointer:wn,destructorFunction:null})}function Zn(n){if(null===n)return"null";var t=typeof n;return"object"===t||"array"===t||"function"===t?n.toString():""+n}function $n(n,t){switch(t){case 2:return function(n){return this.fromWireType(k[n>>2])};case 3:return function(n){return this.fromWireType(W[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function Kn(n,t,r){var e=Mn(r);Hn(n,{name:t=In(t),fromWireType:function(n){return n},toWireType:function(n,t){if("number"!=typeof t&&"boolean"!=typeof t)throw new TypeError('Cannot convert "'+Zn(t)+'" to '+this.name);return t},argPackAdvance:8,readValueFromPointer:$n(t,e),destructorFunction:null})}function Qn(n,t,r,e,i){var o=t.length;o<2&&Yn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==t[1]&&null!==r,u=!1,c=1;c<t.length;++c)if(null!==t[c]&&void 0===t[c].destructorFunction){u=!0;break}var f="void"!==t[0].name,s=o-2,l=new Array(s),d=[],m=[];return function(){var r;arguments.length!==s&&Yn("function "+n+" called with "+arguments.length+" arguments, expected "+s+" args!"),m.length=0,d.length=a?2:1,d[0]=i,a&&(r=t[1].toWireType(m,this),d[1]=r);for(var o=0;o<s;++o)l[o]=t[o+2].toWireType(m,arguments[o]),d.push(l[o]);function c(n){if(u)_n(m);else for(var e=a?1:2;e<t.length;e++){var i=1===e?r:l[e-2];null!==t[e].destructorFunction&&t[e].destructorFunction(i)}if(f)return t[0].fromWireType(n)}return c(e.apply(null,d))}}function nt(n,t,r){if(void 0===n[t].overloadTable){var e=n[t];n[t]=function(){return n[t].overloadTable.hasOwnProperty(arguments.length)||Yn("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[t].overloadTable+")!"),n[t].overloadTable[arguments.length].apply(this,arguments)},n[t].overloadTable=[],n[t].overloadTable[e.argCount]=e}}function tt(n,t,r){i.hasOwnProperty(n)?((void 0===r||void 0!==i[n].overloadTable&&void 0!==i[n].overloadTable[r])&&Yn("Cannot register public name '"+n+"' twice"),nt(i,n,n),i.hasOwnProperty(r)&&Yn("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),i[n].overloadTable[r]=t):(i[n]=t,void 0!==r&&(i[n].numArguments=r))}function rt(n,t){for(var r=[],e=0;e<n;e++)r.push(P[(t>>2)+e]);return r}function et(n,t,r){i.hasOwnProperty(n)||jn("Replacing nonexistant public symbol"),void 0!==i[n].overloadTable&&void 0!==r?i[n].overloadTable[r]=t:(i[n]=t,i[n].argCount=r)}function it(n,t,r){var e=i["dynCall_"+n];return r&&r.length?e.apply(null,[t].concat(r)):e.call(null,t)}function ot(n,t,r){return n.includes("j")?it(n,t,r):R.get(t).apply(null,r)}function at(n,t){var r=[];return function(){r.length=arguments.length;for(var e=0;e<arguments.length;e++)r[e]=arguments[e];return ot(n,t,r)}}function ut(n,t){function r(){return n.includes("j")?at(n,t):R.get(t)}n=In(n);var e=r();return"function"!=typeof e&&Yn("unknown function pointer with signature "+n+": "+t),e}var ct=void 0;function ft(n){var t=Qt(n),r=In(t);return Kt(t),r}function st(n,t){var r=[],e={};function i(n){e[n]||An[n]||(Cn[n]?Cn[n].forEach(i):(r.push(n),e[n]=!0))}throw t.forEach(i),new ct(n+": "+r.map(ft).join([", "]))}function lt(n,t,r,e,i,o){var a=rt(t,r);n=In(n),i=ut(e,i),tt(n,(function(){st("Cannot call "+n+" due to unbound types",a)}),t-1),kn([],a,(function(r){var e=[r[0],null].concat(r.slice(1));return et(n,Qn(n,e,null,i,o),t-1),[]}))}function dt(n,t,r){switch(t){case 0:return r?function(n){return E[n]}:function(n){return F[n]};case 1:return r?function(n){return D[n>>1]}:function(n){return S[n>>1]};case 2:return r?function(n){return P[n>>2]}:function(n){return j[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}function mt(n,t,r,e,i){t=In(t),-1===i&&(i=4294967295);var o=Mn(r),a=function(n){return n};if(0===e){var u=32-8*r;a=function(n){return n<<u>>>u}}var c=t.includes("unsigned");Hn(n,{name:t,fromWireType:a,toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+Zn(r)+'" to '+this.name);if(r<e||r>i)throw new TypeError('Passing a number "'+Zn(r)+'" from JS side to C/C++ side to an argument of type "'+t+'", which is outside the valid range ['+e+", "+i+"]!");return c?r>>>0:0|r},argPackAdvance:8,readValueFromPointer:dt(t,o,0!==e),destructorFunction:null})}function pt(n,t,r){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];function i(n){var t=j,r=t[n>>=2],i=t[n+1];return new e(T,i,r)}Hn(n,{name:r=In(r),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})}function vt(n,t){var r="std::string"===(t=In(t));Hn(n,{name:t,fromWireType:function(n){var t,e=j[n>>2];if(r)for(var i=n+4,o=0;o<=e;++o){var a=n+4+o;if(o==e||0==F[a]){var u=w(i,a-i);void 0===t?t=u:(t+=String.fromCharCode(0),t+=u),i=a+1}}else{var c=new Array(e);for(o=0;o<e;++o)c[o]=String.fromCharCode(F[n+4+o]);t=c.join("")}return Kt(n),t},toWireType:function(n,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var e="string"==typeof t;e||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||Yn("Cannot pass non-string to std::string");var i=(r&&e?function(){return C(t)}:function(){return t.length})(),o=$t(4+i+1);if(j[o>>2]=i,r&&e)A(t,o+4,i+1);else if(e)for(var a=0;a<i;++a){var u=t.charCodeAt(a);u>255&&(Kt(o),Yn("String has UTF-16 code units that do not fit in 8 bits")),F[o+4+a]=u}else for(a=0;a<i;++a)F[o+4+a]=t[a];return null!==n&&n.push(Kt,o),o},argPackAdvance:8,readValueFromPointer:wn,destructorFunction:function(n){Kt(n)}})}function yt(n,t,r){var e,i,o,a,u;r=In(r),2===t?(e=O,i=x,a=I,o=function(){return S},u=1):4===t&&(e=U,i=Y,a=H,o=function(){return j},u=2),Hn(n,{name:r,fromWireType:function(n){for(var r,i=j[n>>2],a=o(),c=n+4,f=0;f<=i;++f){var s=n+4+f*t;if(f==i||0==a[s>>u]){var l=e(c,s-c);void 0===r?r=l:(r+=String.fromCharCode(0),r+=l),c=s+t}}return Kt(n),r},toWireType:function(n,e){"string"!=typeof e&&Yn("Cannot pass non-string to C++ string type "+r);var o=a(e),c=$t(4+o+t);return j[c>>2]=o>>u,i(e,c+4,o+t),null!==n&&n.push(Kt,c),c},argPackAdvance:8,readValueFromPointer:wn,destructorFunction:function(n){Kt(n)}})}function gt(n,t,r,e,i,o){hn[n]={name:In(t),rawConstructor:ut(r,e),rawDestructor:ut(i,o),fields:[]}}function ht(n,t,r,e,i,o,a,u,c,f){hn[n].fields.push({fieldName:In(t),getterReturnType:r,getter:ut(e,i),getterContext:o,setterArgumentType:a,setter:ut(u,c),setterContext:f})}function _t(n,t){Hn(n,{isVoid:!0,name:t=In(t),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,t){}})}function wt(n){n>4&&(Nn[n].refcount+=1)}var bt={};function At(n){var t=bt[n];return void 0===t?In(n):t}function Ct(n){return qn(At(n))}function Tt(n,t){var r=An[n];return void 0===r&&Yn(t+" has unknown type "+ft(n)),r}function Et(n,t){return qn((n=Tt(n,"_emval_take_value")).readValueFromPointer(t))}function Ft(){on()}function Dt(n,t,r){F.copyWithin(n,t,t+r)}function St(n){try{return p.grow(n-T.byteLength+65535>>>16),B(p.buffer),1}catch(t){}}function Pt(n){var t=F.length,r=2147483648;if((n>>>=0)>r)return!1;for(var e=1;e<=4;e*=2){var i=t*(1+.2/e);if(i=Math.min(i,n+100663296),St(Math.min(r,N(Math.max(n,i),65536))))return!0}return!1}var jt={};function kt(){return u||"./this.program"}function Wt(){if(!Wt.strings){var n={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:kt()};for(var t in jt)void 0===jt[t]?delete n[t]:n[t]=jt[t];var r=[];for(var t in n)r.push(t+"="+n[t]);Wt.strings=r}return Wt.strings}var Rt={mappings:{},buffers:[null,[],[]],printChar:function(n,t){var r=Rt.buffers[n];0===t||10===t?((1===n?v:y)(_(r,0)),r.length=0):r.push(t)},varargs:void 0,get:function(){return Rt.varargs+=4,P[Rt.varargs-4>>2]},getStr:function(n){return w(n)},get64:function(n,t){return n}};function Mt(n,t){var r=0;return Wt().forEach((function(e,i){var o=t+r;P[n+4*i>>2]=o,V(e,o),r+=e.length+1})),0}function Ot(n,t){var r=Wt();P[n>>2]=r.length;var e=0;return r.forEach((function(n){e+=n.length+1})),P[t>>2]=e,0}function xt(n){return 0}function It(n,t,r,e,i){}function Ut(n,t,r,e){for(var i=0,o=0;o<r;o++){for(var a=P[t+8*o>>2],u=P[t+(8*o+4)>>2],c=0;c<u;c++)Rt.printChar(n,F[a+c]);i+=u}return P[e>>2]=i,0}function Yt(n){return P[tr()>>2]=n,n}function Ht(n){return Yt(52),-1}function zt(n){}function Vt(n){return n%4==0&&(n%100!=0||n%400==0)}function Nt(n,t){for(var r=0,e=0;e<=t;r+=n[e++]);return r}var Bt=[31,29,31,30,31,30,31,31,30,31,30,31],Lt=[31,28,31,30,31,30,31,31,30,31,30,31];function Gt(n,t){for(var r=new Date(n.getTime());t>0;){var e=Vt(r.getFullYear()),i=r.getMonth(),o=(e?Bt:Lt)[i];if(!(t>o-r.getDate()))return r.setDate(r.getDate()+t),r;t-=o-r.getDate()+1,r.setDate(1),i<11?r.setMonth(i+1):(r.setMonth(0),r.setFullYear(r.getFullYear()+1))}return r}function Jt(n,t,r,e){var i=P[e+40>>2],o={tm_sec:P[e>>2],tm_min:P[e+4>>2],tm_hour:P[e+8>>2],tm_mday:P[e+12>>2],tm_mon:P[e+16>>2],tm_year:P[e+20>>2],tm_wday:P[e+24>>2],tm_yday:P[e+28>>2],tm_isdst:P[e+32>>2],tm_gmtoff:P[e+36>>2],tm_zone:i?w(i):""},a=w(r),u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var c in u)a=a.replace(new RegExp(c,"g"),u[c]);var f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s=["January","February","March","April","May","June","July","August","September","October","November","December"];function l(n,t,r){for(var e="number"==typeof n?n.toString():n||"";e.length<t;)e=r[0]+e;return e}function d(n,t){return l(n,t,"0")}function m(n,t){function r(n){return n<0?-1:n>0?1:0}var e;return 0===(e=r(n.getFullYear()-t.getFullYear()))&&0===(e=r(n.getMonth()-t.getMonth()))&&(e=r(n.getDate()-t.getDate())),e}function p(n){switch(n.getDay()){case 0:return new Date(n.getFullYear()-1,11,29);case 1:return n;case 2:return new Date(n.getFullYear(),0,3);case 3:return new Date(n.getFullYear(),0,2);case 4:return new Date(n.getFullYear(),0,1);case 5:return new Date(n.getFullYear()-1,11,31);case 6:return new Date(n.getFullYear()-1,11,30)}}function v(n){var t=Gt(new Date(n.tm_year+1900,0,1),n.tm_yday),r=new Date(t.getFullYear(),0,4),e=new Date(t.getFullYear()+1,0,4),i=p(r),o=p(e);return m(i,t)<=0?m(o,t)<=0?t.getFullYear()+1:t.getFullYear():t.getFullYear()-1}var y={"%a":function(n){return f[n.tm_wday].substring(0,3)},"%A":function(n){return f[n.tm_wday]},"%b":function(n){return s[n.tm_mon].substring(0,3)},"%B":function(n){return s[n.tm_mon]},"%C":function(n){return d((n.tm_year+1900)/100|0,2)},"%d":function(n){return d(n.tm_mday,2)},"%e":function(n){return l(n.tm_mday,2," ")},"%g":function(n){return v(n).toString().substring(2)},"%G":function(n){return v(n)},"%H":function(n){return d(n.tm_hour,2)},"%I":function(n){var t=n.tm_hour;return 0==t?t=12:t>12&&(t-=12),d(t,2)},"%j":function(n){return d(n.tm_mday+Nt(Vt(n.tm_year+1900)?Bt:Lt,n.tm_mon-1),3)},"%m":function(n){return d(n.tm_mon+1,2)},"%M":function(n){return d(n.tm_min,2)},"%n":function(){return"\n"},"%p":function(n){return n.tm_hour>=0&&n.tm_hour<12?"AM":"PM"},"%S":function(n){return d(n.tm_sec,2)},"%t":function(){return"\t"},"%u":function(n){return n.tm_wday||7},"%U":function(n){var t=new Date(n.tm_year+1900,0,1),r=0===t.getDay()?t:Gt(t,7-t.getDay()),e=new Date(n.tm_year+1900,n.tm_mon,n.tm_mday);if(m(r,e)<0){var i=Nt(Vt(e.getFullYear())?Bt:Lt,e.getMonth()-1)-31,o=31-r.getDate()+i+e.getDate();return d(Math.ceil(o/7),2)}return 0===m(r,t)?"01":"00"},"%V":function(n){var t,r=new Date(n.tm_year+1900,0,4),e=new Date(n.tm_year+1901,0,4),i=p(r),o=p(e),a=Gt(new Date(n.tm_year+1900,0,1),n.tm_yday);return m(a,i)<0?"53":m(o,a)<=0?"01":(t=i.getFullYear()<n.tm_year+1900?n.tm_yday+32-i.getDate():n.tm_yday+1-i.getDate(),d(Math.ceil(t/7),2))},"%w":function(n){return n.tm_wday},"%W":function(n){var t=new Date(n.tm_year,0,1),r=1===t.getDay()?t:Gt(t,0===t.getDay()?1:7-t.getDay()+1),e=new Date(n.tm_year+1900,n.tm_mon,n.tm_mday);if(m(r,e)<0){var i=Nt(Vt(e.getFullYear())?Bt:Lt,e.getMonth()-1)-31,o=31-r.getDate()+i+e.getDate();return d(Math.ceil(o/7),2)}return 0===m(r,t)?"01":"00"},"%y":function(n){return(n.tm_year+1900).toString().substring(2)},"%Y":function(n){return n.tm_year+1900},"%z":function(n){var t=n.tm_gmtoff,r=t>=0;return t=(t=Math.abs(t)/60)/60*100+t%60,(r?"+":"-")+String("0000"+t).slice(-4)},"%Z":function(n){return n.tm_zone},"%%":function(){return"%"}};for(var c in y)a.includes(c)&&(a=a.replace(new RegExp(c,"g"),y[c](o)));var g=Xt(a,!1);return g.length>t?0:(z(g,n),g.length-1)}function qt(n,t,r,e){return Jt(n,t,r,e)}function Xt(n,t,r){var e=r>0?r:C(n)+1,i=new Array(e),o=b(n,i,0,i.length);return t&&(i.length=o),i}Pn=i.InternalError=Sn(Error,"InternalError"),On(),Un=i.BindingError=Sn(Error,"BindingError"),Jn(),ct=i.UnboundTypeError=Sn(Error,"UnboundTypeError");var Zt={__cxa_allocate_exception:mn,__cxa_atexit:vn,__cxa_throw:gn,_embind_finalize_value_object:Wn,_embind_register_bigint:Rn,_embind_register_bool:zn,_embind_register_emval:Xn,_embind_register_float:Kn,_embind_register_function:lt,_embind_register_integer:mt,_embind_register_memory_view:pt,_embind_register_std_string:vt,_embind_register_std_wstring:yt,_embind_register_value_object:gt,_embind_register_value_object_field:ht,_embind_register_void:_t,_emval_decref:Bn,_emval_incref:wt,_emval_new_cstring:Ct,_emval_take_value:Et,abort:Ft,emscripten_memcpy_big:Dt,emscripten_resize_heap:Pt,environ_get:Mt,environ_sizes_get:Ot,fd_close:xt,fd_seek:It,fd_write:Ut,raise:Ht,setTempRet0:zt,strftime_l:qt};ln(),i.___wasm_call_ctors=function(){return(i.___wasm_call_ctors=i.asm.__wasm_call_ctors).apply(null,arguments)};var $t=i._malloc=function(){return($t=i._malloc=i.asm.malloc).apply(null,arguments)},Kt=i._free=function(){return(Kt=i._free=i.asm.free).apply(null,arguments)},Qt=i.___getTypeName=function(){return(Qt=i.___getTypeName=i.asm.__getTypeName).apply(null,arguments)};i.___embind_register_native_and_builtin_types=function(){return(i.___embind_register_native_and_builtin_types=i.asm.__embind_register_native_and_builtin_types).apply(null,arguments)};var nr,tr=i.___errno_location=function(){return(tr=i.___errno_location=i.asm.__errno_location).apply(null,arguments)};function rr(n){function r(){nr||(nr=!0,i.calledRun=!0,g||(X(),t(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),Z()))}nn>0||(q(),nn>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),r()}),1)):r()))}if(i.stackSave=function(){return(i.stackSave=i.asm.stackSave).apply(null,arguments)},i.stackRestore=function(){return(i.stackRestore=i.asm.stackRestore).apply(null,arguments)},i.stackAlloc=function(){return(i.stackAlloc=i.asm.stackAlloc).apply(null,arguments)},i.dynCall_vij=function(){return(i.dynCall_vij=i.asm.dynCall_vij).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.dynCall_jiji).apply(null,arguments)},i.dynCall_viijii=function(){return(i.dynCall_viijii=i.asm.dynCall_viijii).apply(null,arguments)},i.dynCall_iiiiij=function(){return(i.dynCall_iiiiij=i.asm.dynCall_iiiiij).apply(null,arguments)},i.dynCall_iiiiijj=function(){return(i.dynCall_iiiiijj=i.asm.dynCall_iiiiijj).apply(null,arguments)},i.dynCall_iiiiiijj=function(){return(i.dynCall_iiiiiijj=i.asm.dynCall_iiiiiijj).apply(null,arguments)},tn=function n(){nr||rr(),nr||(tn=n)},i.run=rr,i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return rr(),n.ready},t.exports=e;var o=i.exports,a=Object.freeze(Object.assign(Object.create(null),i.exports,{default:o}));n.i3s=a}));
