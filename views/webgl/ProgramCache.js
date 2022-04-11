/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/maybe","../../core/NestedMap","./Program"],(function(e,t,r,s,o){"use strict";let c=function(){function e(e){this._rctx=e,this._store=new s.NestedMap}var c=e.prototype;return c.dispose=function(){this._store.forEach((e=>e.forEach((e=>e.dispose())))),this._store.clear()},c.acquire=function(e,t,s,c){const i=this._store.get(e,t);if(r.isSome(i))return i.ref(),i;const n=new o.Program(this._rctx,e,t,s,c);return n.ref(),this._store.set(e,t,n),n},t._createClass(e,[{key:"test",get:function(){let e=0;return this._store.forEach((t=>t.forEach((t=>e+=t.hasGLName?2:1)))),{cachedWebGLObjects:e}}}]),e}();e.ProgramCache=c,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
