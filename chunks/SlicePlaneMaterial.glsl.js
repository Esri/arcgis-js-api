/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,d,r,i){"use strict";function t(){const e=new r.ShaderBuilder;return e.extensions.add("GL_OES_standard_derivatives"),e.vertex.uniforms.add("proj","mat4").add("view","mat4"),e.attributes.add(i.VertexAttribute.POSITION,"vec3"),e.attributes.add(i.VertexAttribute.UV0,"vec2"),e.varyings.add("vUV","vec2"),e.vertex.code.add(d.glsl`void main(void) {
vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);
}`),e.fragment.uniforms.add("backgroundColor","vec4").add("gridColor","vec4").add("ratio","float").add("gridWidth","float"),e.fragment.code.add(d.glsl`void main() {
const float LINE_WIDTH = 1.0;
vec2 uvScaled = vUV * gridWidth;
vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);
grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);
float gridFade = max(grid.x, grid.y);
float gridAlpha = gridColor.a * gridFade;
gl_FragColor =
vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +
vec4(gridColor.rgb, 1.0) * gridAlpha;
}`),e}const a=Object.freeze(Object.defineProperty({__proto__:null,build:t},Symbol.toStringTag,{value:"Module"}));e.SlicePlaneMaterialShader=a,e.build=t}));
