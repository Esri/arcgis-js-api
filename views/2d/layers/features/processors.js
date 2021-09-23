/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["require","exports"],(function(e,o){"use strict";function r(e){return Object.freeze({__proto__:null,default:e})}function n(o){return new Promise("heatmap"===o?function(o,n){e(["./processors/HeatmapProcessor"],(function(e){o(r(e))}),n)}:function(o,n){e(["./processors/SymbolProcessor"],(function(e){o(r(e))}),n)})}o.loadProcessorModule=n,Object.defineProperty(o,"__esModule",{value:!0})}));
