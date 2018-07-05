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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/promiseUtils","../../../geometry/SpatialReference","./i3s/I3SGeometryUtil","./i3s/I3SProjectionUtil","../lib/glMatrix","../support/meshProcessing","../support/orientedBoundingBox","../support/projectionUtils","../webgl-engine/lib/PreinterleavedGeometryData","../webgl-engine/lib/Util"],function(e,t,r,a,n,o,s,i,f,u,c,l){var d=function(){function e(){}return e.prototype.process=function(e){var t=[e.geometryBuffer];return r.resolve({result:this.transform(e,t),transferList:t})},e.prototype.transform=function(e,t){var r=a.fromJSON(e.indexSR),d=a.fromJSON(e.vertexSR),m=a.fromJSON(e.renderSR),v=!1,h=0,b=[],O=e.obb?null:f.create([0,0,0],[-1,-1,-1],[0,0,0,1]);s.vec3d.set(e.center,p),p[2]+=e.elevationOffset;var x=s.mat4d.create();u.computeLinearTransformation(r,p,x,m);for(var g=0,C=e.geometryData;g<C.length;g++)for(var y=C[g],S=y.geometries,A=y.componentOffsets,M=0,I=S;M<I.length;M++){var N=I[M],V=e.layouts[h];++h;var R=[{name:l.VertexAttrConstants.COLOR,byteValue:255}],D=[l.VertexAttrConstants.NORMAL,l.VertexAttrConstants.NORMALCOMPRESSED,l.VertexAttrConstants.SYMBOLCOLOR,l.VertexAttrConstants.COMPONENTINDEX],P=n.interleaveGeometryBuffer(N,e.geometryBuffer,V,R,D),E=new c(new Float32Array(P),V),L=E.getAttribute(l.VertexAttrConstants.POSITION),B=o.reprojectPoints(L,e.center,e.elevationOffset,r,d,m);if(O&&this._updateObb(O,L,x),e.needNormals){var q={normals:E.getAttribute(l.VertexAttrConstants.NORMALCOMPRESSED),positions:L,normalInd:E.getIndices(l.VertexAttrConstants.NORMALCOMPRESSED),positionInd:E.getIndices(l.VertexAttrConstants.POSITION)};n.processAndInterleaveNormals(e.normalReferenceFrame,N,e.geometryBuffer,B.globalTrafo,q)}var T=E.getAttribute(l.VertexAttrConstants.COMPONENTINDEX);T&&this._createComponentNumbers(T,A);var z=E.getAttribute(l.VertexAttrConstants.COLOR);z&&!v&&(v=this._hasColors(z));var U=V[0].stride,_=1-.8*U/(U+4),w=i.deduplicate(P,U/4,_);if(null!=w){var j=w.uniqueCount<65536?new Uint16Array(w.indices):w.indices,G=n.extractPositionData(w.buffer,V,j);b.push({layout:V,interleavedVertexData:w.buffer,indices:j,corMatrices:B,hasColors:v,positionData:G}),t&&(t.push(w.buffer),t.push(j.buffer),t.push(G.data.buffer),t.push(G.indices.buffer))}else{var G=n.extractPositionData(P,V);b.push({layout:V,interleavedVertexData:P,corMatrices:B,hasColors:v,positionData:G}),t&&(t.push(P),t.push(G.data.buffer),t.push(G.indices.buffer))}}return O&&(s.mat4d.multiplyVec3(x,O.center,O.center),u.vectorToVector(O.center,m,O.center,d),O.center[2]-=e.elevationOffset),{geometryBuffer:e.geometryBuffer,transformedGeometries:b,obb:O}},e.prototype._hasColors=function(e){for(var t=e.data,r=e.size,a=e.offsetIdx,n=e.strideIdx,o=a;o<t.length;o+=n)for(var s=0;s<r;s++)if(255!==t[o+s])return!0;return!1},e.prototype._createComponentNumbers=function(e,t){for(var r=e.data,a=e.offsetIdx,n=e.strideIdx,o=r.length/n,s=0,i=a,f=0;f<o;f++)f>=t[s+1]&&s++,r[i]=s,i+=n},e.prototype._updateObb=function(e,t,r){if(e.halfSize[0]>0){s.vec3.subtract(e.center,e.halfSize,p),s.vec3.add(e.center,e.halfSize,m);for(var a=t.offsetIdx;a<t.data.length;a+=t.strideIdx)p[0]=Math.min(p[0],t.data[a]),p[1]=Math.min(p[1],t.data[a+1]),p[2]=Math.min(p[2],t.data[a+2]),m[0]=Math.max(m[0],t.data[a]),m[1]=Math.max(m[1],t.data[a+1]),m[2]=Math.max(m[2],t.data[a+2]);s.vec3.subtract(m,p,e.halfSize),s.vec3d.scale(e.halfSize,.5),s.vec3d.add(p,m,e.center),s.vec3d.scale(e.center,.5)}else{f.compute(t,e);var n=2*Math.sqrt(1+r[0]+r[5]+r[10]);v[0]=(r[9]-r[6])/n,v[1]=(r[2]-r[8])/n,v[2]=(r[4]-r[1])/n,v[3]=.25*n,s.quat4.conjugate(v),s.quat4.multiply(v,e.quaternion,e.quaternion)}},e}(),p=s.vec3d.create(),m=s.vec3d.create(),v=s.quat4.create();return d});