/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let t=function(){function e(e){this._readFile=e}var t=e.prototype;return t.resolveIncludes=function(e){return this._resolve(e)},t._resolve=function(e,t=new Map){if(t.has(e))return t.get(e);const n=this._read(e);if(!n)throw new Error(`cannot find shader file ${e}`);const r=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let s=r.exec(n);const i=[];for(;null!=s;)i.push({path:s[1],start:s.index,length:s[0].length}),s=r.exec(n);let o=0,l="";return i.forEach((e=>{l+=n.slice(o,e.start),l+=t.has(e.path)?"":this._resolve(e.path,t),o=e.start+e.length})),l+=n.slice(o),t.set(e,l),l},t._read=function(e){return this._readFile(e)},e}();e.ShaderCompiler=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
