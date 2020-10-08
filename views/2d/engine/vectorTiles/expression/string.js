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

define(["require","exports","./expression"],(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.String=t.Concat=void 0;var r=function(){function e(e){this.args=e}return e.parse=function(t){return new e(t.slice(1).map((function(e){return n.createExpression(e)})))},e.prototype.evaluate=function(e,t){return this.args.map((function(n){return n.evaluate(e,t)})).join("")},e}();t.Concat=r;var o=function(){function e(e,t){this.arg=e,this.calculate=t}return e.parse=function(t){if(2!==t.length)throw new Error(t[0]+" expects 1 argument.");return new e(n.createExpression(t[1]),e.ops[t[0]])},e.prototype.evaluate=function(e,t){return this.calculate(this.arg.evaluate(e,t))},e.ops={downcase:function(e){return e.toLowerCase()},upcase:function(e){return e.toUpperCase()}},e}();t.String=o}));