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

define(["require","exports","../../../core/promiseUtils","../../../geometry/SpatialReference","./i3s/I3SGeometryUtil","./i3s/I3SProjectionUtil","../lib/glMatrix","../support/meshProcessing","../support/orientedBoundingBox","../support/projectionUtils","../webgl-engine/lib/PreinterleavedGeometryData","../webgl-engine/lib/Util"],function(e,t,r,a,n,o,s,i,f,c,u,l){var d=function(){function e(){}return e.prototype.process=function(e){var t=[e.geometryBuffer];return r.resolve({result:this.transform(e,t),transferList:t})},e.prototype.transform=function(e,t){var r=a.fromJSON(e.indexSR),d=a.fromJSON(e.vertexSR),p=a.fromJSON(e.renderSR),v=e.hasColors,h=0,O=[],b=e.obb?null:f.create([0,0,0],[-1,-1,-1],[0,0,0,1]);s.vec3d.set(e.center,m),m[2]+=e.elevationOffset;var g=s.mat4d.create();c.computeLinearTransformation(r,m,g,p);for(var x=0,C=e.geometryData;x<C.length;x++)for(var y=C[x],N=y.geometries,S=y.componentOffsets,A=0,M=N;A<M.length;A++){var I=M[A],V=e.layouts[h];++h;var R=[{name:l.VertexAttrConstants.COLOR,byteValue:255}],P=[l.VertexAttrConstants.NORMAL,l.VertexAttrConstants.NORMALCOMPRESSED,l.VertexAttrConstants.SYMBOLCOLOR,l.VertexAttrConstants.COMPONENTINDEX],E=n.interleaveGeometryBuffer(I,e.geometryBuffer,V,R,P),L=new u(new Float32Array(E),V),B=L.getAttribute(l.VertexAttrConstants.POSITION),D=o.reprojectPoints(B,e.center,e.elevationOffset,r,d,p);if(b&&this._updateObb(b,B,g),e.needNormals){var q={normals:L.getAttribute(l.VertexAttrConstants.NORMALCOMPRESSED),positions:B,normalInd:L.getIndices(l.VertexAttrConstants.NORMALCOMPRESSED),positionInd:L.getIndices(l.VertexAttrConstants.POSITION)};n.processAndInterleaveNormals(e.normalReferenceFrame,I,e.geometryBuffer,D.globalTrafo,q)}var T=L.getAttribute(l.VertexAttrConstants.COMPONENTINDEX);T&&this._createComponentNumbers(T,S);var z=L.getAttribute(l.VertexAttrConstants.COLOR);z&&(v=v||this._hasNonWhiteColors(z));var U=V[0].stride,_=1-.8*U/(U+4),w=i.deduplicate(E,U/4,_);if(null!=w){var j=w.uniqueCount<65536?new Uint16Array(w.indices):w.indices;O.push({layout:V,interleavedVertexData:w.buffer,indices:j,corMatrices:D,hasNonWhiteColors:v}),t&&(t.push(w.buffer),t.push(j.buffer))}else O.push({layout:V,interleavedVertexData:E,corMatrices:D,hasNonWhiteColors:v}),t&&t.push(E)}return b&&(s.mat4d.multiplyVec3(g,b.center,b.center),c.vectorToVector(b.center,p,b.center,d),b.center[2]-=e.elevationOffset),{geometryBuffer:e.geometryBuffer,transformedGeometries:O,obb:b||e.obb}},e.prototype._hasNonWhiteColors=function(e){for(var t=e.data,r=e.size,a=e.offsetIdx,n=e.strideIdx,o=a;o<t.length;o+=n)for(var s=0;s<r;s++)if(255!==t[o+s])return!0;return!1},e.prototype._createComponentNumbers=function(e,t){for(var r=e.data,a=e.offsetIdx,n=e.strideIdx,o=r.length/n,s=0,i=a,f=0;f<o;f++)f>=t[s+1]&&s++,r[i]=s,i+=n},e.prototype._updateObb=function(e,t,r){if(e.halfSize[0]>0){s.vec3.subtract(e.center,e.halfSize,m),s.vec3.add(e.center,e.halfSize,p);for(var a=t.offsetIdx;a<t.data.length;a+=t.strideIdx)m[0]=Math.min(m[0],t.data[a]),m[1]=Math.min(m[1],t.data[a+1]),m[2]=Math.min(m[2],t.data[a+2]),p[0]=Math.max(p[0],t.data[a]),p[1]=Math.max(p[1],t.data[a+1]),p[2]=Math.max(p[2],t.data[a+2]);s.vec3.subtract(p,m,e.halfSize),s.vec3d.scale(e.halfSize,.5),s.vec3d.add(m,p,e.center),s.vec3d.scale(e.center,.5)}else{f.compute(t,e);var n=2*Math.sqrt(1+r[0]+r[5]+r[10]);v[0]=(r[9]-r[6])/n,v[1]=(r[2]-r[8])/n,v[2]=(r[4]-r[1])/n,v[3]=.25*n,s.quat4.conjugate(v),s.quat4.multiply(v,e.quaternion,e.quaternion)}},e}(),m=s.vec3d.create(),p=s.vec3d.create(),v=s.quat4.create();return d});