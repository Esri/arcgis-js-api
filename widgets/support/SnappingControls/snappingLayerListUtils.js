/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as r}from"../../../core/maybe.js";import{getNormalizedChildLayerProperty as e}from"../../LayerList/support/layerListUtils.js";const t=r=>s(r)||o(r),s=r=>{if(!("type"in r))return!1;switch(r.type){case"feature":case"geojson":case"csv":case"graphics":case"wfs":return!0;default:return!1}},o=s=>{const o=e(s);if(s.hasOwnProperty(o)&&r(s[o]))for(const r of s[o])if(t(r))return!0;return!1};export{t as isValidSnappingLayer,o as isValidSnappingLayerGroup,s as isValidSnappingLayerSource};
