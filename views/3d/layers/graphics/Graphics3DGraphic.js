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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../../../core/declare","../../support/aaBoundingBox","../../support/aaBoundingRect"],function(i,t,r){var a=t.create(),s=r.create(),e=i(null,{constructor:function(i,t,r){this.graphics3DSymbol=t,this.graphic=i,this._graphics=r,this._labelGraphics=[],this.addedToSpatialIndex=!1},initialize:function(i,t,r){var a=function(i,t){t&&t.initialize(i,r)};this._graphics.forEach(a.bind(this,i)),t&&this._labelGraphics.forEach(a.bind(this,t))},addLabelGraphic:function(i){this._labelGraphics.push(i)},isDraped:function(){for(var i=0;i<this._graphics.length;i++){var t=this._graphics[i];if(t&&t.isDraped())return!0}return!1},areVisibilityFlagsSet:function(i,t){for(var r=!0,a=0;a<this._graphics.length;a++){var s=this._graphics[a];s&&(r=r&&s.areVisibilityFlagsSet(i,t))}for(a=0;a<this._labelGraphics.length;a++)s=this._labelGraphics[a],s&&(r=r&&s.areVisibilityFlagsSet(i,t));return r},setVisibilityFlag:function(i,t){var r=!1,a=function(a){a&&(r=a.setVisibilityFlag(i,t)||r)};return this._graphics.forEach(a),this._labelGraphics.forEach(a),r},destroy:function(){var i=function(i){i&&i.destroy()};this._graphics.forEach(i),this._graphics.length=0,this._labelGraphics.forEach(i),this._labelGraphics.length=0},getBSRadius:function(){var i=0,t=function(t){i=Math.max(i,t.getBSRadius())};return this._graphics.forEach(t),i},getCenterObjectSpace:function(){return this._graphics[0].getCenterObjectSpace()},getProjectedBoundingBox:function(i,e,h){h?t.set(h,t.NEGATIVE_INFINITY):h=t.create(t.NEGATIVE_INFINITY);for(var n=0;n<this._graphics.length;n++){var c=this._graphics[n];if(c){var l=c.isDraped()?e:i;c&&c.getProjectedBoundingBox(l,a)&&t.expand(h,c.isDraped()?t.toRect(a,s):a)}}return t.allFinite(h)||r.allFinite(t.toRect(h,s))?h:null},mustAlignToTerrain:function(){for(var i=this._graphics.length,t=0;i>t;t++){var r=this._graphics[t];if(r&&r.mustAlignToTerrain())return!0}var a=this._labelGraphics.length;for(t=0;a>t;t++)if(r=this._labelGraphics[t],r&&r.mustAlignToTerrain())return!0;return!1},alignWithElevation:function(i,t){for(var r=this._graphics.length,a=0;r>a;a++){var s=this._graphics[a];s&&s.alignWithElevation(i,t)}var e=this._labelGraphics.length;for(a=0;e>a;a++)s=this._labelGraphics[a],s&&this._labelGraphics[a].alignWithElevation(i,t)},setDrawOrder:function(i,t,r){r[this.graphics3DSymbol.symbol.id]=!0;for(var a=this._graphics.length,s=0;a>s;s++){var e=this._graphics[s];if(e){var h=i+(1-(1+s)/a);e.setDrawOrder(h,t,r)}}}});return e});