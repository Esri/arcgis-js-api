/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define((function(){"use strict";return function(){function e(e){this.readFile=e}var t=e.prototype;return t.resolveIncludes=function(e){return this.resolve(e)},t.resolve=function(e,t=new Map){if(t.has(e))return t.get(e);const n=this.read(e);if(!n)throw new Error(`cannot find shader file ${e}`);const r=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let s=r.exec(n);const i=[];for(;null!=s;)i.push({path:s[1],start:s.index,length:s[0].length}),s=r.exec(n);let o=0,c="";return i.forEach((e=>{c+=n.slice(o,e.start),c+=t.has(e.path)?"":this.resolve(e.path,t),o=e.start+e.length})),c+=n.slice(o),t.set(e,c),c},t.read=function(e){return this.readFile(e)},e}()}));
