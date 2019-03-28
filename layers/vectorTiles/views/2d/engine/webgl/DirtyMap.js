// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","exports","./Utils"],function(t,i,r){function e(t,i,r){t.allDirty||(null!=t.from&&null!=t.count?(t.from=Math.min(t.from,i),t.count=Math.max(t.from+t.count,i+r)-t.from):(t.from=i,t.count=r))}Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function t(){this._dirties=r.createGeometryData(void 0,function(t){return{indices:{from:null,count:null,allDirty:!1}}},function(t,i){return{vertices:{from:null,count:null,allDirty:!1}}})}return t.prototype.markAllClean=function(){for(var t=0,i=this._dirties;t<i.length;t++){var r=i[t];r.data.indices.from=null,r.data.indices.count=null,r.data.indices.allDirty=!1;for(var e in r.buffers)r.buffers[e].data.vertices.from=null,r.buffers[e].data.vertices.count=null,r.buffers[e].data.vertices.allDirty=!1}},t.prototype.markAllDirty=function(){for(var t=0,i=this._dirties;t<i.length;t++){var r=i[t];r.data.indices.allDirty=!0;for(var e in r.buffers)r.buffers[e].data.vertices.allDirty=!0}},t.prototype.forEach=function(t){for(var i=new Map,r=0;r<this._dirties.length;++r){var e=this._dirties[r],n=new Map;for(var a in e.buffers){var l=e.buffers[a].data.vertices;(l.allDirty||null!=l.from&&null!=l.count)&&n.set(a,l)}var o=e.data.indices,s=void 0;s=o.allDirty||null!=o.from&&null!=o.count?{indices:o,vertices:n}:{indices:void 0,vertices:n},(s.indices||s.vertices.size>0)&&i.set(r,s)}i.forEach(function(i,r){t({indices:i.indices||null,vertices:i.vertices.size>0?i.vertices:null},r)})},t.prototype.markDirtyIndices=function(t,i,r){e(this._dirties[t].data.indices,i,r)},t.prototype.markDirtyVertices=function(t,i,r,n){e(this._dirties[t].buffers[i].data.vertices,r,n)},t}();i.default=n});