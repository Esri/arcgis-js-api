/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(o,e){"use strict";function r(o,r){r.attributeColor?(o.attributes.add("color","vec4"),o.varyings.add("vColor","vec4"),o.vertex.code.add(e.glsl`void forwardVertexColor() { vColor = color; }`),o.vertex.code.add(e.glsl`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):o.vertex.code.add(e.glsl`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}o.VertexColor=r,Object.defineProperty(o,"__esModule",{value:!0})}));
