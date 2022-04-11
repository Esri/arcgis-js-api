/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,o,i,t,r){"use strict";var l;function n(l){const n=new t.ShaderBuilder;if(l.geometry===e.SimpleAtmosphereGeometry.Underground)n.attributes.add(r.VertexAttribute.POSITION,"vec2"),n.varyings.add("color","vec4"),n.vertex.uniforms.add("lightingMainDirection","vec3").add("cameraPosition","vec3").add("undergroundFadeAlpha","float"),n.vertex.code.add(i.glsl`void main(void) {
float ndotl = dot(normalize(cameraPosition), lightingMainDirection);
float lighting = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));
color = vec4(vec3(lighting), undergroundFadeAlpha);
gl_Position = vec4(position.xy, 1.0, 1.0);
}`),n.fragment.code.add(i.glsl`void main() {
gl_FragColor = color;
}`);else{n.include(o.Transform,{linearDepth:!1}),n.attributes.add(r.VertexAttribute.POSITION,"vec3"),n.varyings.add("vtc","vec2"),n.varyings.add("falloff","float");const t=l.geometry===e.SimpleAtmosphereGeometry.Cylinder;n.vertex.uniforms.add("proj","mat4").add("view","mat4").add("lightingMainDirection","vec3"),t||(n.varyings.add("innerFactor","float"),n.vertex.uniforms.add("silCircleCenter","vec3").add("silCircleV1","vec3").add("silCircleV2","vec3").add("texV","vec2").add("innerScale","float"));const a=6.2831853,d=1/128;n.vertex.code.add(i.glsl`
		void main(void) {
      ${t?i.glsl`
      vec3 pos = position;
      float ndotl = lightingMainDirection.z;
      vtc = vec2(0.0, position.z + 0.05);`:i.glsl`
      innerFactor = clamp(-position.z, 0.0, 1.0);
      float scale = position.y * (1.0 + innerFactor * innerScale);
      float phi = position.x * ${i.glsl.float(a*d)} + 1.0;
      vec3 pos =  (silCircleCenter + sin(phi) * silCircleV1 + cos(phi) * silCircleV2) * scale;
      float ndotl = dot(normalize(position.y > 0.0 ? pos: silCircleCenter), lightingMainDirection);
      vtc.x = position.x  * ${i.glsl.float(d)};
      vtc.y = texV.x * (1.0 - position.z) + texV.y * position.z;
      `}
      falloff = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));

		  gl_Position = transformPosition(proj, view, pos);
		  gl_Position.z = gl_Position.w; // project atmosphere onto the far plane
    }
	  `),n.fragment.uniforms.add("tex","sampler2D"),t||n.fragment.uniforms.add("altitudeFade","float"),n.fragment.code.add(i.glsl`
		void main() {
			vec4 atmosphereColor = texture2D(tex, vtc) * falloff;
      ${t?i.glsl`gl_FragColor = atmosphereColor;`:i.glsl`
			vec4 innerColor = vec4(atmosphereColor.rgb, 1.0 - altitudeFade);
			gl_FragColor = mix(atmosphereColor, innerColor, smoothstep(0.0, 1.0, innerFactor));
      `}
    }`)}return n}e.SimpleAtmosphereGeometry=void 0,(l=e.SimpleAtmosphereGeometry||(e.SimpleAtmosphereGeometry={}))[l.Cone=0]="Cone",l[l.Cylinder=1]="Cylinder",l[l.Underground=2]="Underground",l[l.COUNT=3]="COUNT";const a=Object.freeze(Object.defineProperty({__proto__:null,get SimpleAtmosphereGeometry(){return e.SimpleAtmosphereGeometry},build:n},Symbol.toStringTag,{value:"Module"}));e.SimpleAtmosphereShader=a,e.build=n}));
