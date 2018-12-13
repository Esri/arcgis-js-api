// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","./nextTick"],function(t,i,e){Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function t(t,i){void 0===i&&(i=8);var r=this;this.allocator=t,this.items=[],this.itemsPtr=0,this.tickHandle=e.before(function(){return r.reset()}),this.grow(i)}return t.prototype.destroy=function(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=null)},t.prototype.get=function(){return 0===this.itemsPtr&&e(function(){}),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]},t.prototype.reset=function(){this.itemsPtr=0},t.prototype.grow=function(t){void 0===t&&(t=this.items.length);for(var i=0;i<Math.max(8,Math.min(t,s));i++)this.items.push(this.allocator())},t}();i.ObjectStack=r;var s=1024;i.default=r});