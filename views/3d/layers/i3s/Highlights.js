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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/arrayUtils"],function(t,e,i){var o=function(){function t(t){this.ids=new Set,this.paused=!1,this.options=t}return t}();return function(){function t(t){this.highlights=[],this.collection=t.collection,this.forAllFeatures=t.forAllFeatures,this.forAllFeaturesOfNode=t.forAllFeaturesOfNode}return t.prototype.destroy=function(){var t=this;this.highlights.forEach(function(e){return t.releaseSet(e)}),this.highlights=null},t.prototype.acquireSet=function(t){var e=this,n=new o(t);return this.highlights.push(n),{set:n,handle:{remove:function(){e.releaseSet(n),i.removeUnordered(e.highlights,n)},pause:function(){e.releaseSet(n),n.paused=!0},resume:function(){n.paused=!1,e.initializeSet(n)}}}},t.prototype.setFeatureIds=function(t,e){e.forEach(function(e){return t.ids.add(e)}),this.initializeSet(t)},t.prototype.initializeSet=function(t){var e=this;this.forAllFeatures(function(i,o,n){return t.ids.has(i)&&e.collection.addComponentHighlight(n.objectHandle,o),1})},t.prototype.releaseSet=function(t){var e=this;this.forAllFeatures(function(i,o,n){return t.ids.has(i)&&e.collection.removeComponentHighlight(n.objectHandle,o),1})},t.prototype.objectCreated=function(t){var e=this;this.highlights.forEach(function(i){i.paused||e.forAllFeaturesOfNode(t,function(o,n){return i.ids.has(o)&&e.collection.addComponentHighlight(t.objectHandle,n),1})})},t.prototype.objectDeleted=function(t){this.collection.clearHighlights(t.objectHandle)},t}()});