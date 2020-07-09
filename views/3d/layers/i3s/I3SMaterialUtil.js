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

define(["require","exports","../../../../core/mathUtils","../../../../core/maybe","../../webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../../webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl"],(function(e,a,r,l,t,i){Object.defineProperty(a,"__esModule",{value:!0}),a.getMaterialAndTextures=function(e,a){var r=new Map,i=function(e,a){if(l.isNone(e))return-1;if(r.has(e.id)){var t=r.get(e.id);return t.usage|=a,t.id}var i=r.size;return r.set(e.id,{id:i,usage:a}),i},n=a.pbrMetallicRoughness,s=n&&n.baseColorFactor,u=a.emissiveFactor,c=null==a.normalTexture&&null==a.emissiveTexture&&null==a.occlusionTexture&&(!n||null==n.metallicRoughnessTexture&&1===n.roughnessFactor&&(1===n.metallicFactor||0===n.metallicFactor)),d=c?t.PBRSchematicMRRValues[0]:n?n.metallicFactor:1,m=c?t.PBRSchematicMRRValues[1]:n?n.roughnessFactor:1,g="mask"===a.alphaMode?33:1,f={baseColorFactor:s?[s[0],s[1],s[2],s[3]]:[1,1,1,1],baseColorTextureId:i(n&&n.baseColorTexture,g),metallicRoughnessTextureId:i(n&&n.metallicRoughnessTexture,2),metallicFactor:d,roughnessFactor:m},h={alphaMode:a.alphaMode,alphaCutoff:a.alphaCutoff,doubleSided:a.doubleSided,cullFace:"none"===a.cullFace?0:"back"===a.cullFace?2:"front"===a.cullFace?1:void 0,normalTextureId:i(a.normalTexture,4),emissiveTextureId:i(a.emissiveTexture,16),occlusionTextureId:i(a.occlusionTexture,8),emissiveFactor:u?[u[0],u[1],u[2]]:[0,0,0],metallicRoughness:f,wrapTextures:!1,isSchematic:c},p=[];return r.forEach((function(a,r){var t=a.usage,i=l.isSome(e)&&e[r]&&e[r].formats,n=i?i.map((function(e){var a=e.name,r=e.format;return{name:a,encoding:o[r]}})):[];p.push({id:r,usage:t,encodings:n})})),{material:h,textures:p}};var o={jpg:"image/jpeg",png:"image/png",dds:"image/vnd-ms.dds","ktx-etc2":"image/ktx"};a.getMaterialAndTexturesFromShared=function(e){var a=e&&e.materialDefinitions?Object.keys(e.materialDefinitions)[0]:null,l=e&&e.textureDefinitions?Object.keys(e.textureDefinitions)[0]:null,t=a&&e.materialDefinitions[a],i=l&&e.textureDefinitions[l],o=n();if(null!=t){var s=t.params;s.diffuse&&(o.metallicRoughness.baseColorFactor=[s.diffuse[0],s.diffuse[1],s.diffuse[2],1]),null!=s.doubleSided&&(o.doubleSided=s.doubleSided,o.cullFace=s.doubleSided?0:2),"none"!==s.cullFace&&"front"!==s.cullFace&&"back"!==s.cullFace||(o.cullFace="none"===s.cullFace?0:"back"===s.cullFace?2:1),s.transparency&&(o.metallicRoughness.baseColorFactor[3]=r.clamp(1-s.transparency,0,1)),(s.useVertexColorAlpha||o.metallicRoughness.baseColorFactor[3]<1)&&(o.alphaMode="blend")}var u=[];if(null!=i){!i.wrap||"repeat"!==i.wrap[0]&&"repeat"!==i.wrap[1]||(o.wrapTextures=!0);var c=1;"rgba"===i.channels&&(o.alphaMode="blend",c|=32);var d=i.images.length-1,m=i.images[d],g=function(e){return e&&e.split("/").pop()},f=Array.isArray(i.encoding)?i.encoding.map((function(e,a){return{name:g(m.href[a]),encoding:e}})):[{name:g(m.href),encoding:i.encoding}];u.push({id:0,usage:c,encodings:f}),o.metallicRoughness.baseColorTextureId=0}return{material:o,textures:u}};var n=function(){return{alphaMode:"opaque",alphaCutoff:i.defaultMaskAlphaCutoff,doubleSided:!0,cullFace:0,normalTextureId:-1,emissiveTextureId:-1,occlusionTextureId:-1,emissiveFactor:[0,0,0],metallicRoughness:{baseColorFactor:[.8,.8,.8,1],baseColorTextureId:-1,metallicRoughnessTextureId:-1,metallicFactor:0,roughnessFactor:.6},wrapTextures:!1,isSchematic:!0}}}));