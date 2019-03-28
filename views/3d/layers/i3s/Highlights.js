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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../webgl-engine/lib/HighlightSet"],function(t,e,i){var h=function(){function t(t){this.highlightSet=new i,this.ids=new Set,this.paused=!1,this.options=t}return t}();return function(){function t(t){this.highlights=[],this.layerView=t}return t.prototype.destroy=function(){this.highlights.forEach(function(t){return t.highlightSet.removeAll()}),this.highlights=null},t.prototype.acquireSet=function(t){var e=this,i=new h(t);return this.highlights.push(i),{set:i,handle:{remove:function(){return e.releaseSet(i)},pause:function(){i.highlightSet.removeAll(),i.paused=!0},resume:function(){i.paused=!1,e.initializeSet(i)}}}},t.prototype.releaseSet=function(t){t.highlightSet.removeAll();var e=this.highlights?this.highlights.indexOf(t):-1;-1!==e&&this.highlights.splice(e,1)},t.prototype.setFeatureIds=function(t,e){e.forEach(function(e){return t.ids.add(e)}),this.initializeSet(t)},t.prototype.initializeSet=function(t){this.layerView._forAllFeatures(function(e,i,h,n){if(t.ids.has(e)){var o=h.engineObject.setComponentHighlight(n,i,t.options);t.highlightSet.addObject(h.engineObject,o)}},null,!0)},t.prototype.objectCreated=function(t){var e=this;this.highlights.forEach(function(i){i.paused||e.layerView._forAllFeaturesOfNode(e.layerView._getMetadata(t),function(e,h,n,o){if(i.ids.has(e)){var r=t.setComponentHighlight(o,h,i.options);i.highlightSet.addObject(t,r)}},!0)})},t.prototype.objectDeleted=function(t){this.highlights.forEach(function(e){e.highlightSet.removeObject(t)})},t.prototype.allObjectsDeleted=function(){this.highlights.forEach(function(t){return t.highlightSet.removeAll()})},t}()});