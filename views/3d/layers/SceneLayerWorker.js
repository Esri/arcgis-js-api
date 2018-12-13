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

define(["require","exports","../../../core/promiseUtils","../../../core/libs/gl-matrix-2/gl-matrix","../../../geometry/SpatialReference","./i3s/I3SGeometryUtil","./i3s/I3SProjectionUtil","../support/meshProcessing","../support/orientedBoundingBox","../support/projectionUtils","../webgl-engine/lib/PreinterleavedGeometryData","../webgl-engine/lib/Util"],function(e,t,r,a,o,n,s,i,f,u,c,l){var d=function(){function e(){}return e.prototype.process=function(e){var t=[e.geometryBuffer];return r.resolve({result:this.transform(e,t),transferList:t})},e.prototype.transform=function(e,t){var r=o.fromJSON(e.indexSR),d=o.fromJSON(e.vertexSR),v=o.fromJSON(e.renderSR),h=!1,b=0,O=[],x=s.computeGlobalTransformation(e.mbs,e.elevationOffset,r,v),g=e.obb?null:f.create([0,0,0],[-1,-1,-1],[0,0,0,1]);a.vec3.copy(m,e.mbs),m[2]+=e.elevationOffset,a.vec3.copy(p,m);for(var C=0,y=e.geometryData;C<y.length;C++)for(var S=y[C],A=S.geometries,M=S.componentOffsets,I=0,N=A;I<N.length;I++){var R=N[I],V=e.layouts[b];++b;var D=[{name:l.VertexAttrConstants.COLOR,byteValue:255}],P=[l.VertexAttrConstants.NORMAL,l.VertexAttrConstants.NORMALCOMPRESSED,l.VertexAttrConstants.SYMBOLCOLOR,l.VertexAttrConstants.COMPONENTINDEX],E=n.interleaveGeometryBuffer(R,e.geometryBuffer,V,D,P),B=new c(new Float32Array(E),V,void 0,void 0,void 0,!0),L=B.getAttribute(l.VertexAttrConstants.POSITION);if(s.reprojectPoints(L,e.mbs,x,e.elevationOffset,r,d,v),g&&this._updateObb(g,L,x),e.needNormals){var q={normals:B.getAttribute(l.VertexAttrConstants.NORMALCOMPRESSED),positions:L,normalInd:B.getIndices(l.VertexAttrConstants.NORMALCOMPRESSED),positionInd:B.getIndices(l.VertexAttrConstants.POSITION)};n.processAndInterleaveNormals(e.normalReferenceFrame,R,e.geometryBuffer,x,q)}var z=B.getAttribute(l.VertexAttrConstants.COMPONENTINDEX);z&&this._createComponentNumbers(z,M);var T=B.getAttribute(l.VertexAttrConstants.COLOR);T&&!h&&(h=this._hasColors(T));var U={globalTrafo:x},_=V[0].stride,w=1-.8*_/(_+4),G=i.deduplicate(E,_/4,w);if(null!=G){var j=G.uniqueCount<65536?new Uint16Array(G.indices):G.indices,J=n.extractPositionData(G.buffer,V,j);O.push({layout:V,interleavedVertexData:G.buffer,indices:j,corMatrices:U,hasColors:h,positionData:J}),t&&(t.push(G.buffer),t.push(j.buffer),t.push(J.data.buffer),t.push(J.indices.buffer))}else{var J=n.extractPositionData(E,V);O.push({layout:V,interleavedVertexData:E,corMatrices:U,hasColors:h,positionData:J}),t&&(t.push(E),t.push(J.data.buffer),t.push(J.indices.buffer))}}return g&&(a.vec3.transformMat4(g.center,g.center,x),u.vectorToVector(g.center,v,g.center,r),g.center[2]-=e.elevationOffset),{geometryBuffer:e.geometryBuffer,transformedGeometries:O,obb:g}},e.prototype._hasColors=function(e){for(var t=e.data,r=e.size,a=e.offsetIdx,o=e.strideIdx,n=a;n<t.length;n+=o)for(var s=0;s<r;s++)if(255!==t[n+s])return!0;return!1},e.prototype._createComponentNumbers=function(e,t){for(var r=e.data,a=e.offsetIdx,o=e.strideIdx,n=r.length/o,s=0,i=a,f=0;f<n;f++)f>=t[s+1]&&s++,r[i]=s,i+=o},e.prototype._updateObb=function(e,t,r){if(e.halfSize[0]>0){a.vec3.subtract(m,e.center,e.halfSize),a.vec3.add(p,e.center,e.halfSize);for(var o=t.offsetIdx;o<t.data.length;o+=t.strideIdx)m[0]=Math.min(m[0],t.data[o]),m[1]=Math.min(m[1],t.data[o+1]),m[2]=Math.min(m[2],t.data[o+2]),p[0]=Math.max(p[0],t.data[o]),p[1]=Math.max(p[1],t.data[o+1]),p[2]=Math.max(p[2],t.data[o+2]);a.vec3.subtract(e.halfSize,p,m),a.vec3.scale(e.halfSize,e.halfSize,.5),a.vec3.add(e.center,m,p),a.vec3.scale(e.center,e.center,.5)}else{f.compute(t,e);var n=2*Math.sqrt(1+r[0]+r[5]+r[10]);v[0]=(r[9]-r[6])/n,v[1]=(r[2]-r[8])/n,v[2]=(r[4]-r[1])/n,v[3]=.25*n,a.quat.conjugate(v,v),a.quat.multiply(e.quaternion,v,e.quaternion)}},e}(),m=a.vec3f64.create(),p=a.vec3f64.create(),v=a.quatf32.create();return d});