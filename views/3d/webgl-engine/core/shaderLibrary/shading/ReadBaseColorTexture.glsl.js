/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{TextureCoordinateAttributeType as e}from"../attributes/TextureCoordinateAttribute.glsl.js";import{VertexTextureCoordinates as r}from"../attributes/VertexTextureCoordinates.glsl.js";import{TextureAtlasLookup as t}from"../util/TextureAtlasLookup.glsl.js";import{glsl as o}from"../../shaderModules/interfaces.js";import{createTexture2DDrawSizeUniforms as u}from"../../shaderModules/Texture2DDrawUniform.js";function s(s,a){const d=s.fragment;if(a.hasBaseColorTexture){s.include(r,a);const l=a.textureCoordinateType===e.Atlas;d.uniforms.add(u("baseColorTexture",(e=>e.texture),l)),l?(s.include(t),d.code.add(o`vec4 readBaseColorTexture() {
return textureAtlasLookup(baseColorTexture, baseColorTextureSize, vuv0, vuvRegion);
}`)):d.code.add(o`vec4 readBaseColorTexture() {
return texture2D(baseColorTexture, vuv0);
}`)}else d.code.add(o`vec4 readBaseColorTexture() { return vec4(1.0); }`)}export{s as ReadBaseColorTexture};
