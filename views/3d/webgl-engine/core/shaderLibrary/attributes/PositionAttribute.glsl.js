/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../../../lib/VertexAttribute"],(function(e,t,i){"use strict";function o(e){e.attributes.add(i.VertexAttribute.POSITION,"vec3"),e.vertex.code.add(t.glsl`vec3 positionModel() { return position; }`)}e.PositionAttribute=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
