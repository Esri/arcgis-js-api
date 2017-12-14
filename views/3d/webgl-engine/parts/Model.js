// COPYRIGHT © 2017 Esri
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

define(["require","exports","dojo/string","../lib/ModelContentType","../lib/ModelDirtySet","../lib/RenderGeometry","../lib/Util","../lib/gl-matrix"],function(t,e,r,i,o,n,a,d){var l=a.assert,s=d.vec3d,g=d.mat4d,u=a.logWithBase,h=1e4,c=10,f=function(){function t(){this.dirtySet=new o(this),this._uniqueIdx=0,this._id2origin={},this.content={};for(var t in i)this.content[i[t]]={}}return t.prototype.getAll=function(t){var e=this.content[t];return l(void 0!==e),e},t.prototype.get=function(t,e){return this.getAll(t)[e]},t.prototype.add=function(t,e){var r=this.content[t];l(void 0!==r);var o=e.getId();l(null==r[o],"Model/Stage already contains object to be added"),r[o]=e,t===i.LAYER&&this.notifyDirty(t,e,"layerAdded")},t.prototype.remove=function(t,e){var r=this.content[t];l(void 0!==r);var o=r[e];return l(void 0!==o,"Model/Stage doesn't contain object to be removed"),delete r[e],t===i.TEXTURE&&o.unload(),t===i.LAYER&&this.notifyDirty(t,o,"layerRemoved"),o},t.prototype.getDirtySet=function(){return this.dirtySet},t.prototype.notifyDirty=function(t,e,r,i){this.dirtySet.handleUpdate(e,r,i)},t.prototype.getOrigin=function(t,e,r){void 0===r&&(r=c);var i=0,o=e*r/h;o>1&&(i=Math.ceil(u(o,2)));var n=Math.pow(2,i)*h,a=Math.round(t[0]/n),d=Math.round(t[1]/n),l=Math.round(t[2]/n),g=i+"_"+a+"_"+d+"_"+l,f=this._id2origin[g];return null==f&&(f={vec3:s.createFrom(a*n,d*n,l*n),id:g},this._id2origin[g]=f),f},t.prototype.getGeometryRenderGeometries=function(t,e,r){var i=t.getId(),o=e.geometry,a=o.getData(),d=!!o.singleUse,l=e.materials,s=e.instanceParameters,u=t.getCombinedStaticTransformation(e),h=g.maxScale(u),c=e.origin,f=o.getBoundingInfo(),v=e.getId(),y=this._uniqueIdx++,p=new n(a,f,l[0],u,e.customTransformation,h,t.getCastShadow(),d,i,v,y);p.origin=c||this.getOrigin(p.center,p.bsRadius),p.instanceParameters=s,r.push(p)},t.prototype.updateRenderGeometryTransformation=function(t,e,r){t.getCombinedStaticTransformation(e,r.transformation),r.updateTransformation(r.transformation)},t.prototype.formatDebugInfo=function(t){var e=[];if(t){e[0]="<table>";for(var o in i){var n=i[o];e[0]+="<tr><td>"+n+'</td><td style="text-align: right">'+Object.keys(this.getAll(n)).length+"</td></tr>"}e[0]+="</table>",e[1]=this.dirtySet.formatDebugInfo(!0)}else{e[0]="";for(var o in i){var n=i[o];e[0]+=r.pad(String(Object.keys(this.getAll(n)).length),6," ")+" "+n+", "}e[1]=this.dirtySet.formatDebugInfo(!1)}return e},t.prototype.validateContent=function(){var t=this.getAll(i.OBJECT);for(var e in t)this.validateObject(t[e]);var r=this.getAll(i.LAYER);for(var o in r)this.validateLayer(r[o]);var n=this.getAll(i.MATERIAL);for(var a in n)this.validateMaterial(n[a])},t.prototype.validateObject=function(t){for(var e=t.geometryRecords,r=0;r<e.length;++r){var o=e[r];l(null!=this.get(i.GEOMETRY,o.geometry.id)),l(1===o.materials.length,"object materials do not match geometry groups"),l(null!=this.get(i.MATERIAL,o.materials[0].getId()))}},t.prototype.validateLayer=function(t){for(var e=t.getObjects(),r=0;r<e.length;++r){var o=this.get(i.OBJECT,e[r].getId());l(null!=o)}},t.prototype.validateMaterial=function(t){for(var e=t.getAllTextureIds(),r=0;r<e.length;++r){var o=this.get(i.TEXTURE,e[r]);l(null!=o)}},t.ContentType=i,t}();return f});