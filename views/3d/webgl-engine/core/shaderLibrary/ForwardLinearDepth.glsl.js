/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../shaderModules/interfaces"],(function(e,a){"use strict";e.ForwardLinearDepth=function(e,r){0===r.output&&r.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(a.glsl`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===r.output||3===r.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("uCameraNearFar","vec2"),e.vertex.code.add(a.glsl`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - uCameraNearFar[0]) / (uCameraNearFar[1] - uCameraNearFar[0]);
      }
    `)):e.vertex.code.add(a.glsl`
      void forwardLinearDepth() {}
    `)},Object.defineProperty(e,"__esModule",{value:!0})}));
