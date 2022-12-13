// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","./polyfill/tsSupport/assign","./polyfill/tsSupport/spreadarray","./polyfill/tsSupport/extends","./polyfill/promiseUtils"],(function(t,n,r,e,o,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ScopeMarshalledFunction=n.NativeFunction=n.wrapModuleScopedResponse=n.ArcadeFunction=void 0;var i=function(){};function u(t,n,r){if(t instanceof i&&!(t instanceof c)){var e=new c;return e.fn=t,e.parameterEvaluator=r,e.context=n,e}return t}n.ArcadeFunction=i,n.wrapModuleScopedResponse=u;var l=function(t){function n(n){var r=t.call(this)||this;return r.fn=n,r}return o(n,t),n.prototype.createFunction=function(t){var n=this;return function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return n.fn(t,{preparsed:!0,arguments:r})}},n.prototype.call=function(t,n){return this.fn(t,n)},n.prototype.marshalledCall=function(t,n,r,e){var o=this;return e(t,n,(function(n,l,s){s=s.map((function(n){return n instanceof i&&!(n instanceof c)?u(n,t,e):n}));var p=o.call(r,{args:s});return a.isPromiseLike(p)?p.then((function(t){return u(t,r,e)})):p}))},n}(i);n.NativeFunction=l;var c=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.fn=null,n.context=null,n}return o(n,t),n.prototype.createFunction=function(t){return this.fn.createFunction(this.context)},n.prototype.call=function(t,n){return this.fn.marshalledCall(t,n,this.context,this.parameterEvaluator)},n.prototype.marshalledCall=function(t,n,r){return this.fn.marshalledCall(t,n,this.context,this.parameterEvaluator)},n}(i);n.ScopeMarshalledFunction=c}));