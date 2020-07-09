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

define(["require","exports","../../../core/maybe","../../../core/promiseUtils","../../../core/typedArrayUtil","../../../core/libs/gl-matrix-2/quat","../../../core/libs/gl-matrix-2/quatf32","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f32","../../../geometry/SpatialReference","./i3s/PointCloudWorkerUtil","../support/projectionUtils"],(function(t,e,r,a,i,o,f,u,n,l,s,b){Object.defineProperty(e,"__esModule",{value:!0});var p=function(){function t(){}return t.prototype.transform=function(t){var e=this._transform(t),o=[e.points.buffer,e.rgb.buffer];r.isSome(e.pointIdFilterMap)&&o.push(e.pointIdFilterMap.buffer);for(var f=0,u=e.attributes;f<u.length;f++){var n=u[f];"buffer"in n.values&&i.isArrayBuffer(n.values.buffer)&&n.values.buffer!==e.rgb.buffer&&o.push(n.values.buffer)}return a.resolve({result:e,transferList:o})},t.prototype._transform=function(t){var e=s.readGeometry(t.schema,t.geometryBuffer),a=e.length/3,i=null,o=[],f=s.getAttributeValues(t.primaryAttributeData,e,a);r.isSome(t.primaryAttributeData)&&f&&o.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:f});var u=s.getAttributeValues(t.modulationAttributeData,e,a);r.isSome(t.modulationAttributeData)&&u&&o.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:u});var n=s.evaluateRenderer(t.rendererInfo,f,u,a);if(t.filterInfo&&t.filterInfo.length>0&&r.isSome(t.filterAttributesData)){var b=t.filterAttributesData.map((function(t){var r=s.getAttributeValues(t,e,a),i={attributeInfo:t.attributeInfo,values:r};return o.push(i),i}));i=new Uint32Array(a),a=s.filterInPlace(e,n,i,t.filterInfo,b)}for(var p=0,c=t.userAttributesData;p<c.length;p++){var v=c[p],m=s.getAttributeValues(v,e,a);o.push({attributeInfo:v.attributeInfo,values:m})}3*a<n.length&&(n=new Uint8Array(n.buffer.slice(0,3*a))),this._applyElevationOffsetInPlace(e,a,t.elevationOffset);var h=this._transformCoordinates(e,a,t.obb,l.fromJSON(t.inSR),l.fromJSON(t.outSR));return{obb:t.obb,points:h,rgb:n,attributes:o,pointIdFilterMap:i}},t.prototype._transformCoordinates=function(t,e,r,a,i){if(!b.bufferToBuffer(t,a,0,t,i,0,e))throw Error("Can't reproject");var f=n.vec3f32.fromValues(r.center[0],r.center[1],r.center[2]),l=n.vec3f32.create(),s=n.vec3f32.create();o.quat.conjugate(c,r.quaternion);for(var p=new Float32Array(3*e),v=0;v<e;v++)l[0]=t[3*v]-f[0],l[1]=t[3*v+1]-f[1],l[2]=t[3*v+2]-f[2],u.vec3.transformQuat(s,l,c),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(s[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(s[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(s[2])),p[3*v]=l[0],p[3*v+1]=l[1],p[3*v+2]=l[2];return p},t.prototype._applyElevationOffsetInPlace=function(t,e,r){if(0!==r)for(var a=0;a<e;a++)t[3*a+2]+=r},t}(),c=f.quatf32.create();e.default=function(){return new p}}));