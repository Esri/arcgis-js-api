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

define(["require","exports","../../../../core/iteratorUtils","../../../../core/maybe","../../webgl-engine/lib/HighlightUtils"],function(t,e,i,o,n){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){this.context=t,this.highlights=new Set}return Object.defineProperty(t.prototype,"hasHighlights",{get:function(){return this.highlights.size>0},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.highlights=null},t.prototype.add=function(t,e){var i=this,o=new h(t,e);return this.highlights.add(o),this.enableSet(o),{remove:function(){return i.removeSet(o)},pause:function(){i.disableSet(o)},resume:function(){i.enableSet(o)}}},t.prototype.removeSet=function(t){this.disableSet(t),this.highlights.delete(t)},t.prototype.enableSet=function(t){var e=this;t.enabled||(t.enabled=!0,this.context.forEachNode(function(i){return e.enableSetForNode(t,i)}))},t.prototype.enableSetForNode=function(t,e){var i=this;if(t.enabled){var o=t.ids.get(e.id);o&&o.forEach(function(o){return i.context.addHighlight(e,o,t.options,t.id)})}},t.prototype.disableSet=function(t){var e=this;t.enabled&&(t.enabled=!1,this.context.forEachNode(function(i){return e.disableSetForNode(t,i)}))},t.prototype.disableSetForNode=function(t,e){t.enabled||this.context.removeHighlight(e,t.id)},t.prototype.nodeAdded=function(t){var e=this;this.highlights.forEach(function(i){return e.enableSetForNode(i,t)})},t.prototype.nodeRemoved=function(t){var e=this;this.highlights.forEach(function(i){return e.disableSetForNode(i,t)})},t.prototype.removeAll=function(){var t=this;this.highlights.forEach(function(e){return t.disableSet(e)})},t}();e.PointHighlights=r;var h=function(){function t(t,e){this.options=e,this.id=n.generateHighlightId(),this.ids=new Map,this.enabled=!1;for(var i=0,r=t;i<r.length;i++){var h=r[i];o.isSome(h)&&this.add(h.nodeId,h.pointId)}}return t.prototype.add=function(t,e){var o=this.ids.get(t);o?o.add(e):this.ids.set(t,i.SetFromValues([e]))},t}()});