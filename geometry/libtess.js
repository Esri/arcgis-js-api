/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{getAssetUrl as t}from"../assets.js";import s from"../core/has.js";const n=128e3;let e=null,i=null;async function o(){return e||(e=r()),e}async function r(){const n=s("esri-csp-restrictions")?await import("../chunks/libtess-asm.js").then((t=>t.l)):await import("../chunks/libtess.js").then((t=>t.l));i=await n.load({locateFile:s=>t(`esri/core/libs/libtess/${s}`)})}function a(t,s){const e=Math.max(t.length,n);return i.triangulate(t,s,e)}export{o as loadLibtess,a as triangulate};
