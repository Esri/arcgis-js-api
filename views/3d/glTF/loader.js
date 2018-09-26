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

define(["require","exports","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/assignHelper","../../../core/arrayUtils","./DefaultErrorContext","./internal/Resource","../support/buffer/BufferView","../support/buffer/bufferViewUtil","../support/buffer/glUtil","../support/buffer/math","../webgl-engine/lib/Geometry","../webgl-engine/lib/PreinterleavedGeometryData","../webgl-engine/lib/Texture","../webgl-engine/materials/DefaultMaterial"],function(e,r,t,n,a,o,i,s,u,l,c,p,f,m,d,g){function w(e,r){return t(this,void 0,void 0,function(){var a,i,d,w,x=this;return n(this,function(y){switch(y.label){case 0:return[4,s.Resource.load(e,h,r)];case 1:return a=y.sent(),i={textures:new Map,materials:new Map,geometries:new Array,materialsByComponent:new Array,numberOfVertices:0},d=0,[4,b(a,function(e,r){return t(x,void 0,void 0,function(){var t,o,s,w,b,x,y,S,T,C,M,I,O,A;return n(this,function(n){switch(n.label){case 0:return t="gltf_"+d++,o=e.mode||4,4!==o?(h.warnUnsupported("Unsupported primitive mode ("+V[o]+"). Skipping primitive."),[2]):e.attributes.NORMAL?[4,a.getMaterial(e)]:(h.warnUnsupported("Vertex normals are required. Skipping primitive."),[2]);case 1:return s=n.sent(),w=v(i,s),b=g.getVertexBufferLayout(w.getParams()),[4,a.getIndexData(e)];case 2:return x=n.sent(),[4,a.getPositionData(e)];case 3:return y=n.sent(),S=b.createBuffer(y.count),p.vec3.transformMat4(S.position,y,r),T=S.getField("normal",u.BufferViewVec3f),T?[4,a.getNormalData(e)]:[3,5];case 4:C=n.sent(),p.vec3.transformMat4(T,C,r),n.label=5;case 5:return M=S.getField("uv0",u.BufferViewVec2f),M?[4,a.getTextureCoordinates(e)]:[3,7];case 6:I=n.sent(),l.unrolledCopyVec2(M,I),n.label=7;case 7:return O=S.getField("color",u.BufferViewVec4u8),O?[4,a.getVertexColors(e)]:[3,9];case 8:A=n.sent(),A instanceof u.BufferViewVec4f?p.vec4.scale(O,A,255):l.unrolledCopyVec4(O,A),n.label=9;case 9:return i.numberOfVertices+=S.count,i.materialsByComponent.push([w]),i.geometries.push(new f(new m(new Float32Array(S.buffer),c.glLayout(b),void 0,void 0,x,!1),t)),[2]}})})})];case 2:return y.sent(),w={stageResources:{textures:o.fromMapValues(i.textures),materials:o.fromMapValues(i.materials),geometries:i.geometries},materialsByComponent:i.materialsByComponent,numberOfVertices:i.numberOfVertices,pivotOffset:void 0},[2,w]}})})}function b(e,r){return t(this,void 0,void 0,function(){var t,a,o,i,s,u,l,c;return n(this,function(n){switch(n.label){case 0:t=e.json,a=0,n.label=1;case 1:if(!(a<t.nodes.length))return[3,6];if(o=t.nodes[a],i=e.getNodeTransform(a),h.warnUnsupportedIf(null!=o.weights,"Morph targets are not supported."),null==o.mesh)return[3,5];s=t.meshes[o.mesh],u=0,l=s.primitives,n.label=2;case 2:return u<l.length?(c=l[u],[4,r(c,i)]):[3,5];case 3:n.sent(),n.label=4;case 4:return u++,[3,2];case 5:return a++,[3,1];case 6:return[2]}})})}function v(e,r){if(e.materials.has(r))return e.materials.get(r);var t;if(null!=r.colorTexture&&!(t=e.textures.get(r.colorTexture))){var n=r.colorTexture,a=33071===n.wrapS||33071===n.wrapT;t=new d(n.data,n.name,{wrapClamp:a,mipmap:x.some(function(e){return e===n.minFilter}),preMultiplyAlpha:!0,noUnpackFlip:!0}),e.textures.set(r.colorTexture,t)}var o={transparent:"OPAQUE"!==r.alphaMode,diffuse:[r.color[0],r.color[1],r.color[2]],ambient:[r.color[0],r.color[1],r.color[2]],opacity:r.color[3],doubleSided:r.doubleSided,doubleSidedType:"winding-order",vertexColors:r.vertexColors,castShadows:!0,receiveSSAO:!0,textureId:t?t.id:void 0},i=new g(o,r.name||"");return e.materials.set(r,i),i}Object.defineProperty(r,"__esModule",{value:!0}),r.load=w;var h=new i.DefaultErrorContext,x=[9987,9985],V=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"]});