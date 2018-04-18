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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/promiseUtils","../../../geometry/SpatialReference","./i3s/I3SBinaryReader","./i3s/LEPCC","./i3s/PointCloudRendererUtil","../lib/glMatrix","../support/projectionUtils"],function(e,r,t,a,o,n,i,f,s){var l=function(){function e(){}return e.prototype.process=function(e){var r=this.transform(e);return t.resolve({result:r,transferList:[r.rgb]})},e.prototype.transform=function(e){var r=this.readGeometry(e.schema,e.geometryBuffer),t=i.evaluateRenderer(e.rendererInfo,e.primaryAttribute,e.modulationAttribute,r,r.length/3);this._applyElevationOffsetInPlace(r,e.elevationOffset);var o=this._transformCoordinates(r,e.obb,a.fromJSON(e.inSR),a.fromJSON(e.outSR));return{obb:e.obb,points:o,rgb:t.buffer}},e.prototype.readGeometry=function(e,r){if(null==e.encoding||""===e.encoding){for(var t=o.createGeometryDataIndex(r,e,!1),a=o.createTypedView(r,t.vertexAttributes.position),i=t.header.fields,f=[i.offsetX,i.offsetY,i.offsetZ],s=[i.scaleX,i.scaleY,i.scaleZ],l=a.length/3,c=new Float64Array(3*l),u=0;u<l;u++)c[3*u]=a[3*u]*s[0]+f[0],c[3*u+1]=a[3*u+1]*s[1]+f[1],c[3*u+2]=a[3*u+2]*s[2]+f[2];return c}if("lepcc-xyz"===e.encoding)return n.decodeXYZ(r).result},e.prototype._transformCoordinates=function(e,r,t,a){var o=e.length/3;if(!s.bufferToBuffer(e,t,0,e,a,0,o))throw Error("Can't reproject");var n=f.vec3.createFrom(r.center[0],r.center[1],r.center[2]),i=f.vec3.create(),l=f.vec3.create();f.quat4.conjugate(r.quaternion,c);for(var u=new Float32Array(3*o),p=0;p<o;p++)i[0]=e[3*p]-n[0],i[1]=e[3*p+1]-n[1],i[2]=e[3*p+2]-n[2],f.quat4.multiplyVec3(c,i,l),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(l[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(l[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(l[2])),u[3*p]=i[0],u[3*p+1]=i[1],u[3*p+2]=i[2];return u},e.prototype._applyElevationOffsetInPlace=function(e,r){var t=e.length/3;if(0!==r)for(var a=0;a<t;a++)e[3*a+2]+=r},e}(),c=f.quat4.create();return l});