/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./ChangeSet"],(function(e,t){"use strict";function r(e){const r=new Map,n=e=>{let a=r.get(e);return a||(a=new t.MaterialChangeSet,r.set(e,a)),a};return e.removes.forAll((e=>{a(e)&&n(e.material).removes.push(e)})),e.adds.forAll((e=>{a(e)&&n(e.material).adds.push(e)})),e.updates.forAll((e=>{a(e.renderGeometry)&&n(e.renderGeometry.material).updates.push(e)})),r}function a(e){return e.data.indexCount>=1}e.splitRenderGeometryChangeSetByMaterial=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
