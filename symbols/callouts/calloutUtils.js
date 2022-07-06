/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"./Callout3D.js";import e from"./LineCallout3D.js";function n(t){if(!t)return!1;const e=t.verticalOffset;return!!e&&!(e.screenLength<=0||e.maxWorldLength<=0)}function r(t){if(!t)return!1;if(!t.supportsCallout||!t.supportsCallout())return!1;const e=t.callout;return!!e&&(!!e.visible&&!!n(t))}function o(t){return"point-3d"===t.type||"label-3d"===t.type}function i(t){return"center"===t.horizontalAlignment}const l={types:{key:"type",base:t,typeMap:{line:e}},json:{write:!0}};export{l as calloutProperty,o as hasCalloutSupport,r as hasVisibleCallout,n as hasVisibleVerticalOffset,i as textSymbolLayerSupportsVerticalOffset};
