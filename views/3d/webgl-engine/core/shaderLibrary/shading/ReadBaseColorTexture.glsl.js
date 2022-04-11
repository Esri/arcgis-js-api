/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../attributes/TextureCoordinateAttribute.glsl","../attributes/VertexTextureCoordinates.glsl","../util/TextureAtlasLookup.glsl","../../shaderModules/interfaces"],(function(e,t,r,o,u){"use strict";function a(e,a){const s=e.fragment;a.baseColorTexture?(e.include(r.VertexTextureCoordinates,a),s.uniforms.add("baseColorTexture","sampler2D"),s.uniforms.add("baseColorTextureSize","vec2"),a.attributeTextureCoordinates===t.TextureCoordinateAttributeType.Atlas?(e.include(o.TextureAtlasLookup),s.code.add(u.glsl`vec4 readBaseColorTexture() {
return textureAtlasLookup(
baseColorTexture,
baseColorTextureSize,
vuv0,
vuvRegion
);
}`)):s.code.add(u.glsl`vec4 readBaseColorTexture() {
return texture2D(baseColorTexture, vuv0);
}`)):s.code.add(u.glsl`vec4 readBaseColorTexture() { return vec4(1.0); }`)}e.ReadBaseColorTexture=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
