// COPYRIGHT © 2017 Esri
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

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/asyncUtils","../../../../core/ObjectPool","../../support/aaBoundingBox","../../support/aaBoundingRect"],function(i,t,r,e,a,n,o,s){var h=new n(Array,function(i){return o.set(i,o.ZERO)},null,10,5),c=s.create(),l=function(){function i(i,t,r){this.graphics3DSymbol=t,this.graphic=i,this._graphics=r,this._labelGraphics=[],this.addedToSpatialIndex=!1}return i.prototype.initialize=function(i,t){this._graphics.forEach(function(r){r&&r.initialize(i,t)})},i.prototype.clearLabelGraphics=function(){this._labelGraphics.forEach(function(i){return i.destroy()}),this._labelGraphics.length=0},i.prototype.addLabelGraphic=function(i,t,r){this._labelGraphics.push(i),i.initialize(t,r)},i.prototype.isDraped=function(){for(var i=0;i<this._graphics.length;i++){var t=this._graphics[i];if(t&&t.isDraped())return!0}return!1},i.prototype.areVisibilityFlagsSet=function(i,t){for(var r=!0,e=0;e<this._graphics.length;e++){var a=this._graphics[e];a&&(r=r&&a.areVisibilityFlagsSet(i,t))}for(var e=0;e<this._labelGraphics.length;e++){var a=this._labelGraphics[e];a&&(r=r&&a.areVisibilityFlagsSet(i,t))}return r},i.prototype.setVisibilityFlag=function(i,t){var r=!1,e=function(e){e&&(r=e.setVisibilityFlag(i,t)||r)};return this._graphics.forEach(e),this._labelGraphics.forEach(e),r},i.prototype.destroy=function(){var i=function(i){i&&i.destroy()};this._graphics.forEach(i),this._graphics.length=0,this._labelGraphics.forEach(i),this._labelGraphics.length=0},i.prototype.getBSRadius=function(){return this._graphics.reduce(function(i,t){return Math.max(i,t.getBSRadius())},0)},i.prototype.getCenterObjectSpace=function(){return this._graphics[0].getCenterObjectSpace()},i.prototype.getProjectedBoundingBox=function(i,t,n,l){return e(this,void 0,void 0,function(){var p=this;return r(this,function(u){switch(u.label){case 0:return l||(l={boundingBox:null,requiresDrapedElevation:!1}),l.boundingBox?o.set(l.boundingBox,o.NEGATIVE_INFINITY):l.boundingBox=o.create(o.NEGATIVE_INFINITY),l.requiresDrapedElevation=!1,[4,a.forEach(this._graphics,function(a){return e(p,void 0,void 0,function(){var e,s,c;return r(this,function(r){switch(r.label){case 0:return a?(e=a.isDraped()?t:i,s=h.acquire(),[4,a.getProjectedBoundingBox(e,n,s)]):[2];case 1:return c=r.sent(),isFinite(c[2])&&isFinite(c[5])||(l.requiresDrapedElevation=!0),c&&o.expand(l.boundingBox,s),h.release(s),[2]}})})})];case 1:return u.sent(),o.allFinite(l.boundingBox)||s.allFinite(o.toRect(l.boundingBox,c))?[2,l]:[2,null]}})})},i.prototype.mustAlignToTerrain=function(){for(var i=this._graphics.length,t=0;i>t;t++){var r=this._graphics[t];if(r&&r.mustAlignToTerrain())return!0}for(var e=this._labelGraphics.length,t=0;e>t;t++){var r=this._labelGraphics[t];if(r&&r.mustAlignToTerrain())return!0}return!1},i.prototype.alignWithElevation=function(i,t){for(var r=this._graphics.length,e=0;r>e;e++){var a=this._graphics[e];a&&a.alignWithElevation(i,t)}for(var n=this._labelGraphics.length,e=0;n>e;e++){var a=this._labelGraphics[e];a&&this._labelGraphics[e].alignWithElevation(i,t)}},i.prototype.setDrawOrder=function(i,t,r){r[this.graphics3DSymbol.symbol.id]=!0;for(var e=this._graphics.length,a=0;e>a;a++){var n=this._graphics[a];if(n){var o=i+(1-(1+a)/e);n.setDrawOrder(o,t,r)}}},i}();return l});