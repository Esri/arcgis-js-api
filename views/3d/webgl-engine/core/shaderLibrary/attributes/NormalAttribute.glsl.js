/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../util/DecodeNormal.glsl"],(function(e,r,o){"use strict";e.NormalAttribute=function(e,d){0===d.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(r.glsl`
      vec3 normalModel() {
        return normal;
      }
    `)),1===d.normalType&&(e.include(o.DecodeNormal),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(r.glsl`
      vec3 normalModel() {
        return decodeNormal(normalCompressed);
      }
    `)),3===d.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(r.glsl`
      vec3 screenDerivativeNormal(vec3 positionView) {
        return normalize(cross(dFdx(positionView), dFdy(positionView)));
      }
    `))},Object.defineProperty(e,"__esModule",{value:!0})}));
