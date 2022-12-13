/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../core/lang","../../../geometry/support/jsonUtils","../CIMCursor"],(function(e,t,n,r){"use strict";let i=function(){function e(){}return e.local=function(){return null===e.instance&&(e.instance=new e),e.instance},e.prototype.execute=function(e,t,n,r){return new o(e,t,n)},e}();i.instance=null;let o=function(){function e(e,t,n){this._inputGeometries=e,this._reverse=void 0===t.reverse||t.reverse}return e.prototype.next=function(){let e=this._inputGeometries.next();for(;e;){if(!this._reverse)return e;if(n.isPolyline(e)){const n=t.clone(e);return r.reverseMultipath(n.paths),n}e=this._inputGeometries.next()}return null},e}();e.EffectReverse=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
