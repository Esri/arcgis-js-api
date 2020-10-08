// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","./expression"],(function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.HasID=r.Slice=r.Length=r.IndexOf=r.In=r.Has=r.Get=r.At=void 0;var n=function(){function e(e,r){this.index=e,this.array=r}return e.parse=function(r){if(3!==r.length)throw new Error('"at" expects 2 arguments.');return new e(t.createExpression(r[1]),t.createExpression(r[2]))},e.prototype.evaluate=function(e,r){var t=this.index.evaluate(e,r),n=this.array.evaluate(e,r);if(t<0||t>=n.length)throw new Error('"at" index out of bounds.');if(t!==Math.floor(t))throw new Error('"at" index must be an integer.');return n[t]},e}();r.At=n;var i=function(){function e(e,r){this.key=e,this.obj=r}return e.parse=function(r){switch(r.length){case 2:return new e(t.createExpression(r[1]));case 3:return new e(t.createExpression(r[1]),t.createExpression(r[2]));default:throw new Error('"get" expects 1 or 2 arguments')}},e.prototype.evaluate=function(e,r){var t=this.key.evaluate(e,r);return this.obj?this.obj.evaluate(e,r)[t]:e.values[t]},e}();r.Get=i;var o=function(){function e(e,r){this.key=e,this.obj=r}return e.parse=function(r){switch(r.length){case 2:return new e(t.createExpression(r[1]));case 3:return new e(t.createExpression(r[1]),t.createExpression(r[2]));default:throw new Error('"has" expects 1 or 2 arguments')}},e.prototype.evaluate=function(e,r){var t=this.key.evaluate(e,r);return this.obj?t in this.obj.evaluate(e,r):void 0!==e.values[t]},e}();r.Has=o;var a=function(){function e(e,r){this.key=e,this.vals=r}return e.parse=function(r){if(3!==r.length)throw new Error('"in" expects 2 arguments');return new e(t.createExpression(r[1]),t.createExpression(r[2]))},e.prototype.evaluate=function(e,r){var t=this.key.evaluate(e,r);return-1!==this.vals.evaluate(e,r).indexOf(t)},e}();r.In=a;var s=function(){function e(e,r,t){this.item=e,this.array=r,this.from=t}return e.parse=function(r){if(r.length<3||r.length>4)throw new Error('"index-of" expects 3 or 4 arguments.');var n=t.createExpression(r[1]),i=t.createExpression(r[2]);return 4===r.length?new e(n,i,t.createExpression(r[3])):new e(n,i)},e.prototype.evaluate=function(e,r){var t=this.item.evaluate(e,r),n=this.array.evaluate(e,r);if(this.from){var i=this.from.evaluate(e,r);if(i!==Math.floor(i))throw new Error('"index-of" index must be an integer.');return n.indexOf(t,i)}return n.indexOf(t)},e}();r.IndexOf=s;var u=function(){function e(e){this.arg=e}return e.parse=function(r){if(2!==r.length)throw new Error('"length" expects 2 arguments.');return new e(t.createExpression(r[1]))},e.prototype.evaluate=function(e,r){var t=this.arg.evaluate(e,r);if("string"==typeof t)return t.length;if(Array.isArray(t))return t.length;throw new Error('"length" expects string or array.')},e}();r.Length=u;var h=function(){function e(e,r,t){this.array=e,this.from=r,this.to=t}return e.parse=function(r){if(r.length<3||r.length>4)throw new Error('"slice" expects 2 or 3 arguments.');var n=t.createExpression(r[1]),i=t.createExpression(r[2]);return 4===r.length?new e(n,i,t.createExpression(r[3])):new e(n,i)},e.prototype.evaluate=function(e,r){var t=this.array.evaluate(e,r),n=this.from.evaluate(e,r);if(n<0||n>=t.length)throw new Error('"slice" index out of bounds.');if(n!==Math.floor(n))throw new Error('"slice" index must be an integer.');if(this.to){var i=this.to.evaluate(e,r);if(i<0||i>=t.length)throw new Error('"slice" index out of bounds.');if(i!==Math.floor(i))throw new Error('"slice" index must be an integer.');return t.slice(n,i)}return t.slice(n)},e}();r.Slice=h;var c=function(){function e(){}return e.parse=function(r){if(1!==r.length)throw new Error('"has-id" expects no arguments');return new e},e.prototype.evaluate=function(e,r){return void 0!==e.id},e}();r.HasID=c}));