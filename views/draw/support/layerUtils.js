/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe"],(function(e,r){"use strict";function n(e,r,n){if(!r||!e||!e.map)return;const{map:a}=e,i=a.layers.find((e=>e===r));i||a.add(r,n),null!=n&&a.layers.reorder(i,n)}function a(e,n){return e.allLayerViews.find((e=>{const a=e.layer;return"sublayers"in a&&r.isSome(a.sublayers)&&!!a.sublayers.find((e=>e===n))||a===n}))}e.addUniqueLayer=n,e.findLayerView=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
