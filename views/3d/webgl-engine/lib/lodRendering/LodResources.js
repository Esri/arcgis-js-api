/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/arrayUtils"],(function(e,o){"use strict";function r(e){const r=[];return e.levels.forEach((e=>{e.components.forEach((e=>{r.push(e.material)}))})),o.unique(r)}function t(e){const r=new Array;return e.levels.forEach((e=>{e.components.forEach((e=>{e.textures&&r.push(...e.textures)}))})),o.unique(r)}function n(e){const r=[];return e.components.forEach((e=>{r.push(e.geometry)})),o.unique(r)}function u(e){const r=[];return e.levels.forEach((e=>{e.components.forEach((e=>{r.push(e.geometry)}))})),o.unique(r)}function s(e){return n(e).reduce(((e,o)=>e+o.indexCount/3),0)}e.computeFaceCount=s,e.geometriesFromLodLevelResources=n,e.geometriesFromLodResources=u,e.materialsFromLodResources=r,e.texturesFromLodResources=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
