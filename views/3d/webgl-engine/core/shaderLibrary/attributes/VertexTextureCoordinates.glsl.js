/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","./TextureCoordinateAttribute.glsl","../util/TextureAtlasLookup.glsl"],(function(e,t,r,u){"use strict";e.VertexTextureCoordinates=function(e,a){e.include(r.TextureCoordinateAttribute,a),e.fragment.code.add(t.glsl`
  struct TextureLookupParameter {
    vec2 uv;
    ${a.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===a.attributeTextureCoordinates&&e.fragment.code.add(t.glsl`
      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return texture2D(tex, params.uv);
      }
    `),2===a.attributeTextureCoordinates&&(e.include(u.TextureAtlasLookup),e.fragment.code.add(t.glsl`
    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
      }
    `))},Object.defineProperty(e,"__esModule",{value:!0})}));
