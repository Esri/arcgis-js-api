/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{getAssetUrl as t}from"../../assets.js";function e(){return n||(n=new Promise((t=>import("../../chunks/i3s.js").then((t=>t.i)).then((({default:e})=>{const n=e({locateFile:i,onRuntimeInitialized:()=>t(n)});delete n.then})))).catch((t=>{throw t}))),n}function i(e){return t(`esri/libs/i3s/${e}`)}let n;export{e as get};
