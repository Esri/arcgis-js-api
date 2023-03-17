/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/arrayUtils","../../../../../core/maybe"],(function(e,o,r){"use strict";let t=function(e,o=null){this.geometry=e,this.textures=o};function n(e){const r=[];return e.levels.forEach((e=>e.components.forEach((e=>r.push(e.geometry.material))))),o.unique(r)}function s(e){const t=new Array;return e.levels.forEach((e=>{e.components.forEach((e=>{r.isSome(e.textures)&&t.push(...e.textures)}))})),o.unique(t)}function u(e){const r=e.components.map((e=>e.geometry));return o.unique(r)}function c(e){const r=[];return e.levels.forEach((e=>{e.components.forEach((e=>{r.push(e.geometry)}))})),o.unique(r)}e.LodComponentResources=t,e.geometriesFromLodLevelResources=u,e.geometriesFromLodResources=c,e.materialsFromLodResources=n,e.texturesFromLodResources=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
