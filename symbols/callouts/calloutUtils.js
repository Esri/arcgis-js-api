/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./Callout3D","./LineCallout3D"],(function(t,e,l){"use strict";function n(t){if(!t)return!1;const e=t.verticalOffset;return!!e&&!(e.screenLength<=0||e.maxWorldLength<=0)}function r(t){if(!t)return!1;if(!t.supportsCallout||!t.supportsCallout())return!1;const e=t.callout;return!!e&&(!!e.visible&&!!n(t))}function o(t){return"point-3d"===t.type||"label-3d"===t.type}const u={types:{key:"type",base:e,typeMap:{line:l}},json:{write:!0}};t.calloutProperty=u,t.hasVisibleCallout=r,t.hasVisibleVerticalOffset=n,t.isCalloutSupport=o,Object.defineProperty(t,"__esModule",{value:!0})}));
