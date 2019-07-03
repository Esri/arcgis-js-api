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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/promiseUtils","../../../core/requireUtils","../../../core/workers","../../../core/libs/gl-matrix-2/quat","../../../core/libs/gl-matrix-2/quatf32","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f32","../../../geometry/SpatialReference","./i3s/I3SBinaryReader","./i3s/LEPCC","./i3s/PointCloudRendererUtil","../support/projectionUtils","module"],function(e,r,t,o,n,i,a,f,s,l,c,u,h,d,p,m){function v(){return new b}Object.defineProperty(r,"__esModule",{value:!0});var b=function(){function e(){}return e.prototype._process=function(e){var r=this._transform(e);return o.resolve({result:r,transferList:[r.points.buffer,r.rgb.buffer]})},e.prototype._transform=function(e){var r=this.readGeometry(e.schema,e.geometryBuffer),t=r.length/3,o=d.evaluateRenderer(e.rendererInfo,e.primaryAttribute,e.modulationAttribute,r,t);e.filterInfo&&e.filterInfo.length>0&&(t=d.filterInPlace(r,o,e.filterInfo,e.filterAttributes)),3*t<o.length&&(o=new Uint8Array(o.buffer.slice(0,3*t))),this._applyElevationOffsetInPlace(r,t,e.elevationOffset);var n=this._transformCoordinates(r,t,e.obb,c.fromJSON(e.inSR),c.fromJSON(e.outSR));return{obb:e.obb,points:n,rgb:o}},e.prototype.readGeometry=function(e,r){if(null==e.encoding||""===e.encoding){for(var t=u.createGeometryIndexFromSchema(r,e),o=u.createTypedView(r,t.vertexAttributes.position),n=t.header.fields,i=[n.offsetX,n.offsetY,n.offsetZ],a=[n.scaleX,n.scaleY,n.scaleZ],f=o.length/3,s=new Float64Array(3*f),l=0;l<f;l++)s[3*l]=o[3*l]*a[0]+i[0],s[3*l+1]=o[3*l+1]*a[1]+i[1],s[3*l+2]=o[3*l+2]*a[2]+i[2];return s}if("lepcc-xyz"===e.encoding)return h.decodeXYZ(r).result},e.prototype._transformCoordinates=function(e,r,t,o,n){if(!p.bufferToBuffer(e,o,0,e,n,0,r))throw Error("Can't reproject");var i=l.vec3f32.fromValues(t.center[0],t.center[1],t.center[2]),f=l.vec3f32.create(),c=l.vec3f32.create();a.quat.conjugate(y,t.quaternion);for(var u=new Float32Array(3*r),h=0;h<r;h++)f[0]=e[3*h]-i[0],f[1]=e[3*h+1]-i[1],f[2]=e[3*h+2]-i[2],s.vec3.transformQuat(c,f,y),t.halfSize[0]=Math.max(t.halfSize[0],Math.abs(c[0])),t.halfSize[1]=Math.max(t.halfSize[1],Math.abs(c[1])),t.halfSize[2]=Math.max(t.halfSize[2],Math.abs(c[2])),u[3*h]=f[0],u[3*h+1]=f[1],u[3*h+2]=f[2];return u},e.prototype._applyElevationOffsetInPlace=function(e,r,t){if(0!==t)for(var o=0;o<r;o++)e[3*o+2]+=t},e}(),y=f.quatf32.create(),_=function(r){function a(){var t=r.call(this)||this;return t._thread=void 0,i.open(n.getAbsMid("./PointCloudWorker",e,m)).then(function(e){void 0===t._thread?t._thread=e:e.close()}),t}return t(a,r),a.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},a.prototype.transform=function(e,r,t){return this._thread?this._thread.invoke("_process",e,{transferList:r,signal:t}):o.resolve(this._transform(e))},a}(b);r.PointCloudWorker=_,r.default=v});