/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{unique as o}from"../../../../../core/arrayUtils.js";function r(r){const e=[];return r.levels.forEach((o=>{o.components.forEach((o=>{e.push(o.material)}))})),o(e)}function e(r){const e=new Array;return r.levels.forEach((o=>{o.components.forEach((o=>{o.textures&&e.push(...o.textures)}))})),o(e)}function n(r){const e=[];return r.components.forEach((o=>{e.push(o.geometry)})),o(e)}function t(r){const e=[];return r.levels.forEach((o=>{o.components.forEach((o=>{e.push(o.geometry)}))})),o(e)}function c(o){return n(o).reduce(((o,r)=>o+r.indexCount/3),0)}export{c as computeFaceCount,n as geometriesFromLodLevelResources,t as geometriesFromLodResources,r as materialsFromLodResources,e as texturesFromLodResources};
