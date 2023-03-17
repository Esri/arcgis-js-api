/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function r(e){return u(e,"notes")}function t(e){return u(e,"markup")}function n(e){return u(e,"route")}function u(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}e.isMapNotesLayer=r,e.isMarkupLayer=t,e.isRouteLayer=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
