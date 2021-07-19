/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../LayerList/support/layerListUtils"],(function(e,r){"use strict";const t=e=>s(e)||i(e),s=e=>{if(!("type"in e))return!1;switch(e.type){case"feature":case"geojson":case"csv":case"graphics":case"wfs":return!0;default:return!1}},i=e=>{const s=r.getNormalizedChildLayerProperty(e);if(e.hasOwnProperty(s))for(const r of e[s])if(t(r))return!0;return!1};e.isValidSnappingLayer=t,e.isValidSnappingLayerGroup=i,e.isValidSnappingLayerSource=s,Object.defineProperty(e,"__esModule",{value:!0})}));
