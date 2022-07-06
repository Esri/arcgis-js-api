/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e,isNone as r}from"../../../../core/maybe.js";import{project as o}from"../../../../geometry/support/webMercatorUtils.js";import{projectGeometry as t}from"../../../../portal/support/geometryServiceUtils.js";function l(l){const s=l.view.spatialReference,i=l.layer.fullExtent,n=e(i)&&i.spatialReference;if(r(i)||!n)return Promise.resolve(null);if(n.equals(s))return Promise.resolve(i.clone());const a=o(i,s);return e(a)?Promise.resolve(a):l.view.state.isLocal?t(i,s,l.layer.portalItem).then((e=>!l.destroyed&&e?e:void 0)).catch((()=>null)):Promise.resolve(null)}export{l as toViewIfLocal};
