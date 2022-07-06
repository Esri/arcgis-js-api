/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{neverReached as e}from"../../../../../../core/compilerUtils.js";import{glsl as t}from"../../shaderModules/interfaces.js";import{VertexAttribute as r}from"../../../lib/VertexAttribute.js";var o;function d(d,a){switch(a.textureCoordinateType){case o.Default:return d.attributes.add(r.UV0,"vec2"),d.varyings.add("vuv0","vec2"),void d.vertex.code.add(t`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case o.Atlas:return d.attributes.add(r.UV0,"vec2"),d.varyings.add("vuv0","vec2"),d.attributes.add(r.UVREGION,"vec4"),d.varyings.add("vuvRegion","vec4"),void d.vertex.code.add(t`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);case o.None:return void d.vertex.code.add(t`void forwardTextureCoordinates() {}`);default:e(a.textureCoordinateType);case o.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.COUNT=3]="COUNT"}(o||(o={}));export{d as TextureCoordinateAttribute,o as TextureCoordinateAttributeType};
