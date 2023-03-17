/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../LayerList/support/layerListUtils"],(function(e,r,s){"use strict";const a=e=>i(e)||t(e),i=e=>{if(!("type"in e))return!1;switch(e.type){case"feature":case"geojson":case"csv":case"graphics":case"wfs":case"map-notes":case"oriented-imagery":case"scene":case"building-scene":return!0;default:return!1}},t=e=>{const i=s.getNormalizedChildLayerProperty(e);if(null!=i&&e.hasOwnProperty(i)&&r.isSome(e[i]))for(const r of e[i])if(a(r))return!0;return!1};e.isValidSnappingLayer=a,e.isValidSnappingLayerGroup=t,e.isValidSnappingLayerSource=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
