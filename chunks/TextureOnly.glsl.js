/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,r,o,n){"use strict";function d(){const e=new n.ShaderBuilder;return e.include(r.ScreenSpacePass),e.fragment.uniforms.add("tex","sampler2D"),e.fragment.uniforms.add("uColor","vec4"),e.fragment.code.add(o.glsl`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),e}const l=Object.freeze(Object.defineProperty({__proto__:null,build:d},Symbol.toStringTag,{value:"Module"}));e.TextureOnlyShader=l,e.build=d}));
