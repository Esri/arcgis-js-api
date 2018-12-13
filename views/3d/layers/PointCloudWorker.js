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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/promiseUtils","../../../core/libs/gl-matrix-2/gl-matrix","../../../geometry/SpatialReference","./i3s/I3SBinaryReader","./i3s/LEPCC","./i3s/PointCloudRendererUtil","../support/projectionUtils"],function(e,r,t,o,n,a,f,i,s){var l=function(){function e(){}return e.prototype.transform=function(e,r){return this.thread?this.thread.invoke("_process",e,{transferList:r}):t.resolve(this._transform(e))},e.prototype._process=function(e){var r=this._transform(e);return t.resolve({result:r,transferList:[r.points.buffer,r.rgb.buffer]})},e.prototype._transform=function(e){var r=this.readGeometry(e.schema,e.geometryBuffer),t=r.length/3,o=i.evaluateRenderer(e.rendererInfo,e.primaryAttribute,e.modulationAttribute,r,t);e.filterInfo&&e.filterInfo.length>0&&(t=i.filterInPlace(r,o,e.filterInfo,e.filterAttributes)),3*t<o.length&&(o=new Uint8Array(o.buffer.slice(0,3*t))),this._applyElevationOffsetInPlace(r,t,e.elevationOffset);var a=this._transformCoordinates(r,t,e.obb,n.fromJSON(e.inSR),n.fromJSON(e.outSR));return{obb:e.obb,points:a,rgb:o}},e.prototype.readGeometry=function(e,r){if(null==e.encoding||""===e.encoding){for(var t=a.createGeometryDataIndex(r,e,!1),o=a.createTypedView(r,t.vertexAttributes.position),n=t.header.fields,i=[n.offsetX,n.offsetY,n.offsetZ],s=[n.scaleX,n.scaleY,n.scaleZ],l=o.length/3,c=new Float64Array(3*l),u=0;u<l;u++)c[3*u]=o[3*u]*s[0]+i[0],c[3*u+1]=o[3*u+1]*s[1]+i[1],c[3*u+2]=o[3*u+2]*s[2]+i[2];return c}if("lepcc-xyz"===e.encoding)return f.decodeXYZ(r).result},e.prototype._transformCoordinates=function(e,r,t,n,a){if(!s.bufferToBuffer(e,n,0,e,a,0,r))throw Error("Can't reproject");var f=o.vec3f32.fromValues(t.center[0],t.center[1],t.center[2]),i=o.vec3f32.create(),l=o.vec3f32.create();o.quat.conjugate(c,t.quaternion);for(var u=new Float32Array(3*r),p=0;p<r;p++)i[0]=e[3*p]-f[0],i[1]=e[3*p+1]-f[1],i[2]=e[3*p+2]-f[2],o.vec3.transformQuat(l,i,c),t.halfSize[0]=Math.max(t.halfSize[0],Math.abs(l[0])),t.halfSize[1]=Math.max(t.halfSize[1],Math.abs(l[1])),t.halfSize[2]=Math.max(t.halfSize[2],Math.abs(l[2])),u[3*p]=i[0],u[3*p+1]=i[1],u[3*p+2]=i[2];return u},e.prototype._applyElevationOffsetInPlace=function(e,r,t){if(0!==t)for(var o=0;o<r;o++)e[3*o+2]+=t},e}(),c=o.quatf32.create();return l});