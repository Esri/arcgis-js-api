// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/maybe","../../../core/promiseUtils","../../../core/requireUtils","../../../core/typedArrayUtil","../../../core/workers","../../../core/libs/gl-matrix-2/quat","../../../core/libs/gl-matrix-2/quatf32","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f32","../../../geometry/SpatialReference","./i3s/PointCloudRendererUtil","../support/projectionUtils","module"],function(t,e,r,a,o,i,n,u,f,s,l,b,c,p,h,v){function m(){return new d}Object.defineProperty(e,"__esModule",{value:!0});var d=function(){function t(){}return t.prototype._process=function(t){var e=this._transform(t),r=[e.points.buffer,e.rgb.buffer];a.isSome(e.pointIdFilterMap)&&r.push(e.pointIdFilterMap.buffer);for(var i=0,u=e.attributes;i<u.length;i++){var f=u[i];"buffer"in f.values&&n.isArrayBuffer(f.values.buffer)&&f.values.buffer!==e.rgb.buffer&&r.push(f.values.buffer)}return o.resolve({result:e,transferList:r})},t.prototype._transform=function(t){var e=p.readGeometry(t.schema,t.geometryBuffer),r=e.length/3,o=null,i=[],n=p.getAttributeValues(t.primaryAttributeData,e,r);a.isSome(t.primaryAttributeData)&&n&&i.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:n});var u=p.getAttributeValues(t.modulationAttributeData,e,r);a.isSome(t.modulationAttributeData)&&u&&i.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:u});var f=p.evaluateRenderer(t.rendererInfo,n,u,r);if(t.filterInfo&&t.filterInfo.length>0&&a.isSome(t.filterAttributesData)){var s=t.filterAttributesData.map(function(t){var a=p.getAttributeValues(t,e,r),o={attributeInfo:t.attributeInfo,values:a};return i.push(o),o});o=new Uint32Array(r),r=p.filterInPlace(e,f,o,t.filterInfo,s)}for(var l=0,b=t.userAttributesData;l<b.length;l++){var h=b[l],v=p.getAttributeValues(h,e,r);i.push({attributeInfo:h.attributeInfo,values:v})}3*r<f.length&&(f=new Uint8Array(f.buffer.slice(0,3*r))),this._applyElevationOffsetInPlace(e,r,t.elevationOffset);var m=this._transformCoordinates(e,r,t.obb,c.fromJSON(t.inSR),c.fromJSON(t.outSR));return{obb:t.obb,points:m,rgb:f,attributes:i,pointIdFilterMap:o}},t.prototype._transformCoordinates=function(t,e,r,a,o){if(!h.bufferToBuffer(t,a,0,t,o,0,e))throw Error("Can't reproject");var i=b.vec3f32.fromValues(r.center[0],r.center[1],r.center[2]),n=b.vec3f32.create(),u=b.vec3f32.create();f.quat.conjugate(y,r.quaternion);for(var s=new Float32Array(3*e),c=0;c<e;c++)n[0]=t[3*c]-i[0],n[1]=t[3*c+1]-i[1],n[2]=t[3*c+2]-i[2],l.vec3.transformQuat(u,n,y),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(u[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(u[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(u[2])),s[3*c]=n[0],s[3*c+1]=n[1],s[3*c+2]=n[2];return s},t.prototype._applyElevationOffsetInPlace=function(t,e,r){if(0!==r)for(var a=0;a<e;a++)t[3*a+2]+=r},t}(),y=s.quatf32.create(),g=function(e){function a(){var r=e.call(this)||this;return r._thread=void 0,u.open(i.getAbsMid("./PointCloudWorker",t,v)).then(function(t){void 0===r._thread?r._thread=t:t.close()}),r}return r(a,e),a.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},a.prototype.transform=function(t,e,r){return this._thread?this._thread.invoke("_process",t,{transferList:e,signal:r}):o.resolve(this._transform(t))},a}(d);e.PointCloudWorker=g,e.default=m});