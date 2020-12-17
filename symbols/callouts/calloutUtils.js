/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./Callout3D","./LineCallout3D"],(function(t,e,l){"use strict";function n(t){if(!t)return!1;const e=t.verticalOffset;return!!e&&!(e.screenLength<=0||e.maxWorldLength<=0)}const r={types:{key:"type",base:e,typeMap:{line:l}},json:{write:!0}};t.calloutProperty=r,t.hasVisibleCallout=function(t){if(!t)return!1;if(!t.supportsCallout||!t.supportsCallout())return!1;const e=t.callout;return!!e&&(!!e.visible&&!!n(t))},t.hasVisibleVerticalOffset=n,t.isCalloutSupport=function(t){return"point-3d"===t.type||"label-3d"===t.type},Object.defineProperty(t,"__esModule",{value:!0})}));
