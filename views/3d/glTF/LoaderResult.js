/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../webgl/enums"],(function(e,t){"use strict";function r(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}function o(e,r={}){return{data:e,parameters:{wrap:{s:t.TextureWrapMode.REPEAT,t:t.TextureWrapMode.REPEAT,...r.wrap},noUnpackFlip:!0,mipmap:!1,...r}}}e.makeMaterialParameters=r,e.makeTextureSource=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
