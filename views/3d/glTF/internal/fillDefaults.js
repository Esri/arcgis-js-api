/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{neverReached as e}from"../../../../core/compilerUtils.js";import{TextureSamplingMode as o,TextureWrapMode as r}from"../../../webgl/enums.js";const t={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},a={pbrMetallicRoughness:t,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},l={ESRI_externalColorMixMode:"tint"},i=(e={})=>{const o={...t,...e.pbrMetallicRoughness},r=s({...l,...e.extras});return{...a,...e,pbrMetallicRoughness:o,extras:r}};function s(o){switch(o.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:e(o.ESRI_externalColorMixMode),o.ESRI_externalColorMixMode="tint"}return o}const n={magFilter:o.LINEAR,minFilter:o.LINEAR_MIPMAP_LINEAR,wrapS:r.REPEAT,wrapT:r.REPEAT},c=e=>({...n,...e});export{i as material,c as textureSampler};
