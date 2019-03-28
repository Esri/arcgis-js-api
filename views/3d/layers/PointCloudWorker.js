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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/promiseUtils","../../../core/requireUtils","../../../core/workers","../../../core/libs/gl-matrix-2/quat","../../../core/libs/gl-matrix-2/quatf32","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f32","../../../geometry/SpatialReference","./i3s/I3SBinaryReader","./i3s/LEPCC","./i3s/PointCloudRendererUtil","../support/projectionUtils","module"],function(e,t,r,o,n,a,i,f,s,l,c,u,h,d,p,m){function v(){return new b}Object.defineProperty(t,"__esModule",{value:!0});var b=function(){function e(){}return e.prototype._process=function(e){var t=this._transform(e);return o.resolve({result:t,transferList:[t.points.buffer,t.rgb.buffer]})},e.prototype._transform=function(e){var t=this.readGeometry(e.schema,e.geometryBuffer),r=t.length/3,o=d.evaluateRenderer(e.rendererInfo,e.primaryAttribute,e.modulationAttribute,t,r);e.filterInfo&&e.filterInfo.length>0&&(r=d.filterInPlace(t,o,e.filterInfo,e.filterAttributes)),3*r<o.length&&(o=new Uint8Array(o.buffer.slice(0,3*r))),this._applyElevationOffsetInPlace(t,r,e.elevationOffset);var n=this._transformCoordinates(t,r,e.obb,c.fromJSON(e.inSR),c.fromJSON(e.outSR));return{obb:e.obb,points:n,rgb:o}},e.prototype.readGeometry=function(e,t){if(null==e.encoding||""===e.encoding){for(var r=u.createGeometryDataIndex(t,e,!1),o=u.createTypedView(t,r.vertexAttributes.position),n=r.header.fields,a=[n.offsetX,n.offsetY,n.offsetZ],i=[n.scaleX,n.scaleY,n.scaleZ],f=o.length/3,s=new Float64Array(3*f),l=0;l<f;l++)s[3*l]=o[3*l]*i[0]+a[0],s[3*l+1]=o[3*l+1]*i[1]+a[1],s[3*l+2]=o[3*l+2]*i[2]+a[2];return s}if("lepcc-xyz"===e.encoding)return h.decodeXYZ(t).result},e.prototype._transformCoordinates=function(e,t,r,o,n){if(!p.bufferToBuffer(e,o,0,e,n,0,t))throw Error("Can't reproject");var a=l.vec3f32.fromValues(r.center[0],r.center[1],r.center[2]),f=l.vec3f32.create(),c=l.vec3f32.create();i.quat.conjugate(y,r.quaternion);for(var u=new Float32Array(3*t),h=0;h<t;h++)f[0]=e[3*h]-a[0],f[1]=e[3*h+1]-a[1],f[2]=e[3*h+2]-a[2],s.vec3.transformQuat(c,f,y),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(c[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(c[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(c[2])),u[3*h]=f[0],u[3*h+1]=f[1],u[3*h+2]=f[2];return u},e.prototype._applyElevationOffsetInPlace=function(e,t,r){if(0!==r)for(var o=0;o<t;o++)e[3*o+2]+=r},e}(),y=f.quatf32.create(),_=function(t){function i(){var r=t.call(this)||this;return r._thread=void 0,a.open(n.getAbsMid("./PointCloudWorker",e,m)).then(function(e){void 0===r._thread?r._thread=e:e.close()}),r}return r(i,t),i.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},i.prototype.transform=function(e,t){return this._thread?this._thread.invoke("_process",e,{transferList:t}):o.resolve(this._transform(e))},i}(b);t.PointCloudWorker=_,t.default=v});