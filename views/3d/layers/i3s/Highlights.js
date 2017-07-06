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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../webgl-engine/lib/HighlightSet"],function(t,i,e){var h=function(){function t(t){this.highlightSet=new e,this.ids=new Set,this.options=t}return t}(),n=function(){function t(t){this.highlights=[],this.layerView=t}return t.prototype.destroy=function(){this.highlights.forEach(function(t){return t.highlightSet.removeAll()}),this.highlights=null},t.prototype.acquireSet=function(t){var i=this,e=new h(t);this.highlights.push(e);var n={remove:function(){return i.releaseSet(e)}};return{set:e,handle:n}},t.prototype.releaseSet=function(t){t.highlightSet.removeAll();var i=this.highlights?this.highlights.indexOf(t):-1;-1!==i&&this.highlights.splice(i,1)},t.prototype.setFeatureIds=function(t,i){i.forEach(function(i){return t.ids.add(i)}),this.layerView._forAllFeatures(function(i,e,h,n){if(t.ids.has(i)){var o=h.setComponentHighlight(n,e,t.options);t.highlightSet.addObject(h,o)}},null,!0)},t.prototype.objectCreated=function(t){var i=this;this.highlights.forEach(function(e){i.layerView._forAllFeaturesOfObject(t,function(t,i,h,n){if(e.ids.has(t)){var o=h.setComponentHighlight(n,i,e.options);e.highlightSet.addObject(h,o)}},!0)})},t.prototype.objectDeleted=function(t){this.highlights.forEach(function(i){i.highlightSet.removeObject(t)})},t.prototype.allObjectsDeleted=function(){this.highlights.forEach(function(t){return t.highlightSet.removeAll()})},t}();return n});