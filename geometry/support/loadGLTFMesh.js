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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/tsSupport/assignHelper","../../core/maybe","../../core/libs/gl-matrix-2/mat3","../../core/libs/gl-matrix-2/mat3f64","./MeshMaterial","./MeshTexture","./meshUtils/georeference","../../views/3d/glTF/DefaultLoadingContext","../../views/3d/glTF/loader","../../views/3d/glTF/internal/indexUtils","../../views/3d/support/buffer/BufferView","../../views/3d/support/buffer/math","../../views/3d/support/buffer/utils","../../views/3d/webgl-engine/materials/DefaultMaterial"],function(e,r,t,a,n,o,u,i,f,c,s,l,p,m,w,d,v,g){function B(e,r,n){return a(this,void 0,void 0,function(){var a,o,u,i,f,c;return t(this,function(t){switch(t.label){case 0:return a=new l.DefaultLoadingContext,[4,p.load(a,r,n)];case 1:return o=t.sent(),u=o.model,i=u.lods.shift(),f=new Map,c=new Map,u.textures.forEach(function(e,r){return f.set(r,V(e))}),u.materials.forEach(function(e,r){return c.set(r,h(e,f))}),[2,i.parts.map(function(r){return b(e,c,r,n)})]}})})}function V(e){return new c({data:e.data,wrap:x(e.parameters.wrap)})}function h(e,r){var t=g.COLOR_GAMMA,a=255*Math.pow(e.color[0],1/t),n=255*Math.pow(e.color[1],1/t),u=255*Math.pow(e.color[2],1/t),i=[a,n,u,e.opacity];return new f({color:i,colorTexture:o.unwrap(o.applySome(e.textureColor,function(e){return r.get(e)})),normalTexture:o.unwrap(o.applySome(e.textureNormal,function(e){return r.get(e)})),alphaMode:y(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided})}function b(e,r,t,a){var f=v.createBuffer(w.BufferViewVec3f64,t.attributes.position.count);d.vec3.transformMat4(f,t.attributes.position,t.transform);var c=o.applySome(t.attributes.normal,function(e){var r=v.createBuffer(w.BufferViewVec3f,e.count),a=u.mat3.normalFromMat4(i.mat3f64.create(),t.transform);return d.vec3.transformMat3(r,e,a),r.typedBuffer}),l=o.applySome(t.attributes.tangent,function(e){var r=v.createBuffer(w.BufferViewVec4f,e.count),a=u.mat3.normalFromMat4(i.mat3f64.create(),t.transform);return d.vec4.transformMat3(r,e,a),r.typedBuffer}),p=o.applySome(t.attributes.texCoord0,function(e){var r=v.createBuffer(w.BufferViewVec2f,e.count);return v.vec2.normalizeIntegerBuffer(r,e),r.typedBuffer}),m=o.applySome(t.attributes.color,function(e){var r=v.createBuffer(w.BufferViewVec4u8,e.count);if(4===e.elementCount)e instanceof w.BufferViewVec4f?d.vec4.scale(r,e,255):e instanceof w.BufferViewVec4u8?v.vec4.copy(r,e):e instanceof w.BufferViewVec4u16&&d.vec4.scale(r,e,1/255);else{v.vec4.fill(r,255,255,255,255);var t=new w.BufferViewVec3u8(r.buffer,0,4);e instanceof w.BufferViewVec3f?d.vec3.scale(t,e,255):e instanceof w.BufferViewVec3u8?v.vec3.copy(t,e):e instanceof w.BufferViewVec3u16&&d.vec3.scale(t,e,1/255)}return r.typedBuffer}),g=s.georeference({position:f.typedBuffer,normal:o.unwrap(c),tangent:o.unwrap(l)},e,n({},a,{unit:"meters"})),B=M(t.indices||t.attributes.position.count,t.primitiveType);return{vertexAttributes:{position:g.position,normal:g.normal,tangent:g.tangent,uv:o.unwrap(p),color:o.unwrap(m)},components:[{faces:B,material:r.get(t.material),trustSourceNormals:!0}],spatialReference:e.spatialReference}}function M(e,r){switch(r){case 4:return m.trianglesToTriangles(e);case 5:return m.triangleStripToTriangles(e);case 6:return m.triangleFanToTriangles(e)}}function y(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function x(e){return{horizontal:S(e.s),vertical:S(e.t)}}function S(e){switch(e){case 33071:return"clamp";case 33648:return"mirror";case 10497:return"repeat"}}Object.defineProperty(r,"__esModule",{value:!0}),r.loadGLTFMesh=B});