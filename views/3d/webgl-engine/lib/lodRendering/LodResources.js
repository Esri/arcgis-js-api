/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/arrayUtils"],(function(e,o){"use strict";function r(e){const r=[];return e.components.forEach((e=>{r.push(e.geometry)})),o.unique(r)}e.computeFaceCount=function(e){let o=0;return r(e).forEach((e=>{o+=e.data.indexCount/3})),o},e.geometriesFromLodLevelResources=r,e.geometriesFromLodResources=function(e){const r=[];return e.levels.forEach((e=>{e.components.forEach((e=>{r.push(e.geometry)}))})),o.unique(r)},e.materialsFromLodResources=function(e){const r=[];return e.levels.forEach((e=>{e.components.forEach((e=>{r.push(e.material)}))})),o.unique(r)},e.texturesFromLodResources=function(e){const r=[];return e.levels.forEach((e=>{e.components.forEach((e=>{e.textures&&r.push(...e.textures)}))})),o.unique(r)},Object.defineProperty(e,"__esModule",{value:!0})}));
