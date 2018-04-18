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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/string","../lib/gl-matrix","../lib/ModelContentType","../lib/ModelDirtySet","../lib/RenderGeometry","../lib/Util"],function(t,e,i,r,o,n,a,d){var l=d.assert,s=r.vec3d,g=r.mat4d,u=d.logWithBase;return function(){function t(){this.dirtySet=new n(this),this._uniqueIdx=0,this._id2origin={},this.content={};for(var t in o)this.content[o[t]]={}}return t.prototype.getAll=function(t){var e=this.content[t];return l(void 0!==e),e},t.prototype.get=function(t,e){return this.getAll(t)[e]},t.prototype.add=function(t,e){var i=this.content[t];l(void 0!==i);var r=e.id;l(null==i[r],"Model/Stage already contains object to be added"),i[r]=e,t===o.LAYER&&this.notifyDirty(t,e,"layerAdded")},t.prototype.remove=function(t,e){var i=this.content[t];l(void 0!==i);var r=i[e];return l(void 0!==r,"Model/Stage doesn't contain object to be removed"),delete i[e],t===o.TEXTURE&&r.unload(),t===o.LAYER&&this.notifyDirty(t,r,"layerRemoved"),r},t.prototype.getDirtySet=function(){return this.dirtySet},t.prototype.notifyDirty=function(t,e,i,r){this.dirtySet.handleUpdate(e,i,r)},t.prototype.getOrigin=function(t,e,i){void 0===i&&(i=10);var r=0,o=e*i/1e4;o>1&&(r=Math.ceil(u(o,2)));var n=1e4*Math.pow(2,r),a=Math.round(t[0]/n),d=Math.round(t[1]/n),l=Math.round(t[2]/n),g=r+"_"+a+"_"+d+"_"+l,h=this._id2origin[g];return null==h&&(h={vec3:s.createFrom(a*n,d*n,l*n),id:g},this._id2origin[g]=h),h},t.prototype.getGeometryRenderGeometries=function(t,e,i){var r=t.id,o=e.geometry,n=o.getData(),d=!!o.singleUse,l=e.materials,s=e.instanceParameters,u=t.getCombinedStaticTransformation(e),h=g.maxScale(u),c=e.origin,f=o.getBoundingInfo(),v=e.id,y=this._uniqueIdx++,p=new a(n,f,l[0],u,e.customTransformation,h,t.getCastShadow(),d,r,v,y);p.origin=c||this.getOrigin(p.center,p.bsRadius),p.instanceParameters=s,i.push(p)},t.prototype.updateRenderGeometryTransformation=function(t,e,i){t.getCombinedStaticTransformation(e,i.transformation),i.updateTransformation(i.transformation)},t.prototype.formatDebugInfo=function(t){var e=[];if(t){e[0]="<table>";for(var r in o){var n=o[r];e[0]+="<tr><td>"+n+'</td><td style="text-align: right">'+Object.keys(this.getAll(n)).length+"</td></tr>"}e[0]+="</table>",e[1]=this.dirtySet.formatDebugInfo(!0)}else{e[0]="";for(var r in o){var n=o[r];e[0]+=i.pad(String(Object.keys(this.getAll(n)).length),6," ")+" "+n+", "}e[1]=this.dirtySet.formatDebugInfo(!1)}return e},t.prototype.validateContent=function(){var t=this.getAll(o.OBJECT);for(var e in t)this.validateObject(t[e]);var i=this.getAll(o.LAYER);for(var r in i)this.validateLayer(i[r]);var n=this.getAll(o.MATERIAL);for(var a in n)this.validateMaterial(n[a])},t.prototype.validateObject=function(t){for(var e=t.geometryRecords,i=0;i<e.length;++i){var r=e[i];l(null!=this.get(o.GEOMETRY,r.geometry.id)),l(1===r.materials.length,"object materials do not match geometry groups"),l(null!=this.get(o.MATERIAL,r.materials[0].id))}},t.prototype.validateLayer=function(t){for(var e=t.getObjects(),i=0;i<e.length;++i){var r=this.get(o.OBJECT,e[i].id);l(null!=r)}},t.prototype.validateMaterial=function(t){for(var e=t.getAllTextureIds(),i=0;i<e.length;++i){var r=this.get(o.TEXTURE,e[i]);l(null!=r)}},t.ContentType=o,t}()});