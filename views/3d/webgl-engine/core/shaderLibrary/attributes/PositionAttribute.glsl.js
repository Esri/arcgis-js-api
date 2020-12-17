/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,t){"use strict";e.PositionAttribute=function(e){e.attributes.add("position","vec3"),e.vertex.code.add(t.glsl`
    vec3 positionModel() { return position; }
  `)},Object.defineProperty(e,"__esModule",{value:!0})}));
