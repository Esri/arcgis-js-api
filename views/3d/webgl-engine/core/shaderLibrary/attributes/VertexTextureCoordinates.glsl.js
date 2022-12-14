/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../../core/compilerUtils","./TextureCoordinateAttribute.glsl","../util/TextureAtlasLookup.glsl","../../shaderModules/interfaces"],(function(e,t,r,u,o){"use strict";function a(e,a){switch(e.include(r.TextureCoordinateAttribute,a),e.fragment.code.add(o.glsl`
  struct TextureLookupParameter {
    vec2 uv;
    ${a.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),a.textureCoordinateType){case r.TextureCoordinateAttributeType.Default:case r.TextureCoordinateAttributeType.Compressed:return void e.fragment.code.add(o.glsl`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case r.TextureCoordinateAttributeType.Atlas:return e.include(u.TextureAtlasLookup),void e.fragment.code.add(o.glsl`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:t.neverReached(a.textureCoordinateType);case r.TextureCoordinateAttributeType.None:case r.TextureCoordinateAttributeType.COUNT:return}}e.VertexTextureCoordinates=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
