/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/maybe","../../core/NestedMap","./Program"],(function(e,t,r,o,s){"use strict";let c=function(){function e(e){this._rctx=e,this._store=new o.NestedMap}var c=e.prototype;return c.dispose=function(){this._store.forEach((e=>e.forEach((e=>e.dispose())))),this._store.clear()},c.acquire=function(e,t,o,c){const n=this._store.get(e,t);if(r.isSome(n))return n.ref(),n;const i=new s.Program(this._rctx,e,t,o,c);return i.ref(),this._store.set(e,t,i),i},t._createClass(e,[{key:"test",get:function(){let e=0;return this._store.forEach((t=>t.forEach((t=>e+=t.hasGLName?2:1)))),{cachedWebGLObjects:e}}}]),e}();e.ProgramCache=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
