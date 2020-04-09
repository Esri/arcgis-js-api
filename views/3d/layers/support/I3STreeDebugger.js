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

define(["require","exports","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/assignHelper","../../../../geometry","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","./TileTree3DDebugger","../../support/projectionUtils"],(function(e,r,t,o,f,u,c,i,a,s,n,p,l){Object.defineProperty(r,"__esModule",{value:!0});var v=function(e){function r(r){return e.call(this,r)||this}return o(r,e),r.prototype.update=function(){if(this.clear(),this.enabled){var e=this.lv.getLoadedNodes(),r=this.view.renderSpatialReference,t=this.nodeSR,o=e.map((function(e){return function(e,r,t){var o=e.obb;i.mat4.fromQuat(h,o.quaternion),s.vec3.copy(d,o.center),l.bufferToBuffer(d,t,0,d,r,0,1),h[12]=d[0],h[13]=d[1],h[14]=d[2];var f=[[],[],[]];s.vec3.copy(d,o.halfSize),s.vec3.transformMat4(d,d,h),l.bufferToBuffer(d,r,0,d,t,0,1),f[0].push([d[0],d[1]]),s.vec3.copy(d,o.halfSize),d[0]=-d[0],s.vec3.transformMat4(d,d,h),l.bufferToBuffer(d,r,0,d,t,0,1),f[0].push([d[0],d[1]]),s.vec3.copy(d,o.halfSize),d[0]=-d[0],d[1]=-d[1],s.vec3.transformMat4(d,d,h),l.bufferToBuffer(d,r,0,d,t,0,1),f[0].push([d[0],d[1]]),s.vec3.copy(d,o.halfSize),d[1]=-d[1],s.vec3.transformMat4(d,d,h),l.bufferToBuffer(d,r,0,d,t,0,1),f[0].push([d[0],d[1]]),f[1].push(f[0][0]),f[1].push(f[0][1]),s.vec3.copy(d,o.halfSize),d[0]=-d[0],d[2]=-d[2],s.vec3.transformMat4(d,d,h),l.bufferToBuffer(d,r,0,d,t,0,1),f[1].push([d[0],d[1]]),s.vec3.copy(d,o.halfSize),d[2]=-d[2],s.vec3.transformMat4(d,d,h),l.bufferToBuffer(d,r,0,d,t,0,1),f[1].push([d[0],d[1]]),f[2].push(f[0][0]),f[2].push(f[0][3]),s.vec3.copy(d,o.halfSize),d[1]=-d[1],d[2]=-d[2],s.vec3.transformMat4(d,d,h),l.bufferToBuffer(d,r,0,d,t,0,1),f[2].push([d[0],d[1]]),f[2].push(f[1][3]);var c=new u.Polygon({rings:f,spatialReference:t});return{lij:[e.level,e.childCount],id:e.id,geometry:c}}(e,r,t)})).sort((function(e,r){return e.lij[0]===r.lij[0]?e.id>r.id?-1:1:e.lij[0]-r.lij[0]}));this._update(o,(function(e){return e.geometry}),{getLabel:function(e){return e.lij[0]+"/"+e.id+"/"+e.lij[1]}})}},t([c.property({constructOnly:!0})],r.prototype,"lv",void 0),t([c.property({constructOnly:!0})],r.prototype,"nodeSR",void 0),r=t([c.subclass("esri.views.3d.layers.support.I3STreeDebugger")],r)}(c.declared(p.TileTree3DDebugger));r.I3STreeDebugger=v;var h=a.mat4f64.create(),d=n.vec3f64.create()}));