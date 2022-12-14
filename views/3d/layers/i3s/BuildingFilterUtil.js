/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isNone as e}from"../../../../core/maybe.js";import{d as r}from"../../../../chunks/vec4f64.js";import{createMaterialFromEdges as o}from"../support/edgeUtils.js";import{ColorMixModeEnum as a}from"../support/symbolColorUtils.js";var l;!function(e){e[e.Solid=0]="Solid",e[e.WireFrame=1]="WireFrame",e[e.XRay=2]="XRay"}(l||(l={}));const t=.15,i=.5*t;function c(e){switch(e.filterMode.type){case"solid":return{mode:l.Solid};case"wire-frame":return{mode:l.WireFrame,edgeMaterial:o(e.filterMode.edges,{})};case"x-ray":return{mode:l.XRay}}}function s(r,o){if(e(o))return r.color[3]=0,r.edgeMaterial=null,void(r.pickable=!1);switch(o.mode){case l.Solid:return;case l.WireFrame:return r.color[3]=0,r.edgeMaterial=o.edgeMaterial,void(r.pickable=!1);case l.XRay:return r.color[0]=1,r.color[1]=1,r.color[2]=1,r.color[3]*=t,r.colorMixMode=a.Replace,r.castShadows=!1,r.pickable=!1,void(r.edgeMaterial=d(r.edgeMaterial))}}function d(r){return e(r)?null:(u.lastMaterial!==r&&(u.cachedMaterial=n(r),u.lastMaterial=r),u.cachedMaterial)}function n(e){const o=r(e.color);return o[3]*=i,{...e,color:o}}const u={cachedMaterial:null,lastMaterial:null};export{l as FilterModeEnum,s as applyFilterMode,c as parseFilterMode};