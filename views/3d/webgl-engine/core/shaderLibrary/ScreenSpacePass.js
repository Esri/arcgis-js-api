/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../shaderModules/interfaces"],(function(e,i){"use strict";function o(e){e.attributes.add("position","vec2"),e.varyings.add("uv","vec2"),e.vertex.code.add(i.glsl`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      uv = position * 0.5 + vec2(0.5);
    }
  `)}e.ScreenSpacePass=o,Object.defineProperty(e,"__esModule",{value:!0})}));
