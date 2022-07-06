/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{MaterialChangeSet as e}from"./ChangeSet.js";function r(r){const n=new Map,a=r=>{let t=n.get(r);return t||(t=new e,n.set(r,t)),t};return r.removes.forAll((e=>{t(e)&&a(e.material).removes.push(e)})),r.adds.forAll((e=>{t(e)&&a(e.material).adds.push(e)})),r.updates.forAll((e=>{t(e.renderGeometry)&&a(e.renderGeometry.material).updates.push(e)})),n}function t(e){return e.data.indexCount>=1}export{r as splitRenderGeometryChangeSetByMaterial};
