/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../LayerList/support/layerListUtils"],(function(e,r,s){"use strict";const t=e=>i(e)||a(e),i=e=>{if(!("type"in e))return!1;switch(e.type){case"feature":case"geojson":case"csv":case"graphics":case"wfs":return!0;default:return!1}},a=e=>{const i=s.getNormalizedChildLayerProperty(e);if(e.hasOwnProperty(i)&&r.isSome(e[i]))for(const r of e[i])if(t(r))return!0;return!1};e.isValidSnappingLayer=t,e.isValidSnappingLayerGroup=a,e.isValidSnappingLayerSource=i,Object.defineProperty(e,"__esModule",{value:!0})}));
