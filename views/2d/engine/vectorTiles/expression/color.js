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

define(["require","exports","../../../../../Color","./expression"],(function(r,e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ToRgba=e.Rgba=e.Rgb=void 0;var a=function(){function r(r){this.args=r}return r.parse=function(e){if(4!==e.length)throw new Error('"rgb" expects 3 arguments.');return new r(e.slice(1).map((function(r){return n.createExpression(r)})))},r.prototype.evaluate=function(r,e){var t=this.args[1].evaluate(r,e),n=this.args[2].evaluate(r,e),a=this.args[3].evaluate(r,e);return"rgb("+Math.round(t)+","+Math.round(n)+","+Math.round(a)+")"},r}();e.Rgb=a;var o=function(){function r(r){this.args=r}return r.parse=function(r){if(5!==r.length)throw new Error('"rgba" expects 4 arguments.');var e=r.slice(1).map((function(r){return n.createExpression(r)}));return new a(e)},r.prototype.evaluate=function(r,e){var t=this.args[1].evaluate(r,e),n=this.args[2].evaluate(r,e),a=this.args[3].evaluate(r,e),o=this.args[4].evaluate(r,e);return"rgb("+Math.round(t)+","+Math.round(n)+","+Math.round(a)+","+o+")"},r}();e.Rgba=o;var u=function(){function r(r){this.color=r}return r.parse=function(e){if(2!==e.length)throw new Error('"to-rgba" expects 1 argument.');return new r(n.createExpression(e[1]))},r.prototype.evaluate=function(r,e){return new t(this.color.evaluate(r,e)).toRgba()},r}();e.ToRgba=u}));