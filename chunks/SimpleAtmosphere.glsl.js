/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{SimpleAtmosphereGeometry as e}from"../views/3d/environment/SimpleAtmosphereTechniqueConfiguration.js";import{Transform as o}from"../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js";import{Float2Uniform as i}from"../views/3d/webgl-engine/core/shaderModules/Float2Uniform.js";import{Float3PassUniform as r}from"../views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js";import{Float3Uniform as n}from"../views/3d/webgl-engine/core/shaderModules/Float3Uniform.js";import{FloatUniform as t}from"../views/3d/webgl-engine/core/shaderModules/FloatUniform.js";import{NoParameters as s,glsl as a}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{Matrix4PassUniform as l}from"../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js";import{Matrix4Uniform as d}from"../views/3d/webgl-engine/core/shaderModules/Matrix4Uniform.js";import{ShaderBuilder as c}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DPassUniform as m}from"../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js";import{VertexAttribute as g}from"../views/3d/webgl-engine/lib/VertexAttribute.js";class f extends s{}function p(s){const f=new c,{vertex:p,fragment:v}=f;if(s.geometry===e.Underground)f.attributes.add(g.POSITION,"vec2"),f.varyings.add("color","vec4"),p.uniforms.add([new r("lightingMainDirection",((e,o)=>o.lighting.lightingMainDirection)),new n("cameraPosition"),new t("undergroundFadeAlpha")]),p.code.add(a`void main(void) {
float ndotl = dot(normalize(cameraPosition), lightingMainDirection);
float lighting = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));
color = vec4(vec3(lighting), undergroundFadeAlpha);
gl_Position = vec4(position.xy, 1.0, 1.0);
}`),v.code.add(a`void main() {
gl_FragColor = color;
}`);else{f.include(o),f.attributes.add(g.POSITION,"vec3"),f.varyings.add("vtc","vec2"),f.varyings.add("falloff","float");const c=s.geometry===e.Cylinder;p.uniforms.add([new l("proj",((e,o)=>o.camera.projectionMatrix)),new d("view"),new r("lightingMainDirection",((e,o)=>o.lighting.lightingMainDirection))]),c||(f.varyings.add("innerFactor","float"),p.uniforms.add(new n("silCircleCenter")),p.uniforms.add(new n("silCircleV1")),p.uniforms.add(new n("silCircleV2")),p.uniforms.add(new i("texV")),p.uniforms.add(new t("innerScale")));const u=6.2831853,w=1/128;p.code.add(a`
		void main(void) {
      ${c?a`
      vec3 pos = position;
      float ndotl = lightingMainDirection.z;
      vtc = vec2(0.0, position.z + 0.05);`:a`
      innerFactor = clamp(-position.z, 0.0, 1.0);
      float scale = position.y * (1.0 + innerFactor * innerScale);
      float phi = position.x * ${a.float(u*w)} + 1.0;
      vec3 pos =  (silCircleCenter + sin(phi) * silCircleV1 + cos(phi) * silCircleV2) * scale;
      float ndotl = dot(normalize(position.y > 0.0 ? pos: silCircleCenter), lightingMainDirection);
      vtc.x = position.x  * ${a.float(w)};
      vtc.y = texV.x * (1.0 - position.z) + texV.y * position.z;
      `}
      falloff = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));

		  gl_Position = transformPosition(proj, view, pos);
		  gl_Position.z = gl_Position.w; // project atmosphere onto the far plane
    }
	  `),v.uniforms.add(new m("tex",(e=>e.texture))),c||v.uniforms.add(new t("altitudeFade")),v.code.add(a`
		void main() {
			vec4 atmosphereColor = texture2D(tex, vtc) * falloff;
      ${c?a`gl_FragColor = atmosphereColor;`:a`
			vec4 innerColor = vec4(atmosphereColor.rgb, 1.0 - altitudeFade);
			gl_FragColor = mix(atmosphereColor, innerColor, smoothstep(0.0, 1.0, innerFactor));
      `}
    }`)}return f}const v=Object.freeze(Object.defineProperty({__proto__:null,SimpleAtmospherePassParameters:f,build:p},Symbol.toStringTag,{value:"Module"}));export{f as S,v as a,p as b};
