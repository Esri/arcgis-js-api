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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","./Utils"],function(t,r,i){function n(t,r,i){if(!t.allDirty)if(null!=t.from&&null!=t.count){var e=Math.min(t.from,r),n=Math.max(t.from+t.count,r+i)-e;t.from=e,t.count=n}else t.from=r,t.count=i}Object.defineProperty(r,"__esModule",{value:!0});var e=function(){function t(){this._dirties=i.createGeometryData(function(t){return{indices:{from:null,count:null,allDirty:!1}}},function(t,r){return{vertices:{from:null,count:null,allDirty:!1}}})}return t.prototype.markAllClean=function(){for(var t=0,r=this._dirties;t<r.length;t++){var i=r[t];for(var e in i.data.indices.from=null,i.data.indices.count=null,i.data.indices.allDirty=!1,i.buffers)i.buffers[e].data.vertices.from=null,i.buffers[e].data.vertices.count=null,i.buffers[e].data.vertices.allDirty=!1}},t.prototype.markAllDirty=function(){for(var t=0,r=this._dirties;t<r.length;t++){var i=r[t];for(var e in i.data.indices.allDirty=!0,i.buffers)i.buffers[e].data.vertices.allDirty=!0}},t.prototype.forEach=function(t){for(var r=0;r<this._dirties.length;++r){var i=this._dirties[r],e={};for(var n in i.buffers){var l=i.buffers[n].data.vertices;(l.allDirty||null!=l.from&&null!=l.count&&0<l.count)&&(e[n]=l)}var a=i.data.indices,o=void 0;((o=a.allDirty||null!=a.from&&null!=a.count&&0<a.count?{indices:a,vertices:e}:{indices:null,vertices:e}).indices||0<Object.keys(o).length)&&t(o,r)}},t.prototype.markDirtyIndices=function(t,r,i){n(this._dirties[t].data.indices,r,i)},t.prototype.markDirtyVertices=function(t,r,i,e){n(this._dirties[t].buffers[r].data.vertices,i,e)},t}();r.default=e});