// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./Graphics3DHighlightSet"],function(i,t,h){return function(){function i(){this.graphicsCore=null,this.highlights=[]}return i.prototype.destroy=function(){this.highlights.forEach(function(i){return i.highlightSet.removeAll()}),this.highlights=null},i.prototype.setup=function(i){this.graphicsCore=i},i.prototype.acquireSet=function(i,t){var e=this,o=new h(i,t);return this.highlights.push(o),{set:o,handle:{remove:function(){return e.releaseSet(o)},pause:function(){o.highlightSet.removeAll(),o.paused=!0},resume:function(){o.paused=!1,e.initializeSet(o)}}}},i.prototype.releaseSet=function(i){i.highlightSet.removeAll();var t=this.highlights?this.highlights.indexOf(i):-1;-1!==t&&this.highlights.splice(t,1)},i.prototype.setUids=function(i,t){for(var h=this.graphicsCore.graphics3DGraphics,e=0,o=t;e<o.length;e++){var r=o[e];i.ids.add(r);var n=h.get(r);n&&n.addHighlight(i.highlightSet,i.options)}},i.prototype.setObjectIds=function(i,t){t.forEach(function(t){return i.ids.add(t)}),this.initializeSet(i)},i.prototype.addGraphic=function(i){this.highlights.forEach(function(t){!t.paused&&t.hasGraphic(i)&&i.addHighlight(t.highlightSet,t.options)})},i.prototype.removeGraphic=function(i){this.highlights.forEach(function(t){t.hasGraphic(i)&&i.removeHighlight(t.highlightSet)})},i.prototype.allGraphicsDeleted=function(){this.highlights.forEach(function(i){return i.highlightSet.removeAll()})},i.prototype.initializeSet=function(i){var t=this.graphicsCore.graphics3DGraphics;i.objectIdField?t.forEach(function(t){t&&i.hasGraphic(t)&&t.addHighlight(i.highlightSet,i.options)}):i.ids.forEach(function(h){var e=t.get(h);e&&e.addHighlight(i.highlightSet,i.options)})},i}()});