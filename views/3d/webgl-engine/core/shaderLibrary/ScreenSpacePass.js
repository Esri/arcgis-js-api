/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../shaderModules/interfaces","../../lib/VertexAttribute"],(function(e,t,i){"use strict";function o(e,o=!0){e.attributes.add(i.VertexAttribute.POSITION,"vec2"),o&&e.varyings.add("uv","vec2"),e.vertex.code.add(t.glsl`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${o?t.glsl`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}e.ScreenSpacePass=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
