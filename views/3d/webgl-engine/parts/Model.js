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

define(["require","exports","../../../../core/string","../../support/mathUtils","../lib/localOrigin","../lib/ModelContentType","../lib/ModelDirtySet","../lib/RenderGeometry","../lib/Util"],(function(t,e,r,o,n,i,a,d,s){Object.defineProperty(e,"__esModule",{value:!0});var l=s.assert,g=s.logWithBase,u=function(){function t(){var t=this;this.dirtySet=new a(this),this._id2origin={},this._content=new Map,i.allModelContentTypes.forEach((function(e){return t._content.set(e,new Map)}))}return t.prototype.getAll=function(t){var e=this._content.get(t);return l(void 0!==e),e},t.prototype.get=function(t,e){return this.getAll(t).get(e)},t.prototype.add=function(t,e){var r=this._content.get(t);l(void 0!==r);var o=e.id;l(!r.has(o),"Model/Stage already contains object to be added"),r.set(o,e),0===t&&this.notifyDirty(e,"layerAdded")},t.prototype.remove=function(t,e){var r=this._content.get(t);l(void 0!==r);var o=r.get(e);return l(void 0!==o,"Model/Stage doesn't contain object to be removed"),r.delete(e),4===t&&o.unload(),0===t&&this.notifyDirty(o,"layerRemoved"),o},t.prototype.getDirtySet=function(){return this.dirtySet},t.prototype.notifyDirty=function(t,e,r){this.dirtySet.handleUpdate(t,e,r)},t.prototype.getOrigin=function(t,e,r){void 0===r&&(r=10);var o=0,i=e*r/1e4;i>1&&(o=Math.ceil(g(i,2)));var a=1e4*Math.pow(2,o),d=Math.round(t[0]/a),s=Math.round(t[1]/a),l=Math.round(t[2]/a),u=o+"_"+d+"_"+s+"_"+l,h=this._id2origin[u];return null==h&&(h=n.fromValues(d*a,s*a,l*a,u),this._id2origin[u]=h),h},t.prototype.getGeometryRenderGeometries=function(t,e,r){var n=e.geometry,i=t.getCombinedStaticTransformation(e),a=o.maxScale(i),s=e.origin,l=new d(n.data,n.boundingInfo,e.material,i,e.shaderTransformation,a,t.castShadow);l.uniqueName=e.id,l.origin=s||this.getOrigin(l.center,l.bsRadius),l.instanceParameters=e.instanceParameters,r.push(l)},t.prototype.updateRenderGeometryTransformation=function(t,e,r){var o=t.getCombinedStaticTransformation(e,r.transformation);r.updateTransformation(o);var n=this.getOrigin(r.center,r.bsRadius);return r.origin!==n},t.prototype.formatDebugInfo=function(t){var e=[];if(t){e[0]="<table>";for(var o=0,n=i.allModelContentTypes;o<n.length;o++){var a=n[o];e[0]+="<tr><td>"+a+'</td><td style="text-align: right">'+this.getAll(a).size+"</td></tr>"}e[0]+="</table>",e[1]=this.dirtySet.formatDebugInfo(!0)}else{e[0]="";for(var d=0,s=i.allModelContentTypes;d<s.length;d++){a=s[d];e[0]+=r.padStart(String(this.getAll(a).size),6," ")+" "+a+", "}e[1]=this.dirtySet.formatDebugInfo(!1)}return e},t.prototype.validateObject=function(t){for(var e=t.geometryRecords,r=0;r<e.length;++r){var o=e[r];l(null!=this.get(2,o.geometry.id)),l(null!=this.get(3,o.material.id))}},t.prototype.validateLayer=function(t){for(var e=t.getObjects(),r=0;r<e.length;++r){var o=this.get(1,e[r].id);l(null!=o)}},t}();e.Model=u}));