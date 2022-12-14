/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","./Callout3D","./LineCallout3D"],(function(t,e,o,r){"use strict";function l(t){if(!t)return!1;const o=t.verticalOffset;return!!o&&!(o.screenLength<=0||e.isSome(o.maxWorldLength)&&o.maxWorldLength<=0)}function n(t){if(!t)return!1;if(!t.supportsCallout||!t.supportsCallout())return!1;const e=t.callout;return!!e&&(!!e.visible&&!!l(t))}function i(t){return"point-3d"===t.type||"label-3d"===t.type}function u(t){return"center"===t.horizontalAlignment}const s={types:{key:"type",base:o,typeMap:{line:r}},json:{write:!0}};t.calloutProperty=s,t.hasCalloutSupport=i,t.hasVisibleCallout=n,t.hasVisibleVerticalOffset=l,t.textSymbolLayerSupportsVerticalOffset=u,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
