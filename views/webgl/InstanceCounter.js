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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){for(this._current=new Array,this._max=new Array,this._allocations=new Map;this._current.length<6;)this._current.push(0),this._max.push(0)}return e.prototype.increment=function(e,t){var o=++this._current[e];this._max[e]=Math.max(o,this._max[e])},e.prototype.decrement=function(e,t){--this._current[e]},Object.defineProperty(e.prototype,"max",{get:function(){return this._max},enumerable:!0,configurable:!0}),e.prototype.printResourceCount=function(){console.log("Live objects:"),console.log("Textures: "+this._current[0]),console.log("Buffers: "+this._current[1]),console.log("VAOs: "+this._current[2]),console.log("Programs: "+this._current[3]),console.log("Framebuffers: "+this._current[4]),console.log("Renderbuffers: "+this._current[5]),this._allocations.size>0&&(console.log(this._allocations.size+" live object allocations:"),this._allocations.forEach((function(e){return console.log(e)})))},e}();t.InstanceCounter=o}));