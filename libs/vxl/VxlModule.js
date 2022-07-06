/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{getAssetUrl as t}from"../../assets.js";function e(t){return new Promise((e=>import("../../chunks/vxlLayer.js").then((t=>t.v)).then((({default:n})=>{const r=n({locateFile:i,preinitializedWebGLContext:t,onRuntimeInitialized:()=>e(r)})})))).catch((t=>{throw t}))}function i(e){return t(`esri/libs/vxl/${e}`)}export{e as loadVoxelWASM};
