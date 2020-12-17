/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../PortalItem","./portalItemUtils"],(function(e,t,r){"use strict";async function o(e,o,n,u){if(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)return!1;if(e.url)return!1;if(e.featureCollectionType&&e.featureCollectionType===n)return!0;if(e.itemId){const n=new t({id:e.itemId,portal:o});return await n.load(),"Feature Collection"===n.type&&r.hasTypeKeyword(n,u)}return!1}e.isMapNotesLayer=function(e,t){return o(e,t,"notes","Map Notes")},e.isRouteLayer=function(e,t){return o(e,t,"route","Route Layer")},Object.defineProperty(e,"__esModule",{value:!0})}));
