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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../core/promiseUtils","../../../geometry/SpatialReference","./i3s/I3SGeometryUtil","./i3s/I3SProjectionUtil","../lib/gl-matrix","../support/meshProcessing","../support/orientedBoundingBox","../support/projectionUtils","../webgl-engine/lib/PreinterleavedGeometryData","../webgl-engine/lib/Util"],function(e,t,r,a,o,n,s,i,f,u,c,l){var d=function(){function e(){}return e.prototype.process=function(e){var t=[e.geometryBuffer];return r.resolve({result:this.transform(e,t),transferList:t})},e.prototype.transform=function(e,t){var r=a.fromJSON(e.indexSR),d=a.fromJSON(e.vertexSR),v=a.fromJSON(e.renderSR),b=!1,h=0,O=[],x=n.computeGlobalTransformation(e.mbs,e.elevationOffset,r,v),g=e.obb?null:f.create([0,0,0],[-1,-1,-1],[0,0,0,1]);s.vec3d.set(e.mbs,m),m[2]+=e.elevationOffset,s.vec3d.set(m,p);for(var C=0,y=e.geometryData;C<y.length;C++)for(var S=y[C],A=S.geometries,I=S.componentOffsets,M=0,N=A;M<N.length;M++){var V=N[M],R=e.layouts[h];++h;var D=[{name:l.VertexAttrConstants.COLOR,byteValue:255}],P=[l.VertexAttrConstants.NORMAL,l.VertexAttrConstants.NORMALCOMPRESSED,l.VertexAttrConstants.SYMBOLCOLOR,l.VertexAttrConstants.COMPONENTINDEX],E=o.interleaveGeometryBuffer(V,e.geometryBuffer,R,D,P),B=new c(new Float32Array(E),R,void 0,void 0,void 0,!0),L=B.getAttribute(l.VertexAttrConstants.POSITION);if(n.reprojectPoints(L,e.mbs,x,e.elevationOffset,r,d,v),g&&this._updateObb(g,L,x),e.needNormals){var q={normals:B.getAttribute(l.VertexAttrConstants.NORMALCOMPRESSED),positions:L,normalInd:B.getIndices(l.VertexAttrConstants.NORMALCOMPRESSED),positionInd:B.getIndices(l.VertexAttrConstants.POSITION)};o.processAndInterleaveNormals(e.normalReferenceFrame,V,e.geometryBuffer,x,q)}var T=B.getAttribute(l.VertexAttrConstants.COMPONENTINDEX);T&&this._createComponentNumbers(T,I);var z=B.getAttribute(l.VertexAttrConstants.COLOR);z&&!b&&(b=this._hasColors(z));var U={globalTrafo:x},_=R[0].stride,w=1-.8*_/(_+4),G=i.deduplicate(E,_/4,w);if(null!=G){var j=G.uniqueCount<65536?new Uint16Array(G.indices):G.indices,J=o.extractPositionData(G.buffer,R,j);O.push({layout:R,interleavedVertexData:G.buffer,indices:j,corMatrices:U,hasColors:b,positionData:J}),t&&(t.push(G.buffer),t.push(j.buffer),t.push(J.data.buffer),t.push(J.indices.buffer))}else{var J=o.extractPositionData(E,R);O.push({layout:R,interleavedVertexData:E,corMatrices:U,hasColors:b,positionData:J}),t&&(t.push(E),t.push(J.data.buffer),t.push(J.indices.buffer))}}return g&&(s.mat4d.multiplyVec3(x,g.center,g.center),u.vectorToVector(g.center,v,g.center,r),g.center[2]-=e.elevationOffset),{geometryBuffer:e.geometryBuffer,transformedGeometries:O,obb:g}},e.prototype._hasColors=function(e){for(var t=e.data,r=e.size,a=e.offsetIdx,o=e.strideIdx,n=a;n<t.length;n+=o)for(var s=0;s<r;s++)if(255!==t[n+s])return!0;return!1},e.prototype._createComponentNumbers=function(e,t){for(var r=e.data,a=e.offsetIdx,o=e.strideIdx,n=r.length/o,s=0,i=a,f=0;f<n;f++)f>=t[s+1]&&s++,r[i]=s,i+=o},e.prototype._updateObb=function(e,t,r){if(e.halfSize[0]>0){s.vec3d.subtract(e.center,e.halfSize,m),s.vec3d.add(e.center,e.halfSize,p);for(var a=t.offsetIdx;a<t.data.length;a+=t.strideIdx)m[0]=Math.min(m[0],t.data[a]),m[1]=Math.min(m[1],t.data[a+1]),m[2]=Math.min(m[2],t.data[a+2]),p[0]=Math.max(p[0],t.data[a]),p[1]=Math.max(p[1],t.data[a+1]),p[2]=Math.max(p[2],t.data[a+2]);s.vec3d.subtract(p,m,e.halfSize),s.vec3d.scale(e.halfSize,.5),s.vec3d.add(m,p,e.center),s.vec3d.scale(e.center,.5)}else{f.compute(t,e);var o=2*Math.sqrt(1+r[0]+r[5]+r[10]);v[0]=(r[9]-r[6])/o,v[1]=(r[2]-r[8])/o,v[2]=(r[4]-r[1])/o,v[3]=.25*o,s.quat4.conjugate(v),s.quat4.multiply(v,e.quaternion,e.quaternion)}},e}(),m=s.vec3d.create(),p=s.vec3d.create(),v=s.quat4.create();return d});