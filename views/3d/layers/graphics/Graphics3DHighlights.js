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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./Graphics3DHighlightSet"],function(i,t,h){return function(){function i(){this.graphicsCore=null,this.highlights=[]}return i.prototype.destroy=function(){this.highlights.forEach(function(i){return i.highlightSet.removeAll()}),this.highlights=null},i.prototype.initialize=function(i){this.graphicsCore=i},i.prototype.acquireSet=function(i,t){var e=this,r=new h(i,t);return this.highlights.push(r),{set:r,handle:{remove:function(){return e.releaseSet(r)}}}},i.prototype.releaseSet=function(i){i.highlightSet.removeAll();var t=this.highlights?this.highlights.indexOf(i):-1;-1!==t&&this.highlights.splice(t,1)},i.prototype.setUids=function(i,t){var h=this.graphicsCore.graphics;t.forEach(function(t){i.ids.add(t);var e=h[t];e&&e.addHighlight(i.highlightSet,i.options)})},i.prototype.setObjectIds=function(i,t){var h=this.graphicsCore.graphics;t.forEach(function(t){return i.ids.add(t)});for(var e in h){var r=h[e];r&&i.hasGraphic(r)&&r.addHighlight(i.highlightSet,i.options)}},i.prototype.graphicCreated=function(i){this.highlights.forEach(function(t){t.hasGraphic(i)&&i.addHighlight(t.highlightSet,t.options)})},i.prototype.graphicDeleted=function(i){this.highlights.forEach(function(t){t.hasGraphic(i)&&i.removeHighlight(t.highlightSet)})},i.prototype.allGraphicsDeleted=function(){this.highlights.forEach(function(i){return i.highlightSet.removeAll()})},i}()});