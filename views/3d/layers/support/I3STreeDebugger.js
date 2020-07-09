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

define(["require","exports","tslib","../../../../geometry","../../../../core/maybe","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","./TileTree3DDebugger","../../support/projectionUtils"],(function(e,r,t,o,i,f,u,c,a,n,s,l){Object.defineProperty(r,"__esModule",{value:!0});var p=function(e){function r(r){return e.call(this,r)||this}return t.__extends(r,e),r.prototype.update=function(){if(this.clear(),this.enabled){var e=this.lv.getVisibleNodes(),r=this.view.renderSpatialReference,t=this.nodeSR,f=e.map((function(e){return function(e,r,t){var f=e.obb;if(i.isNone(f))return null;u.mat4.fromQuat(v,f.quaternion),a.vec3.copy(h,f.center),l.bufferToBuffer(h,t,0,h,r,0,1),v[12]=h[0],v[13]=h[1],v[14]=h[2];var c=[[],[],[]];a.vec3.copy(h,f.halfSize),a.vec3.transformMat4(h,h,v),l.bufferToBuffer(h,r,0,h,t,0,1),c[0].push([h[0],h[1]]),a.vec3.copy(h,f.halfSize),h[0]=-h[0],a.vec3.transformMat4(h,h,v),l.bufferToBuffer(h,r,0,h,t,0,1),c[0].push([h[0],h[1]]),a.vec3.copy(h,f.halfSize),h[0]=-h[0],h[1]=-h[1],a.vec3.transformMat4(h,h,v),l.bufferToBuffer(h,r,0,h,t,0,1),c[0].push([h[0],h[1]]),a.vec3.copy(h,f.halfSize),h[1]=-h[1],a.vec3.transformMat4(h,h,v),l.bufferToBuffer(h,r,0,h,t,0,1),c[0].push([h[0],h[1]]),c[1].push(c[0][0]),c[1].push(c[0][1]),a.vec3.copy(h,f.halfSize),h[0]=-h[0],h[2]=-h[2],a.vec3.transformMat4(h,h,v),l.bufferToBuffer(h,r,0,h,t,0,1),c[1].push([h[0],h[1]]),a.vec3.copy(h,f.halfSize),h[2]=-h[2],a.vec3.transformMat4(h,h,v),l.bufferToBuffer(h,r,0,h,t,0,1),c[1].push([h[0],h[1]]),c[2].push(c[0][0]),c[2].push(c[0][3]),a.vec3.copy(h,f.halfSize),h[1]=-h[1],h[2]=-h[2],a.vec3.transformMat4(h,h,v),l.bufferToBuffer(h,r,0,h,t,0,1),c[2].push([h[0],h[1]]),c[2].push(c[1][3]);var n=new o.Polygon({rings:c,spatialReference:t});return{lij:[e.level,e.childCount],id:e.id,geometry:n}}(e,r,t)})).sort((function(e,r){return e.lij[0]===r.lij[0]?e.id>r.id?-1:1:e.lij[0]-r.lij[0]}));this._update(f,(function(e){return e.geometry}),{getLabel:function(e){return e.lij[0]+"/"+e.id+"/"+e.lij[1]}})}},t.__decorate([f.property({constructOnly:!0})],r.prototype,"lv",void 0),t.__decorate([f.property({constructOnly:!0})],r.prototype,"nodeSR",void 0),r=t.__decorate([f.subclass("esri.views.3d.layers.support.I3STreeDebugger")],r)}(s.TileTree3DDebugger);r.I3STreeDebugger=p;var v=c.mat4f64.create(),h=n.vec3f64.create()}));