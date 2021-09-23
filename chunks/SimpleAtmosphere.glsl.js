/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,o,i,t){"use strict";function l(e){const l=new t.ShaderBuilder;if(2===e.geometry)l.attributes.add("position","vec2"),l.varyings.add("color","vec4"),l.vertex.uniforms.add("lightingMainDirection","vec3").add("cameraPosition","vec3").add("undergroundFadeAlpha","float"),l.vertex.code.add(i.glsl`void main(void) {
float ndotl = dot(normalize(cameraPosition), lightingMainDirection);
float lighting = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));
color = vec4(vec3(lighting), undergroundFadeAlpha);
gl_Position = vec4(position.xy, 1.0, 1.0);
}`),l.fragment.code.add(i.glsl`void main() {
gl_FragColor = color;
}`);else{l.include(o.Transform,{linearDepth:!1}),l.attributes.add("position","vec3"),l.varyings.add("vtc","vec2"),l.varyings.add("falloff","float");const t=1===e.geometry;l.vertex.uniforms.add("proj","mat4").add("view","mat4").add("lightingMainDirection","vec3"),t||(l.varyings.add("innerFactor","float"),l.vertex.uniforms.add("silCircleCenter","vec3").add("silCircleV1","vec3").add("silCircleV2","vec3").add("texV","vec2").add("innerScale","float"));const r=6.2831853,a=1/128;l.vertex.code.add(i.glsl`
		void main(void) {
      ${t?i.glsl`
      vec3 pos = position;
      float ndotl = lightingMainDirection.z;
      vtc = vec2(0.0, position.z + 0.05);`:i.glsl`
      innerFactor = clamp(-position.z, 0.0, 1.0);
      float scale = position.y * (1.0 + innerFactor * innerScale);
      float phi = position.x * ${i.glsl.float(r*a)} + 1.0;
      vec3 pos =  (silCircleCenter + sin(phi) * silCircleV1 + cos(phi) * silCircleV2) * scale;
      float ndotl = dot(normalize(position.y > 0.0 ? pos: silCircleCenter), lightingMainDirection);
      vtc.x = position.x  * ${i.glsl.float(a)};
      vtc.y = texV.x * (1.0 - position.z) + texV.y * position.z;
      `}
      falloff = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));

		  gl_Position = transformPosition(proj, view, pos);
		  gl_Position.z = gl_Position.w; // project atmosphere onto the far plane
    }
	  `),l.fragment.uniforms.add("tex","sampler2D"),t||l.fragment.uniforms.add("altitudeFade","float"),l.fragment.code.add(i.glsl`
		void main() {
			vec4 atmosphereColor = texture2D(tex, vtc) * falloff;
      ${t?i.glsl`gl_FragColor = atmosphereColor;`:i.glsl`
			vec4 innerColor = vec4(atmosphereColor.rgb, 1.0 - altitudeFade);
			gl_FragColor = mix(atmosphereColor, innerColor, smoothstep(0.0, 1.0, innerFactor));
      `}
    }`)}return l}var r=Object.freeze({__proto__:null,build:l});e.SimpleAtmosphereShader=r,e.build=l}));
