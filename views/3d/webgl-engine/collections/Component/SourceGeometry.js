/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{newLayout as e}from"../../../support/buffer/InterleavedLayout.js";import{TextureCoordinateAttributeType as r}from"../../core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js";import{VertexAttribute as t}from"../../lib/VertexAttribute.js";function o(o){const i=e().vec3f(t.POSITION);return o.normals&&i.vec2i16(t.NORMALCOMPRESSED,{glNormalized:!0}),o.textureCoordinates===r.Default?i.vec2f(t.UV0):o.textureCoordinates===r.Atlas&&(i.vec2f(t.UV0),i.vec4u16(t.UVREGION,{glNormalized:!0})),o.colors&&i.vec4u8(t.COLOR,{glNormalized:!0}),i.alignTo(4)}export{o as createVertexBufferLayout};
