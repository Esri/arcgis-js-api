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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","dojo/string","../../lib/gl-matrix","../lib/ModelContentType","../lib/ModelDirtySet","../lib/RenderGeometry","../lib/Util"],function(t,e,i,r,o,n,a,d){var l=d.assert,s=d.logWithBase;return function(){function t(){this.dirtySet=new n(this),this._uniqueIdx=0,this._id2origin={},this.content={};for(var t in o)this.content[o[t]]={}}return t.prototype.getAll=function(t){var e=this.content[t];return l(void 0!==e),e},t.prototype.get=function(t,e){return this.getAll(t)[e]},t.prototype.add=function(t,e){var i=this.content[t];l(void 0!==i);var r=e.id;l(null==i[r],"Model/Stage already contains object to be added"),i[r]=e,t===o.LAYER&&this.notifyDirty(t,e,"layerAdded")},t.prototype.remove=function(t,e){var i=this.content[t];l(void 0!==i);var r=i[e];return l(void 0!==r,"Model/Stage doesn't contain object to be removed"),delete i[e],t===o.TEXTURE&&r.unload(),t===o.LAYER&&this.notifyDirty(t,r,"layerRemoved"),r},t.prototype.getDirtySet=function(){return this.dirtySet},t.prototype.notifyDirty=function(t,e,i,r){this.dirtySet.handleUpdate(e,i,r)},t.prototype.getOrigin=function(t,e,i){void 0===i&&(i=10);var o=0,n=e*i/1e4;n>1&&(o=Math.ceil(s(n,2)));var a=1e4*Math.pow(2,o),d=Math.round(t[0]/a),l=Math.round(t[1]/a),g=Math.round(t[2]/a),u=o+"_"+d+"_"+l+"_"+g,h=this._id2origin[u];return null==h&&(h={vec3:r.vec3d.createFrom(d*a,l*a,g*a),id:u},this._id2origin[u]=h),h},t.prototype.getGeometryRenderGeometries=function(t,e,i){var o=t.id,n=e.geometry,d=t.getCombinedStaticTransformation(e),l=r.mat4d.maxScale(d),s=e.origin,g=e.id,u=this._uniqueIdx++,h=new a(n.data,n.boundingInfo,e.materials[0],d,e.customTransformation,l,t.getCastShadow(),!!n.singleUse,o,g,u);h.origin=s||this.getOrigin(h.center,h.bsRadius),h.instanceParameters=e.instanceParameters,i.push(h)},t.prototype.updateRenderGeometryTransformation=function(t,e,i){t.getCombinedStaticTransformation(e,i.transformation),i.updateTransformation(i.transformation)},t.prototype.formatDebugInfo=function(t){var e=[];if(t){e[0]="<table>";for(var r in o){var n=o[r];e[0]+="<tr><td>"+n+'</td><td style="text-align: right">'+Object.keys(this.getAll(n)).length+"</td></tr>"}e[0]+="</table>",e[1]=this.dirtySet.formatDebugInfo(!0)}else{e[0]="";for(var r in o){var n=o[r];e[0]+=i.pad(String(Object.keys(this.getAll(n)).length),6," ")+" "+n+", "}e[1]=this.dirtySet.formatDebugInfo(!1)}return e},t.prototype.validateContent=function(){var t=this.getAll(o.OBJECT);for(var e in t)this.validateObject(t[e]);var i=this.getAll(o.LAYER);for(var r in i)this.validateLayer(i[r]);var n=this.getAll(o.MATERIAL);for(var a in n)this.validateMaterial(n[a])},t.prototype.validateObject=function(t){for(var e=t.geometryRecords,i=0;i<e.length;++i){var r=e[i];l(null!=this.get(o.GEOMETRY,r.geometry.id)),l(1===r.materials.length,"object materials do not match geometry groups"),l(null!=this.get(o.MATERIAL,r.materials[0].id))}},t.prototype.validateLayer=function(t){for(var e=t.getObjects(),i=0;i<e.length;++i){var r=this.get(o.OBJECT,e[i].id);l(null!=r)}},t.prototype.validateMaterial=function(t){for(var e=t.getAllTextureIds(),i=0;i<e.length;++i){var r=this.get(o.TEXTURE,e[i]);l(null!=r)}},t.ContentType=o,t}()});