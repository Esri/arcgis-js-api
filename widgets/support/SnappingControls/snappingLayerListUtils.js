/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../LayerList/support/layerListUtils"],(function(e,r,t){"use strict";const i=e=>s(e)||a(e),s=e=>{if(!("type"in e))return!1;switch(e.type){case"feature":case"geojson":case"csv":case"graphics":case"wfs":return!0;default:return!1}},a=e=>{const s=t.getNormalizedChildLayerProperty(e);if(e.hasOwnProperty(s)&&r.isSome(e[s]))for(const r of e[s])if(i(r))return!0;return!1};e.isValidSnappingLayer=i,e.isValidSnappingLayerGroup=a,e.isValidSnappingLayerSource=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
