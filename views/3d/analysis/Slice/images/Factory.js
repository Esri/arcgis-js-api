/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"./heading-rotate-png.js";import r from"./tilt-rotate-png.js";import{Texture as e}from"../../../webgl-engine/lib/Texture.js";const n={mipmap:!0,preMultiplyAlpha:!0,width:64,height:64};function o(r){return r.fromData(t,(()=>new e(t,n)))}function i(t){return t.fromData(r,(()=>new e(r,n)))}export{o as getRotateHeadingTexture,i as getTiltRotateTexture};
