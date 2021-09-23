/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,t){"use strict";function i(e){e.attributes.add("position","vec3"),e.vertex.code.add(t.glsl`vec3 positionModel() { return position; }`)}e.PositionAttribute=i,Object.defineProperty(e,"__esModule",{value:!0})}));
