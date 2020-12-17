/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(r){"use strict";let t=function(){function r(){this.errors=[],this.tolerant=!1}var t=r.prototype;return t.recordError=function(r){this.errors.push(r)},t.tolerate=function(r){if(!this.tolerant)throw r;this.recordError(r)},t.constructError=function(r,t){let e=new Error(r);try{throw e}catch(r){Object.create&&Object.defineProperty&&(e=Object.create(r),Object.defineProperty(e,"column",{value:t}))}return e},t.createError=function(r,t,e,o){const n="Line "+t+": "+o,c=this.constructError(n,e);return c.index=r,c.lineNumber=t,c.description=o,c},t.throwError=function(r,t,e,o){throw this.createError(r,t,e,o)},t.tolerateError=function(r,t,e,o){const n=this.createError(r,t,e,o);if(!this.tolerant)throw n;this.recordError(n)},r}();r.ErrorHandler=t,Object.defineProperty(r,"__esModule",{value:!0})}));
