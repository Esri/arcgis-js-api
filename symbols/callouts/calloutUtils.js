/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./Callout3D","./LineCallout3D"],(function(t,e,n){"use strict";function l(t){if(!t)return!1;const e=t.verticalOffset;return!!e&&!(e.screenLength<=0||e.maxWorldLength<=0)}function o(t){if(!t)return!1;if(!t.supportsCallout||!t.supportsCallout())return!1;const e=t.callout;return!!e&&(!!e.visible&&!!l(t))}function r(t){return"point-3d"===t.type||"label-3d"===t.type}function u(t){const{horizontalAlignment:e}=t;return"center"===e||"justify"===e}const i={types:{key:"type",base:e,typeMap:{line:n}},json:{write:!0}};t.calloutProperty=i,t.hasCalloutSupport=r,t.hasVisibleCallout=o,t.hasVisibleVerticalOffset=l,t.textSymbolLayerSupportsVerticalOffset=u,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
