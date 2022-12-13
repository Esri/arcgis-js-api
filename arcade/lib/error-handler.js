/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./types"],(function(r,t){"use strict";function o(r,o){const e=t.ParsingErrorMessages[r];return o?e.replace(/\${(.*?)}/g,((r,t)=>o[t]?.toString()??"")):e}let e=function(){function r(r=!1){this.tolerant=r,this.errors=[]}var e=r.prototype;return e.recordError=function(r){this.errors.push(r)},e.tolerate=function(r){if(!this.tolerant)throw r;this.recordError(r)},e.throwError=function(r){throw r.description=r.description??o(r.code,r.data),new t.ParsingError(r)},e.tolerateError=function(r){r.description=r.description??o(r.code,r.data);const e=new t.ParsingError(r);if(!this.tolerant)throw e;this.recordError(e)},r}();r.ErrorHandler=e,r.formatErrorDescription=o,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
