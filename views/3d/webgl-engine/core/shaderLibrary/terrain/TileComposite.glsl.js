/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../chunks/vec2f64","../../shaderModules/Float2PassUniform","../../shaderModules/FloatPassUniform","../../shaderModules/interfaces","../../../lib/VertexAttribute"],(function(e,t,s,o,r,i,a){"use strict";let n=function(e){function o(){var t;return(t=e.apply(this,arguments)||this).scale=1,t.offset=s.ZEROS,t}return t._inheritsLoose(o,e),o}(i.NoParameters);function u(e){e.attributes.add(a.VertexAttribute.POSITION,"vec2"),e.attributes.add(a.VertexAttribute.UV0,"vec2"),e.vertex.uniforms.add(new r.FloatPassUniform("scale",(e=>e.scale))),e.vertex.uniforms.add(new o.Float2PassUniform("offset",(e=>e.offset))),e.varyings.add("uv","vec2"),e.varyings.add("vuv","vec2"),e.vertex.code.add(i.glsl`void main(void) {
gl_Position = vec4(position, 0.0, 1.0);
uv = uv0 * scale + offset;
vuv = uv0;
}`)}e.TileComposite=u,e.TileCompositePassParameters=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
