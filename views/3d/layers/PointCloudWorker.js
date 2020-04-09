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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/maybe","../../../core/promiseUtils","../../../core/typedArrayUtil","../../../core/workers","../../../core/libs/gl-matrix-2/quat","../../../core/libs/gl-matrix-2/quatf32","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f32","../../../geometry/SpatialReference","./i3s/PointCloudRendererUtil","../support/projectionUtils"],(function(t,e,r,a,o,i,n,u,f,s,l,b,c,p){Object.defineProperty(e,"__esModule",{value:!0});var h=function(){function t(){}return t.prototype._process=function(t){var e=this._transform(t),r=[e.points.buffer,e.rgb.buffer];a.isSome(e.pointIdFilterMap)&&r.push(e.pointIdFilterMap.buffer);for(var n=0,u=e.attributes;n<u.length;n++){var f=u[n];"buffer"in f.values&&i.isArrayBuffer(f.values.buffer)&&f.values.buffer!==e.rgb.buffer&&r.push(f.values.buffer)}return o.resolve({result:e,transferList:r})},t.prototype._transform=function(t){var e=c.readGeometry(t.schema,t.geometryBuffer),r=e.length/3,o=null,i=[],n=c.getAttributeValues(t.primaryAttributeData,e,r);a.isSome(t.primaryAttributeData)&&n&&i.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:n});var u=c.getAttributeValues(t.modulationAttributeData,e,r);a.isSome(t.modulationAttributeData)&&u&&i.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:u});var f=c.evaluateRenderer(t.rendererInfo,n,u,r);if(t.filterInfo&&t.filterInfo.length>0&&a.isSome(t.filterAttributesData)){var s=t.filterAttributesData.map((function(t){var a=c.getAttributeValues(t,e,r),o={attributeInfo:t.attributeInfo,values:a};return i.push(o),o}));o=new Uint32Array(r),r=c.filterInPlace(e,f,o,t.filterInfo,s)}for(var l=0,p=t.userAttributesData;l<p.length;l++){var h=p[l],v=c.getAttributeValues(h,e,r);i.push({attributeInfo:h.attributeInfo,values:v})}3*r<f.length&&(f=new Uint8Array(f.buffer.slice(0,3*r))),this._applyElevationOffsetInPlace(e,r,t.elevationOffset);var m=this._transformCoordinates(e,r,t.obb,b.fromJSON(t.inSR),b.fromJSON(t.outSR));return{obb:t.obb,points:m,rgb:f,attributes:i,pointIdFilterMap:o}},t.prototype._transformCoordinates=function(t,e,r,a,o){if(!p.bufferToBuffer(t,a,0,t,o,0,e))throw Error("Can't reproject");var i=l.vec3f32.fromValues(r.center[0],r.center[1],r.center[2]),n=l.vec3f32.create(),f=l.vec3f32.create();u.quat.conjugate(v,r.quaternion);for(var b=new Float32Array(3*e),c=0;c<e;c++)n[0]=t[3*c]-i[0],n[1]=t[3*c+1]-i[1],n[2]=t[3*c+2]-i[2],s.vec3.transformQuat(f,n,v),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(f[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(f[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(f[2])),b[3*c]=n[0],b[3*c+1]=n[1],b[3*c+2]=n[2];return b},t.prototype._applyElevationOffsetInPlace=function(t,e,r){if(0!==r)for(var a=0;a<e;a++)t[3*a+2]+=r},t}(),v=f.quatf32.create(),m=function(t){function e(){var e=t.call(this)||this;return e._thread=void 0,n.open("PointCloudWorker").then((function(t){void 0===e._thread?e._thread=t:t.close()})),e}return r(e,t),e.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},e.prototype.transform=function(t,e,r){return this._thread?this._thread.invoke("_process",t,{transferList:e,signal:r}):o.resolve(this._transform(t))},e}(h);e.PointCloudWorker=m,e.default=function(){return new h}}));