/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../core/compilerUtils"],(function(e,t){"use strict";const r={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},o={pbrMetallicRoughness:r,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},a={ESRI_externalColorMixMode:"tint"},l=(e={})=>{const t={...r,...e.pbrMetallicRoughness},l=i({...a,...e.extras});return{...o,...e,pbrMetallicRoughness:t,extras:l}};function i(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:t.neverReached(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}const s={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497},n=e=>({...s,...e});e.material=l,e.textureSampler=n,Object.defineProperty(e,"__esModule",{value:!0})}));
