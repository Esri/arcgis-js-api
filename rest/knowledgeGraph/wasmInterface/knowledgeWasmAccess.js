/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{getAssetUrl as e}from"../../../assets.js";import t from"../../../core/has.js";const n="esri/rest/knowledgeGraph/wasmInterface/";let r;async function s(){if(r)return r;const e=t("wasm-simd");return r=o(e),r}async function o(t){if(t){const{default:t}=await import("../../../chunks/arcgis-knowledge-client-core-simd.js").then((e=>e.a));return t({locateFile:t=>e(n+t)})}const{default:r}=await import("../../../chunks/arcgis-knowledge-client-core.js").then((e=>e.a));return r({locateFile:t=>e(n+t)})}export{o as getNewInterface,s as getWasmInterface};
