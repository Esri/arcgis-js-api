/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../core/compilerUtils","../../shaderModules/interfaces","../../../lib/VertexAttribute"],(function(e,t,r,d){"use strict";var o;function u(o,u){switch(u.textureCoordinateType){case e.TextureCoordinateAttributeType.Default:return o.attributes.add(d.VertexAttribute.UV0,"vec2"),o.varyings.add("vuv0","vec2"),void o.vertex.code.add(r.glsl`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case e.TextureCoordinateAttributeType.Compressed:return o.attributes.add(d.VertexAttribute.UV0,"vec2"),o.varyings.add("vuv0","vec2"),void o.vertex.code.add(r.glsl`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case e.TextureCoordinateAttributeType.Atlas:return o.attributes.add(d.VertexAttribute.UV0,"vec2"),o.varyings.add("vuv0","vec2"),o.attributes.add(d.VertexAttribute.UVREGION,"vec4"),o.varyings.add("vuvRegion","vec4"),void o.vertex.code.add(r.glsl`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:t.neverReached(u.textureCoordinateType);case e.TextureCoordinateAttributeType.None:return void o.vertex.code.add(r.glsl`void forwardTextureCoordinates() {}`);case e.TextureCoordinateAttributeType.COUNT:return}}e.TextureCoordinateAttributeType=void 0,(o=e.TextureCoordinateAttributeType||(e.TextureCoordinateAttributeType={}))[o.None=0]="None",o[o.Default=1]="Default",o[o.Atlas=2]="Atlas",o[o.Compressed=3]="Compressed",o[o.COUNT=4]="COUNT",e.TextureCoordinateAttribute=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
