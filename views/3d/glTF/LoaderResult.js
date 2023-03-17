/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../webgl/enums"],(function(e,r){"use strict";function t(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}function l(e,t={}){return{data:e,parameters:{wrap:{s:r.TextureWrapMode.REPEAT,t:r.TextureWrapMode.REPEAT,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}e.makeMaterialParameters=t,e.makeTextureSource=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
