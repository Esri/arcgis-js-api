/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","./TextureCoordinateAttribute.glsl","../util/TextureAtlasLookup.glsl","../../shaderModules/interfaces"],(function(e,t,r,u){"use strict";function a(e,a){e.include(t.TextureCoordinateAttribute,a),e.fragment.code.add(u.glsl`
  struct TextureLookupParameter {
    vec2 uv;
    ${a.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===a.attributeTextureCoordinates&&e.fragment.code.add(u.glsl`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===a.attributeTextureCoordinates&&(e.include(r.TextureAtlasLookup),e.fragment.code.add(u.glsl`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}e.VertexTextureCoordinates=a,Object.defineProperty(e,"__esModule",{value:!0})}));
