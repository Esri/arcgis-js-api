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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","./Graphics3DHighlightSet"],function(t,i,h){return function(){function t(){this.graphicsCore=null,this.highlights=[]}return t.prototype.destroy=function(){this.highlights.forEach(function(t){return t.highlightSet.removeAll()}),this.highlights=null},t.prototype.setup=function(t){this.graphicsCore=t},t.prototype.acquireSet=function(t,i){var e=this,r=new h(t,i);return this.highlights.push(r),{set:r,handle:{remove:function(){return e.releaseSet(r)}}}},t.prototype.releaseSet=function(t){t.highlightSet.removeAll();var i=this.highlights?this.highlights.indexOf(t):-1;-1!==i&&this.highlights.splice(i,1)},t.prototype.setUids=function(t,i){var h=this.graphicsCore.graphics;i.forEach(function(i){t.ids.add(i);var e=h[i];e&&e.addHighlight(t.highlightSet,t.options)})},t.prototype.setObjectIds=function(t,i){var h=this.graphicsCore.graphics;i.forEach(function(i){return t.ids.add(i)});for(var e in h){var r=h[e];r&&t.hasGraphic(r)&&r.addHighlight(t.highlightSet,t.options)}},t.prototype.graphicCreated=function(t){this.highlights.forEach(function(i){i.hasGraphic(t)&&t.addHighlight(i.highlightSet,i.options)})},t.prototype.graphicDeleted=function(t){this.highlights.forEach(function(i){i.hasGraphic(t)&&t.removeHighlight(i.highlightSet)})},t.prototype.allGraphicsDeleted=function(){this.highlights.forEach(function(t){return t.highlightSet.removeAll()})},t}()});