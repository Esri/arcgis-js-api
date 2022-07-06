/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isNone as r}from"./maybe.js";import{eachAlways as o,throwIfAbortError as t}from"./promiseUtils.js";function n(r,t,n){return o(r.map(((r,o)=>t.apply(n,[r,o]))))}async function e(r,t,n){return(await o(r.map(((r,o)=>t.apply(n,[r,o]))))).map((r=>r.value))}async function a(o){if(r(o))return{ok:!1,error:new Error("no promise provided")};try{return{ok:!0,value:await o}}catch(t){return{ok:!1,error:t}}}async function u(r){try{return{ok:!0,value:await r}}catch(o){return t(o),{ok:!1,error:o}}}function i(r){if(!0===r.ok)return r.value;throw r.error}export{i as assertResult,n as forEach,e as map,a as result,u as resultOrAbort};
