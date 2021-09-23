/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function r(e,r,n){if(!r||!e||!e.map)return;const{map:d}=e,t=d.layers.find((e=>e===r));t||d.add(r,n),null!=n&&d.layers.reorder(t,n)}e.addUniqueLayer=r,Object.defineProperty(e,"__esModule",{value:!0})}));
