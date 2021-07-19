/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,r,n,d){"use strict";function o(){const e=new d.ShaderBuilder;return e.include(r.ScreenSpacePass),e.fragment.uniforms.add("tex","sampler2D"),e.fragment.uniforms.add("color","vec4"),e.fragment.code.add(n.glsl`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * color;
}`),e}var a=Object.freeze({__proto__:null,build:o});e.TextureOnlyShader=a,e.build=o}));
