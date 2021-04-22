/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const n=2654435761,e=2246822519,s=3266489917,i=668265263,o=374761393;function r(t){const n=[];for(let e=0,s=t.length;e<s;e++){let s=t.charCodeAt(e);s<128?n.push(s):s<2048?n.push(192|s>>6,128|63&s):s<55296||s>=57344?n.push(224|s>>12,128|s>>6&63,128|63&s):(e++,s=65536+((1023&s)<<10|1023&t.charCodeAt(e)),n.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|63&s))}return new Uint8Array(n)}let u=function(){function t(t){this.seed=t,this.totallen=0,this.bufs=[],this.init()}var u=t.prototype;return u.init=function(){return this.bufs=[],this.totallen=0,this},u.updateFloatArray=function(t){const n=[];for(const e of t)isNaN(e)?n.push("NaN"):e===1/0?n.push("Infinity"):e===-1/0?n.push("-Infinity"):0===e?n.push("0"):n.push(e.toString(16));this.update(r(n.join("")))},u.updateIntArray=function(t){const n=Int32Array.from(t);this.update(new Uint8Array(n.buffer))},u.updateUint8Array=function(t){this.update(Uint8Array.from(t))},u.updateWithString=function(t){return this.update(r(t))},u.update=function(t){return this.bufs.push(t),this.totallen+=t.length,this},u.digest=function(){const t=new Uint8Array(this.totallen);let n=0;for(const e of this.bufs)t.set(e,n),n+=e.length;return this.init(),this.xxHash32(t,this.seed)},u.xxHash32=function(t,r=0){const u=t;let h=r+o&4294967295,f=0;if(u.length>=16){const s=[r+n+e&4294967295,r+e&4294967295,r+0&4294967295,r-n&4294967295],i=t,o=i.length-16;let u=0;for(f=0;(4294967280&f)<=o;f+=4){const t=f,o=i[t+0]+(i[t+1]<<8),r=i[t+2]+(i[t+3]<<8),h=o*e+(r*e<<16);let a=s[u]+h&4294967295;a=a<<13|a>>>19;const c=65535&a,l=a>>>16;s[u]=c*n+(l*n<<16)&4294967295,u=u+1&3}h=(s[0]<<1|s[0]>>>31)+(s[1]<<7|s[1]>>>25)+(s[2]<<12|s[2]>>>20)+(s[3]<<18|s[3]>>>14)&4294967295}h=h+t.length&4294967295;const a=t.length-4;for(;f<=a;f+=4){const t=f,n=u[t+0]+(u[t+1]<<8),e=u[t+2]+(u[t+3]<<8);h=h+(n*s+(e*s<<16))&4294967295,h=h<<17|h>>>15,h=(65535&h)*i+((h>>>16)*i<<16)&4294967295}for(;f<u.length;++f){h+=u[f]*o,h=h<<11|h>>>21,h=(65535&h)*n+((h>>>16)*n<<16)&4294967295}return h^=h>>>15,h=((65535&h)*e&4294967295)+((h>>>16)*e<<16),h^=h>>>13,h=((65535&h)*s&4294967295)+((h>>>16)*s<<16),h^=h>>>16,h<0?h+4294967296:h},t}();t.XXH=u,Object.defineProperty(t,"__esModule",{value:!0})}));
