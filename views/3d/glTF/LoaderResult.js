/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{TextureWrapMode as e}from"../../webgl/enums.js";function t(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}function l(t,l={}){return{data:t,parameters:{wrap:{s:e.REPEAT,t:e.REPEAT,...l.wrap},noUnpackFlip:!0,mipmap:!1,...l}}}export{t as makeMaterialParameters,l as makeTextureSource};
