/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,t){"use strict";e.TextureCoordinateAttribute=function(e,d){1===d.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(t.glsl`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
      }
    `)),2===d.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(t.glsl`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
        vuvRegion = uvRegion;
      }
    `)),0===d.attributeTextureCoordinates&&e.vertex.code.add(t.glsl`
      void forwardTextureCoordinates() {}
    `)},Object.defineProperty(e,"__esModule",{value:!0})}));
