/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./ChangeSet"],(function(e,t){"use strict";function r(e){const r=new Map,a=e=>{let n=r.get(e);return n||(n=new t.MaterialChangeSet,r.set(e,n)),n};return e.removes.forAll((e=>{n(e)&&a(e.material).removes.push(e)})),e.adds.forAll((e=>{n(e)&&a(e.material).adds.push(e)})),e.updates.forAll((e=>{n(e.renderGeometry)&&a(e.renderGeometry.material).updates.push(e)})),r}function n(e){return e.geometry.indexCount>=1}e.splitRenderGeometryChangeSetByMaterial=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
