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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","./CollisionBucketEntry"],function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){this.neighbors=null,this._tiles=new Array(t);for(var e=0;e<t;e++)this._tiles[e]=new i.default}return Object.defineProperty(t.prototype,"isDirty",{get:function(){for(var t=0,e=this._tiles;t<e.length;t++){if(e[t].dirty)return!0}return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this._tiles.length},enumerable:!0,configurable:!0}),t.prototype.getTile=function(t){return this._tiles[t]},t.prototype.onRegisterLayer=function(t){this.invalidateRange(t),this._add(t)},t.prototype.onUnregisterLayer=function(t){this.invalidateRange(t),this._remove(t)},t.prototype.onLabelsRendered=function(){},t.prototype.invalidateRange=function(t){for(var e=t;e<this._tiles.length;e++)this._tiles[e].dirty=!0},t.prototype.add=function(t){this._add(t)},t.prototype.remove=function(t){this._remove(t)},t.prototype.canDelete=function(){return 0===this._tiles.length},t.prototype.clean=function(){for(var t=0,e=this._tiles;t<e.length;t++){e[t].dirty=!1}},t.prototype._add=function(t){var e=[];if(t>=this._tiles.length)return void this._tiles.push(new i.default);for(var n=0;n<this._tiles.length;n++)n===t&&e.push(new i.default),e.push(this._tiles[n]);this._tiles=e},t.prototype._remove=function(t){for(var e=[],i=0;i<this._tiles.length;i++)i!==t&&e.push(this._tiles[i]);this._tiles=e},t}();e.default=n});