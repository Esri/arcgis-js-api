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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/mathUtils","../../../../core/maybe","../../webgl-engine/materials/internal/MaterialUtil"],function(e,a,r,t,l){function i(e,a){var r=new Map,i=function(e,a){if(t.isNone(e))return-1;if(r.has(e.id)){var l=r.get(e.id);return l.usage|=a,l.id}var i=r.size;return r.set(e.id,{id:i,usage:a}),i},o=a.pbrMetallicRoughness,s=o&&o.baseColorFactor,u=a.emissiveFactor,c=null==a.normalTexture&&null==a.emissiveTexture&&null==a.occlusionTexture&&(!o||null==o.metallicRoughnessTexture&&1===o.roughnessFactor&&(1===o.metallicFactor||0===o.metallicFactor)),d=c?l.defaultPBRMaterialParameters.metallicFactor:o?o.metallicFactor:1,m=c?l.defaultPBRMaterialParameters.roughnessFactor:o?o.roughnessFactor:1,g={baseColorFactor:s?[s[0],s[1],s[2],s[3]]:[1,1,1,1],baseColorTextureId:i(o&&o.baseColorTexture,1),metallicRoughnessTextureId:i(o&&o.metallicRoughnessTexture,2),metallicFactor:d,roughnessFactor:m},f={alphaMode:a.alphaMode,alphaCutoff:a.alphaCutoff,doubleSided:a.doubleSided,cullFace:a.cullFace,normalTextureId:i(a.normalTexture,4),emissiveTextureId:i(a.emissiveTexture,16),occlusionTextureId:i(a.occlusionTexture,8),emissiveFactor:u?[u[0],u[1],u[2]]:[0,0,0],metallicRoughness:g,wrapTextures:!1,isSchematic:c},h=[];return r.forEach(function(a,r){var l=a.usage,i=t.isSome(e)&&e[r]&&e[r].formats,o=i?i.map(function(e){var a=e.name,r=e.format;return{name:a,encoding:n[r]}}):[];h.push({id:r,usage:l,encodings:o})}),{material:f,textures:h}}function o(e){var a=e&&e.materialDefinitions?Object.keys(e.materialDefinitions)[0]:null,t=e&&e.textureDefinitions?Object.keys(e.textureDefinitions)[0]:null,l=a&&e.materialDefinitions[a],i=t&&e.textureDefinitions[t],o=s();if(null!=l){var n=l.params;n.diffuse&&(o.metallicRoughness.baseColorFactor=[n.diffuse[0],n.diffuse[1],n.diffuse[2],1]),null!=n.doubleSided&&(o.doubleSided=n.doubleSided,o.cullFace=n.doubleSided?"none":"back"),"none"!==n.cullFace&&"front"!==n.cullFace&&"back"!==n.cullFace||(o.cullFace=n.cullFace),n.transparency&&(o.metallicRoughness.baseColorFactor[3]=r.clamp(1-n.transparency,0,1)),(n.useVertexColorAlpha||o.metallicRoughness.baseColorFactor[3]<1)&&(o.alphaMode="blend")}var u=[];if(null!=i){!i.wrap||"repeat"!==i.wrap[0]&&"repeat"!==i.wrap[1]||(o.wrapTextures=!0),"rgba"===i.channels&&(o.alphaMode="blend");var c=i.images.length-1,d=i.images[c],m=function(e){return e&&e.split("/").pop()},g=Array.isArray(i.encoding)?i.encoding.map(function(e,a){return{name:m(d.href[a]),encoding:e}}):[{name:m(d.href),encoding:i.encoding}];u.push({id:0,usage:1,encodings:g}),o.metallicRoughness.baseColorTextureId=0}return{material:o,textures:u}}Object.defineProperty(a,"__esModule",{value:!0}),a.getMaterialAndTextures=i;var n={jpg:"image/jpeg",png:"image/png",dds:"image/vnd-ms.dds","ktx-etc2":"image/ktx"};a.getMaterialAndTexturesFromShared=o;var s=function(){return{alphaMode:"opaque",alphaCutoff:.1,doubleSided:!0,cullFace:"none",normalTextureId:-1,emissiveTextureId:-1,occlusionTextureId:-1,emissiveFactor:[0,0,0],metallicRoughness:{baseColorFactor:[.8,.8,.8,1],baseColorTextureId:-1,metallicRoughnessTextureId:-1,metallicFactor:0,roughnessFactor:.6},wrapTextures:!1,isSchematic:!0}}});