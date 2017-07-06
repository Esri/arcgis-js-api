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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","dojo/string","../lib/ModelContentType","../lib/ModelDirtySet","../lib/RenderGeometry","../lib/Util","../lib/gl-matrix"],function(t,e,r,o,i,n,a,l){var d=a.assert,s=a.verify,g=l.vec3d,u=l.mat4d,h=a.logWithBase,c=1e4,f=10,v=function(){function t(){this.dirtySet=new i(this),this._uniqueIdx=0,this._id2origin={},this.content={};for(var t in o)this.content[o[t]]={}}return t.prototype.getAll=function(t){var e=this.content[t];return d(void 0!==e),e},t.prototype.get=function(t,e){return this.getAll(t)[e]},t.prototype.add=function(t,e){var r=this.content[t];d(void 0!==r);var i=e.getId();d(null==r[i],"Model/Stage already contains object to be added"),r[i]=e,t===o.LAYER&&this.notifyDirty(t,e,"layerAdded")},t.prototype.remove=function(t,e){var r=this.content[t];d(void 0!==r);var i=r[e];return d(void 0!==i,"Model/Stage doesn't contain object to be removed"),delete r[e],t===o.TEXTURE&&i.unload(),t===o.LAYER&&this.notifyDirty(t,i,"layerRemoved"),i},t.prototype.getDirtySet=function(){return this.dirtySet},t.prototype.notifyDirty=function(t,e,r,o){this.dirtySet.handleUpdate(e,r,o)},t.prototype.getOrigin=function(t,e,r){void 0===r&&(r=f);var o=0,i=e*r/c;i>1&&(o=Math.ceil(h(i,2)));var n=Math.pow(2,o)*c,a=Math.round(t[0]/n),l=Math.round(t[1]/n),d=Math.round(t[2]/n),s=o+"_"+a+"_"+l+"_"+d,u=this._id2origin[s];return null==u&&(u={vec3:g.createFrom(a*n,l*n,d*n),id:s},this._id2origin[s]=u),u},t.prototype.getGeometryRenderGeometries=function(t,e,r){var o=t.getId(),i=e.geometry,a=i.getData(),l=!!i.singleUse,d=e.materials,s=e.instanceParameters,g=t.getCombinedStaticTransformation(e),h=u.maxScale(g),c=e.origin,f=0,v=i.getBoundingInfo(f),y=e.getId()+"#"+f,m=this._uniqueIdx++,p=new n(a,v,d[f],g,e.customTransformation,h,t.getCastShadow(),l,o,y,m);p.origin=c||this.getOrigin(p.center,p.bsRadius),p.instanceParameters=s,r.push(p)},t.prototype.updateRenderGeometryTransformation=function(t,e,r){t.getCombinedStaticTransformation(e,r.transformation),r.updateTransformation(r.transformation)},t.prototype.formatDebugInfo=function(t){var e=[];if(t){e[0]="<table>";for(var i in o){var n=o[i];e[0]+="<tr><td>"+n+'</td><td style="text-align: right">'+Object.keys(this.getAll(n)).length+"</td></tr>"}e[0]+="</table>",e[1]=this.dirtySet.formatDebugInfo(!0)}else{e[0]="";for(var i in o){var n=o[i];e[0]+=r.pad(String(Object.keys(this.getAll(n)).length),6," ")+" "+n+", "}e[1]=this.dirtySet.formatDebugInfo(!1)}return e},t.prototype.validateContent=function(){var t=this.getAll(o.OBJECT);for(var e in t)this.validateObject(t[e]);var r=this.getAll(o.LAYER);for(var i in r)this.validateLayer(r[i]);var n=this.getAll(o.MATERIAL);for(var a in n)this.validateMaterial(n[a])},t.prototype.validateObject=function(t){for(var e=t.geometryRecords,r=0;r<e.length;++r){var i=e[r];d(null!=this.get(o.GEOMETRY,i.geometry.id));var n=i.geometry.numGroups;d(n<=i.materials.length,"object materials do not match geometry groups"),s(n===i.materials.length,"object materials do not match geometry groups");for(var a=0;n>a;++a)d(null!=this.get(o.MATERIAL,i.materials[a].getId()))}},t.prototype.validateLayer=function(t){for(var e=t.getObjects(),r=0;r<e.length;++r){var i=this.get(o.OBJECT,e[r].getId());d(null!=i)}},t.prototype.validateMaterial=function(t){for(var e=t.getAllTextureIds(),r=0;r<e.length;++r){var i=this.get(o.TEXTURE,e[r]);d(null!=i)}},t}();return v.ContentType=o,v});