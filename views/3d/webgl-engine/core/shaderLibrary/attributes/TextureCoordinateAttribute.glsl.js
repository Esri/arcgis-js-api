/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../../../lib/VertexAttribute"],(function(e,t,r){"use strict";function o(o,u){u.attributeTextureCoordinates===e.TextureCoordinateAttributeType.Default&&(o.attributes.add(r.VertexAttribute.UV0,"vec2"),o.varyings.add("vuv0","vec2"),o.vertex.code.add(t.glsl`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),u.attributeTextureCoordinates===e.TextureCoordinateAttributeType.Atlas&&(o.attributes.add(r.VertexAttribute.UV0,"vec2"),o.varyings.add("vuv0","vec2"),o.attributes.add(r.VertexAttribute.UVREGION,"vec4"),o.varyings.add("vuvRegion","vec4"),o.vertex.code.add(t.glsl`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),u.attributeTextureCoordinates===e.TextureCoordinateAttributeType.None&&o.vertex.code.add(t.glsl`void forwardTextureCoordinates() {}`)}var u;e.TextureCoordinateAttributeType=void 0,(u=e.TextureCoordinateAttributeType||(e.TextureCoordinateAttributeType={}))[u.None=0]="None",u[u.Default=1]="Default",u[u.Atlas=2]="Atlas",u[u.COUNT=3]="COUNT",e.TextureCoordinateAttribute=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
