/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../core/maybe","../../../core/typedArrayUtil","../../../chunks/quat","../../../chunks/quatf32","../../../chunks/vec3","../../../chunks/vec3f32","../../../geometry/projection","../../../geometry/SpatialReference","./i3s/PointCloudWorkerUtil"],(function(t,e,r,a,n,o,i,u,f){"use strict";let s=function(){function a(){}var s=a.prototype;return s.transform=function(r){const a=this._transform(r),n=[a.points.buffer,a.rgb.buffer];t.isSome(a.pointIdFilterMap)&&n.push(a.pointIdFilterMap.buffer);for(const t of a.attributes)"buffer"in t.values&&e.isArrayBuffer(t.values.buffer)&&t.values.buffer!==a.rgb.buffer&&n.push(t.values.buffer);return Promise.resolve({result:a,transferList:n})},s._transform=function(e){const r=f.readGeometry(e.schema,e.geometryBuffer);let a=r.length/3,n=null;const o=[],i=f.getAttributeValues(e.primaryAttributeData,r,a);t.isSome(e.primaryAttributeData)&&i&&o.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:i});const s=f.getAttributeValues(e.modulationAttributeData,r,a);t.isSome(e.modulationAttributeData)&&s&&o.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:s});let l=f.evaluateRenderer(e.rendererInfo,i,s,a);if(e.filterInfo&&e.filterInfo.length>0&&t.isSome(e.filterAttributesData)){const t=e.filterAttributesData.map((t=>{const e=f.getAttributeValues(t,r,a),n={attributeInfo:t.attributeInfo,values:e};return o.push(n),n}));n=new Uint32Array(a),a=f.filterInPlace(r,l,n,e.filterInfo,t)}for(const t of e.userAttributesData){const e=f.getAttributeValues(t,r,a);o.push({attributeInfo:t.attributeInfo,values:e})}3*a<l.length&&(l=new Uint8Array(l.buffer.slice(0,3*a))),this._applyElevationOffsetInPlace(r,a,e.elevationOffset);const c=this._transformCoordinates(r,a,e.obb,u.fromJSON(e.inSR),u.fromJSON(e.outSR));return{obb:e.obb,points:c,rgb:l,attributes:o,pointIdFilterMap:n}},s._transformCoordinates=function(t,e,a,u,f){if(!i.projectBuffer(t,u,0,t,f,0,e))throw Error("Can't reproject");const s=o.fromValues(a.center[0],a.center[1],a.center[2]),c=o.create(),b=o.create();r.conjugate(l,a.quaternion);const h=new Float32Array(3*e);for(let r=0;r<e;r++)c[0]=t[3*r]-s[0],c[1]=t[3*r+1]-s[1],c[2]=t[3*r+2]-s[2],n.transformQuat(b,c,l),a.halfSize[0]=Math.max(a.halfSize[0],Math.abs(b[0])),a.halfSize[1]=Math.max(a.halfSize[1],Math.abs(b[1])),a.halfSize[2]=Math.max(a.halfSize[2],Math.abs(b[2])),h[3*r]=c[0],h[3*r+1]=c[1],h[3*r+2]=c[2];return h},s._applyElevationOffsetInPlace=function(t,e,r){if(0!==r)for(let a=0;a<e;a++)t[3*a+2]+=r},a}();const l=a.create();function c(){return new s}return c}));
