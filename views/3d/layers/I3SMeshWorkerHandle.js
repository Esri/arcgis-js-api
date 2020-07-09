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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/Logger","../../../core/PooledArray","../support/projectionUtils","../support/WorkerHandle"],(function(e,t,r,o,n,i,a){Object.defineProperty(t,"__esModule",{value:!0});var s=o.getLogger("esri.views.3d.layers.I3SMeshWorkerHandle"),c=function(e){function t(t){return e.call(this,"SceneLayerWorker","process",t)||this}return r.__extends(t,e),t.prototype.getTransferList=function(e){return[e.geometryBuffer]},t.prototype.setModifications=function(e,t,r){var o={context:e,modifications:l(t,r)};this.broadcast(o,"setModifications")},t.prototype.setLegacySchema=function(e,t){var r=JSON.stringify(t);this.broadcast({context:e,jsonSchema:r},"setLegacySchema")},t.prototype.destroyContext=function(e){return this.broadcast(e,"destroyContext")},t}(a.WorkerHandle);t.I3SMeshWorkerHandle=c;var u=new n({deallocator:null}),f=[0,0,0];function l(e,t){u.clear();for(var r=function(e){var r="clip"===e.type?2:"mask"===e.type?1:0,o=e.geometry,n=function(e){return e};if(o.spatialReference){if(!i.canProject(o.spatialReference,t))return s.warn("Can't project modification polygon into layer spatial reference, ignoring modification"),"continue";n=function(e){return i.vectorToVector(e,o.spatialReference,f,t),f}}else o.hasZ||(f[2]=0,n=function(e){return f[0]=e[0],f[1]=e[1],f});u.push(r),u.push(o.rings.length);for(var a=0,c=o.rings;a<c.length;a++){var l=c[a];u.push(l.length);for(var p=0,h=l;p<h.length;p++){var g=n(h[p]);u.push(g[0]),u.push(g[1]),u.push(g[2])}}},o=0,n=e;o<n.length;o++){r(n[o])}u.push(3);for(var a=new Float64Array(u.length),c=0;c<u.length;++c)a[c]=u.getItemAt(c);return a}t.toWasmModification=l}));