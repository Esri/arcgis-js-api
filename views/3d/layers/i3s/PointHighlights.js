// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../../../../core/SetUtils","../../webgl-engine/lib/Object3DStateSet"],(function(e,t,i,n,o){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){this.context=e,this.highlights=new Set}return Object.defineProperty(e.prototype,"hasHighlights",{get:function(){return this.highlights.size>0},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.highlights=null},e.prototype.add=function(e){var t=this,i=new h(e);return this.highlights.add(i),this.enableSet(i),{remove:function(){return t.removeSet(i)},pause:function(){t.disableSet(i)},resume:function(){t.enableSet(i)}}},e.prototype.removeSet=function(e){this.disableSet(e),this.highlights.delete(e)},e.prototype.enableSet=function(e){var t=this;e.enabled||(e.enabled=!0,this.context.forEachNode((function(i){return t.enableSetForNode(e,i)})))},e.prototype.enableSetForNode=function(e,t){var i=this;if(e.enabled){var n=e.ids.get(t.id);n&&n.forEach((function(n){return i.context.addHighlight(t,n,e.id)}))}},e.prototype.disableSet=function(e){var t=this;e.enabled&&(e.enabled=!1,this.context.forEachNode((function(i){return t.disableSetForNode(e,i)})))},e.prototype.disableSetForNode=function(e,t){e.enabled||this.context.removeHighlight(t,e.id)},e.prototype.nodeAdded=function(e){var t=this;this.highlights.forEach((function(i){return t.enableSetForNode(i,e)}))},e.prototype.nodeRemoved=function(e){var t=this;this.highlights.forEach((function(i){return t.disableSetForNode(i,e)}))},e.prototype.removeAll=function(){var e=this;this.highlights.forEach((function(t){return e.disableSet(t)}))},e}();t.PointHighlights=r;var h=function(){function e(e){this.id=o.generateObject3DStateId(0),this.ids=new Map,this.enabled=!1;for(var t=0,n=e;t<n.length;t++){var r=n[t];i.isSome(r)&&this.add(r.nodeId,r.pointId)}}return e.prototype.add=function(e,t){var i=this.ids.get(e);i?i.add(t):this.ids.set(e,n.createSetFromValues([t]))},e}()}));