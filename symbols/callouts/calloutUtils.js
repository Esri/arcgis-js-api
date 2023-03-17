/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","./Callout3D","./LineCallout3D"],(function(t,e,r,n){"use strict";function o(t){if(!t)return!1;const r=t.verticalOffset;return!!r&&!(r.screenLength<=0||e.isSome(r.maxWorldLength)&&r.maxWorldLength<=0)}function l(t){if(!t)return!1;if(!t.supportsCallout||!t.supportsCallout())return!1;const e=t.callout;return!!e&&(!!e.visible&&!!o(t))}function i(t){return"point-3d"===t.type||"label-3d"===t.type}function u(t){return"center"===t.horizontalAlignment}const s={types:{key:"type",base:r,typeMap:{line:n}},json:{write:!0}};t.calloutProperty=s,t.hasCalloutSupport=i,t.hasVisibleCallout=l,t.hasVisibleVerticalOffset=o,t.textSymbolLayerSupportsVerticalOffset=u,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
