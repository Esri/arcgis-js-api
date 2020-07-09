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

define(["require","exports","../../support/mathUtils","../lib/localOrigin","../lib/ModelContentType","../lib/ModelDirtySet","../lib/RenderGeometry","../lib/Util"],(function(t,e,n,o,r,i,a,d){Object.defineProperty(e,"__esModule",{value:!0});var s=d.assert,l=d.logWithBase,u=function(){function t(){var t=this;this.dirtySet=new i(this),this._id2origin={},this._content=new Map,r.allModelContentTypes.forEach((function(e){return t._content.set(e,new Map)}))}return t.prototype.getAll=function(t){var e=this._content.get(t);return s(void 0!==e),e},t.prototype.get=function(t,e){return this.getAll(t).get(e)},t.prototype.add=function(t,e){var n=this._content.get(t);s(void 0!==n);var o=e.id;s(!n.has(o),"Model/Stage already contains object to be added"),n.set(o,e),0===t&&this.notifyDirty(e,"layerAdded")},t.prototype.remove=function(t,e){var n=this._content.get(t);s(void 0!==n);var o=n.get(e);return s(void 0!==o,"Model/Stage doesn't contain object to be removed"),n.delete(e),4===t&&o.unload(),0===t&&this.notifyDirty(o,"layerRemoved"),o},t.prototype.getDirtySet=function(){return this.dirtySet},t.prototype.notifyDirty=function(t,e,n){this.dirtySet.handleUpdate(t,e,n)},t.prototype.getOrigin=function(t,e,n){void 0===n&&(n=10);var r=0,i=e*n/1e4;i>1&&(r=Math.ceil(l(i,2)));var a=1e4*Math.pow(2,r),d=Math.round(t[0]/a),s=Math.round(t[1]/a),u=Math.round(t[2]/a),c=r+"_"+d+"_"+s+"_"+u,g=this._id2origin[c];return null==g&&(g=o.fromValues(d*a,s*a,u*a,c),this._id2origin[c]=g),g},t.prototype.getGeometryRenderGeometries=function(t,e,o){var r=e.geometry,i=t.getCombinedStaticTransformation(e),d=n.maxScale(i),s=e.origin,l=new a(r.data,r.boundingInfo,e.material,i,e.shaderTransformation,d,t.castShadow);l.uniqueName=e.id,l.origin=s||this.getOrigin(l.center,l.bsRadius),l.instanceParameters=e.instanceParameters,o.push(l)},t.prototype.updateRenderGeometryTransformation=function(t,e,n){var o=t.getCombinedStaticTransformation(e,n.transformation);n.updateTransformation(o);var r=this.getOrigin(n.center,n.bsRadius);return n.origin!==r},t.prototype.getStats=function(){var t=this;return{contentTypes:r.allModelContentTypes.reduce((function(e,n){return e[n]=t.getAll(n).size,e}),{}),dirtySet:this.dirtySet.formatDebugInfo()}},t.prototype.validateObject=function(t){for(var e=t.geometryRecords,n=0;n<e.length;++n){var o=e[n];s(null!=this.get(2,o.geometry.id)),s(null!=this.get(3,o.material.id))}},t.prototype.validateLayer=function(t){for(var e=t.getObjects(),n=0;n<e.length;++n){var o=this.get(1,e[n].id);s(null!=o)}},t}();e.Model=u}));