/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,d,r,i,o,a,t){"use strict";function l(e){const l=new a.ShaderBuilder;l.extensions.add("GL_OES_standard_derivatives");const{vertex:g,fragment:n,attributes:s,varyings:c}=l;return d.addProjViewLocalOrigin(g,e),s.add(t.VertexAttribute.POSITION,"vec3"),s.add(t.VertexAttribute.UV0,"vec2"),c.add("vUV","vec2"),g.code.add(o.glsl`void main(void) {
vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);
}`),n.uniforms.add([new r.Float4PassUniform("backgroundColor",(e=>e.backgroundColor)),new r.Float4PassUniform("gridColor",(e=>e.gridColor)),new i.FloatPassUniform("gridWidth",(e=>e.gridWidth))]),n.code.add(o.glsl`void main() {
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
}`),l}const g=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:"Module"}));e.SlicePlaneMaterial=g,e.build=l}));
