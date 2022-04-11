/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./TextureCoordinateAttribute.glsl","../util/TextureAtlasLookup.glsl","../../shaderModules/interfaces"],(function(e,t,r,u){"use strict";function a(e,a){e.include(t.TextureCoordinateAttribute,a),e.fragment.code.add(u.glsl`
  struct TextureLookupParameter {
    vec2 uv;
    ${a.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),a.attributeTextureCoordinates===t.TextureCoordinateAttributeType.Default&&e.fragment.code.add(u.glsl`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),a.attributeTextureCoordinates===t.TextureCoordinateAttributeType.Atlas&&(e.include(r.TextureAtlasLookup),e.fragment.code.add(u.glsl`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}e.VertexTextureCoordinates=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
