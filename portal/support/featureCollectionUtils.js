/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function r(e){return n(e,"notes")}function t(e){return n(e,"markup")}function u(e){return n(e,"route")}function n(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}e.isMapNotesLayer=r,e.isMarkupLayer=t,e.isRouteLayer=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
