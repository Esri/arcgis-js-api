/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,r,n,o){"use strict";function d(){const e=new o.ShaderBuilder;return e.include(r.ScreenSpacePass),e.fragment.uniforms.add("tex","sampler2D"),e.fragment.uniforms.add("color","vec4"),e.fragment.code.add(n.glsl`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * color;
}`),e}const l=Object.freeze({__proto__:null,build:d});e.TextureOnlyShader=l,e.build=d}));
