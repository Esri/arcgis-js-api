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

define(["require","exports","./maybe","./nextTick"],(function(t,i,e,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.ObjectStack=void 0;var n=function(){function t(t){var i=this;this.allocator=t,this.items=[],this.itemsPtr=0,this.tickHandle=s.before((function(){return i.reset()})),this.grow()}return t.prototype.destroy=function(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=e.nullifyNonnullableForDispose(this.tickHandle)),this.items=e.nullifyNonnullableForDispose(this.items)},t.prototype.get=function(){return 0===this.itemsPtr&&s((function(){})),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]},t.prototype.reset=function(){var t=Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*r);this.items.length=Math.min(t,this.items.length),this.itemsPtr=0},t.prototype.grow=function(){for(var t=0;t<Math.max(8,Math.min(this.items.length,r));t++)this.items.push(this.allocator())},t}();i.ObjectStack=n;var r=1024;i.default=n}));