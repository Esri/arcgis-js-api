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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../support/mathUtils","../lib/localOrigin","../lib/ModelDirtySet","../lib/RenderGeometry","../lib/Util"],(function(t,e,r,i,o,n,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Model=void 0;var d=a.assert,s=a.logWithBase,u=function(){function t(){this.dirtySet=new o(this),this._id2origin={},this._content=new Array(5);for(var t=0;t<5;++t)this._content[t]=new Map}return t.prototype.getAll=function(t){var e=this._content[t];return d(void 0!==e),e},t.prototype.get=function(t,e){return this.getAll(t).get(e)},t.prototype.add=function(t,e){var r=this._content[t];d(void 0!==r);var i=e.id;d(!r.has(i),"Model/Stage already contains object to be added"),r.set(i,e),0===t&&this.notifyDirty(e,"layerAdded")},t.prototype.remove=function(t,e){var r=this._content[t];d(void 0!==r);var i=r.get(e);return d(void 0!==i,"Model/Stage doesn't contain object to be removed"),r.delete(e),4===t&&i.unload(),0===t&&this.notifyDirty(i,"layerRemoved"),i},t.prototype.getDirtySet=function(){return this.dirtySet},t.prototype.notifyDirty=function(t,e,r){this.dirtySet.handleUpdate(t,e,r)},t.prototype.getOrigin=function(t,e,r){void 0===r&&(r=10);var o=0,n=e*r/1e4;n>1&&(o=Math.ceil(s(n,2)));var a=1e4*Math.pow(2,o),d=Math.round(t[0]/a),u=Math.round(t[1]/a),l=Math.round(t[2]/a),c=o+"_"+d+"_"+u+"_"+l,g=this._id2origin[c];return null==g&&(g=i.fromValues(d*a,u*a,l*a,c),this._id2origin[c]=g),g},t.prototype.getGeometryRenderGeometries=function(t,e,i){var o=e.geometry,a=t.getCombinedStaticTransformation(e),d=r.maxScale(a),s=e.origin,u=new n(o.data,o.boundingInfo,e.material,a,e.shaderTransformation,d,t.castShadow);u.uniqueName=e.id,u.origin=s||this.getOrigin(u.center,u.bsRadius),u.instanceParameters=e.instanceParameters,i.push(u)},t.prototype.updateRenderGeometryTransformation=function(t,e,r){var i=t.getCombinedStaticTransformation(e,r.transformation);r.updateTransformation(i);var o=this.getOrigin(r.center,r.bsRadius);return r.origin!==o},t.prototype.getStats=function(){for(var t={},e=0;e<5;++e)t[e]=this.getAll(e).size;return{contentTypes:t,dirtySet:this.dirtySet.formatDebugInfo()}},t.prototype.validateObject=function(t){for(var e=t.geometryRecords,r=0;r<e.length;++r){var i=e[r];d(null!=this.get(2,i.geometry.id)),d(null!=this.get(3,i.material.id))}},t.prototype.validateLayer=function(t){for(var e=t.getObjects(),r=0;r<e.length;++r){var i=this.get(1,e[r].id);d(null!=i)}},t}();e.Model=u}));