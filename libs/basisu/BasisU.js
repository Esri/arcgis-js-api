/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{getAssetUrl as e}from"../../assets.js";import{isNone as t}from"../../core/maybe.js";function s(){if(t(i)){const t=t=>e(`esri/libs/basisu/${t}`);i=import("../../chunks/basis_transcoder.js").then((e=>e.b)).then((({default:e})=>e({locateFile:t}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return i}let i;export{s as getBasisTranscoder};
