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

define(["require","exports","dojo/string","../../support/mathUtils","../lib/localOrigin","../lib/ModelContentType","../lib/ModelDirtySet","../lib/RenderGeometry","../lib/Util"],function(t,e,i,n,r,o,a,d,s){var l=s.assert,g=s.logWithBase;return function(){function t(){var t=this;this.dirtySet=new a(this),this._uniqueIdx=0,this._id2origin={},this._content=new Map,o.allModelContentTypes.forEach(function(e){t._content.set(e,new Map)})}return t.prototype.getAll=function(t){var e=this._content.get(t);return l(void 0!==e),e},t.prototype.get=function(t,e){return this.getAll(t).get(e)},t.prototype.add=function(t,e){var i=this._content.get(t);l(void 0!==i);var n=e.id;l(!i.has(n),"Model/Stage already contains object to be added"),i.set(n,e),0===t&&this.notifyDirty(e,"layerAdded")},t.prototype.remove=function(t,e){var i=this._content.get(t);l(void 0!==i);var n=i.get(e);return l(void 0!==n,"Model/Stage doesn't contain object to be removed"),i.delete(e),4===t&&n.unload(),0===t&&this.notifyDirty(n,"layerRemoved"),n},t.prototype.getDirtySet=function(){return this.dirtySet},t.prototype.notifyDirty=function(t,e,i){this.dirtySet.handleUpdate(t,e,i)},t.prototype.getOrigin=function(t,e,i){void 0===i&&(i=10);var n=0,o=e*i/1e4;o>1&&(n=Math.ceil(g(o,2)));var a=1e4*Math.pow(2,n),d=Math.round(t[0]/a),s=Math.round(t[1]/a),l=Math.round(t[2]/a),u=n+"_"+d+"_"+s+"_"+l,h=this._id2origin[u];return null==h&&(h=r.fromValues(d*a,s*a,l*a,u),this._id2origin[u]=h),h},t.prototype.getGeometryRenderGeometries=function(t,e,i){var r=t.id,o=e.geometry,a=t.getCombinedStaticTransformation(e),s=n.maxScale(a),l=e.origin,g=e.id,u=this._uniqueIdx++,h=new d(o.data,o.boundingInfo,e.material,a,e.shaderTransformation,s,t.castShadow,!!o.singleUse,r,g,u);h.origin=l||this.getOrigin(h.center,h.bsRadius),h.instanceParameters=e.instanceParameters,i.push(h)},t.prototype.updateRenderGeometryTransformation=function(t,e,i){t.getCombinedStaticTransformation(e,i.transformation),i.updateTransformation(i.transformation);var n=this.getOrigin(i.center,i.bsRadius);return i.origin!==n},t.prototype.formatDebugInfo=function(t){var e=[];if(t){e[0]="<table>";for(var n=0,r=o.allModelContentTypes;n<r.length;n++){var a=r[n];e[0]+="<tr><td>"+a+'</td><td style="text-align: right">'+this.getAll(a).size+"</td></tr>"}e[0]+="</table>",e[1]=this.dirtySet.formatDebugInfo(!0)}else{e[0]="";for(var d=0,s=o.allModelContentTypes;d<s.length;d++){var a=s[d];e[0]+=i.pad(String(this.getAll(a).size),6," ")+" "+a+", "}e[1]=this.dirtySet.formatDebugInfo(!1)}return e},t.prototype.validateObject=function(t){for(var e=t.geometryRecords,i=0;i<e.length;++i){var n=e[i];l(null!=this.get(2,n.geometry.id)),l(null!=this.get(3,n.material.id))}},t.prototype.validateLayer=function(t){for(var e=t.getObjects(),i=0;i<e.length;++i){var n=this.get(1,e[i].id);l(null!=n)}},t}()});