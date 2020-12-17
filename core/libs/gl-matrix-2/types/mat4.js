/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";function e(t){return t instanceof Float32Array&&t.length>=16}function n(t){return Array.isArray(t)&&t.length>=16}t.isMat4=function(t){return e(t)||n(t)},t.isMat4f32=e,t.isMat4f64=n,Object.defineProperty(t,"__esModule",{value:!0})}));
