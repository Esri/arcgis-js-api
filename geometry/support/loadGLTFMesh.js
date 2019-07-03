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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/tsSupport/assignHelper","../../core/maybe","../../core/libs/gl-matrix-2/mat3","../../core/libs/gl-matrix-2/mat3f64","./MeshMaterial","./MeshTexture","./meshUtils/georeference","../../views/3d/glTF/DefaultLoadingContext","../../views/3d/glTF/loader","../../views/3d/glTF/internal/indexUtils","../../views/3d/support/buffer/BufferView","../../views/3d/support/buffer/math","../../views/3d/support/buffer/utils","../../views/3d/webgl-engine/materials/DefaultMaterial"],function(e,t,r,a,n,o,u,i,f,c,s,l,p,m,w,d,v,g){function B(e,t,n){return a(this,void 0,void 0,function(){var a,o,u,i,f;return r(this,function(r){switch(r.label){case 0:return a=new l.DefaultLoadingContext,[4,p.load(a,t,n)];case 1:return o=r.sent(),u=o.model,i=u.lods.shift(),f=new Map,u.textures.forEach(function(e,t){f.set(t,new c({data:e.data,wrap:M(e.parameters.wrap)}))}),[2,i.parts.map(function(t){return V(e,u,f,t,n)})]}})})}function V(e,t,r,a,c){var l=v.createBuffer(w.BufferViewVec3f64,a.attributes.position.count);d.vec3.transformMat4(l,a.attributes.position,a.transform);var p=o.applySome(a.attributes.normal,function(e){var t=v.createBuffer(w.BufferViewVec3f,e.count),r=u.mat3.normalFromMat4(i.mat3f64.create(),a.transform);return d.vec3.transformMat3(t,e,r),t.typedBuffer}),m=o.applySome(a.attributes.tangent,function(e){var t=v.createBuffer(w.BufferViewVec4f,e.count),r=u.mat3.normalFromMat4(i.mat3f64.create(),a.transform);return d.vec4.transformMat3(t,e,r),t.typedBuffer}),B=o.applySome(a.attributes.texCoord0,function(e){var t=v.createBuffer(w.BufferViewVec2f,e.count);return v.vec2.normalizeIntegerBuffer(t,e),t.typedBuffer}),V=o.applySome(a.attributes.color,function(e){var t=v.createBuffer(w.BufferViewVec4u8,e.count);if(4===e.elementCount)e instanceof w.BufferViewVec4f?d.vec4.scale(t,e,255):e instanceof w.BufferViewVec4u8?v.vec4.copy(t,e):e instanceof w.BufferViewVec4u16&&d.vec4.scale(t,e,1/255);else{v.vec4.fill(t,255,255,255,255);var r=new w.BufferViewVec3u8(t.buffer,0,4);e instanceof w.BufferViewVec3f?d.vec3.scale(r,e,255):e instanceof w.BufferViewVec3u8?v.vec3.copy(r,e):e instanceof w.BufferViewVec3u16&&d.vec3.scale(r,e,1/255)}return t.typedBuffer}),M=s.georeference({position:l.typedBuffer,normal:o.unwrap(p),tangent:o.unwrap(m)},e,n({},c,{unit:"meters"})),y=b(a.indices||a.attributes.position.count,a.primitiveType),x=t.materials.get(a.material),S=g.COLOR_GAMMA,T=255*Math.pow(x.color[0],1/S),C=255*Math.pow(x.color[1],1/S),F=255*Math.pow(x.color[2],1/S),A=[T,C,F,x.opacity];return{vertexAttributes:{position:M.position,normal:M.normal,tangent:M.tangent,uv:o.unwrap(B),color:o.unwrap(V)},components:[{faces:y,material:new f.default({color:A,colorTexture:o.unwrap(o.applySome(x.textureColor,function(e){return r.get(e)})),normalTexture:o.unwrap(o.applySome(x.textureNormal,function(e){return r.get(e)})),alphaMode:h(x.alphaMode),alphaCutoff:x.alphaCutoff,doubleSided:x.doubleSided}),trustSourceNormals:!0}],spatialReference:e.spatialReference}}function b(e,t){switch(t){case 4:return m.trianglesToTriangles(e);case 5:return m.triangleStripToTriangles(e);case 6:return m.triangleFanToTriangles(e)}}function h(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function M(e){return{horizontal:y(e.s),vertical:y(e.t)}}function y(e){switch(e){case 33071:return"clamp";case 33648:return"mirror";case 10497:return"repeat"}}Object.defineProperty(t,"__esModule",{value:!0}),t.loadGLTFMesh=B});