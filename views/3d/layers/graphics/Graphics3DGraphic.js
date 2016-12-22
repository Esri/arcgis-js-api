// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../support/aaBoundingBox","../../support/aaBoundingRect"],function(i,t,r,a){var e=r.create(),s=a.create(),n=function(){function i(i,t,r){this.graphics3DSymbol=t,this.graphic=i,this._graphics=r,this._labelGraphics=[],this.addedToSpatialIndex=!1}return i.prototype.initialize=function(i,t){this._graphics.forEach(function(r){r&&r.initialize(i,t)})},i.prototype.clearLabelGraphics=function(){this._labelGraphics.forEach(function(i){return i.destroy()}),this._labelGraphics.length=0},i.prototype.addLabelGraphic=function(i,t,r){this._labelGraphics.push(i),i.initialize(t,r)},i.prototype.isDraped=function(){for(var i=0;i<this._graphics.length;i++){var t=this._graphics[i];if(t&&t.isDraped())return!0}return!1},i.prototype.areVisibilityFlagsSet=function(i,t){for(var r=!0,a=0;a<this._graphics.length;a++){var e=this._graphics[a];e&&(r=r&&e.areVisibilityFlagsSet(i,t))}for(var a=0;a<this._labelGraphics.length;a++){var e=this._labelGraphics[a];e&&(r=r&&e.areVisibilityFlagsSet(i,t))}return r},i.prototype.setVisibilityFlag=function(i,t){var r=!1,a=function(a){a&&(r=a.setVisibilityFlag(i,t)||r)};return this._graphics.forEach(a),this._labelGraphics.forEach(a),r},i.prototype.destroy=function(){var i=function(i){i&&i.destroy()};this._graphics.forEach(i),this._graphics.length=0,this._labelGraphics.forEach(i),this._labelGraphics.length=0},i.prototype.getBSRadius=function(){return this._graphics.reduce(function(i,t){return Math.max(i,t.getBSRadius())},0)},i.prototype.getCenterObjectSpace=function(){return this._graphics[0].getCenterObjectSpace()},i.prototype.getProjectedBoundingBox=function(i,t,n){n?r.set(n,r.NEGATIVE_INFINITY):n=r.create(r.NEGATIVE_INFINITY);for(var h=0;h<this._graphics.length;h++){var o=this._graphics[h];if(o){var c=o.isDraped()?t:i;o&&o.getProjectedBoundingBox(c,e)&&r.expand(n,o.isDraped()?r.toRect(e,s):e)}}return r.allFinite(n)||a.allFinite(r.toRect(n,s))?n:null},i.prototype.mustAlignToTerrain=function(){for(var i=this._graphics.length,t=0;i>t;t++){var r=this._graphics[t];if(r&&r.mustAlignToTerrain())return!0}for(var a=this._labelGraphics.length,t=0;a>t;t++){var r=this._labelGraphics[t];if(r&&r.mustAlignToTerrain())return!0}return!1},i.prototype.alignWithElevation=function(i,t){for(var r=this._graphics.length,a=0;r>a;a++){var e=this._graphics[a];e&&e.alignWithElevation(i,t)}for(var s=this._labelGraphics.length,a=0;s>a;a++){var e=this._labelGraphics[a];e&&this._labelGraphics[a].alignWithElevation(i,t)}},i.prototype.setDrawOrder=function(i,t,r){r[this.graphics3DSymbol.symbol.id]=!0;for(var a=this._graphics.length,e=0;a>e;e++){var s=this._graphics[e];if(s){var n=i+(1-(1+e)/a);s.setDrawOrder(n,t,r)}}},i}();return n});