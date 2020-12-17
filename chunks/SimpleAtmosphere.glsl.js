/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,o,i,t){"use strict";function r(e){const r=new t.ShaderBuilder;return 2===e.geometry?(r.attributes.add("position","vec2"),r.varyings.add("color","vec4"),r.vertex.uniforms.add("lightingMainDirection","vec3").add("cameraPosition","vec3").add("undergroundFadeAlpha","float"),r.vertex.code.add(o.glsl`
      void main(void) {
          float ndotl = dot(normalize(cameraPosition), -lightingMainDirection);
          float lighting = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));

          color = vec4(vec3(lighting), undergroundFadeAlpha);

          gl_Position = vec4(position.xy, 1.0, 1.0); // on the far plane
      }
  `),r.fragment.code.add(o.glsl`
      void main() {
          gl_FragColor = color;
      }
  `)):(r.include(i.Transform,{linearDepth:!1}),r.attributes.add("position","vec3"),r.varyings.add("vtc","vec2"),r.varyings.add("falloff","float"),1!==e.geometry&&r.varyings.add("innerFactor","float"),r.vertex.uniforms.add("proj","mat4").add("view","mat4").add("lightingMainDirection","vec3"),1!==e.geometry&&r.vertex.uniforms.add("silCircleCenter","vec3").add("silCircleV1","vec3").add("silCircleV2","vec3").add("texV","vec2").add("innerScale","float"),1!==e.geometry&&r.vertex.code.add(o.glsl`
			const float TWICEPI = 2.0*3.14159265;
			const float ATMOSPHERE_RIM_SEGMENTS = 128.0;
		`),r.vertex.code.add(o.glsl`
		void main(void) {
			vec3 lightDirection = -lightingMainDirection;
	`),1===e.geometry?r.vertex.code.add(o.glsl`
			vec3 pos = position;
			float ndotl = lightDirection.z;
			vtc = vec2(0.0, position.z+0.05);
			`):r.vertex.code.add(o.glsl`
			innerFactor = clamp(-position.z, 0.0, 1.0);
			float scale = position.y * (1.0 + innerFactor * innerScale);
			float phi = position.x * (TWICEPI / ATMOSPHERE_RIM_SEGMENTS) + 1.0;
			vec3 pos =  (silCircleCenter + sin(phi) * silCircleV1 + cos(phi) * silCircleV2) * scale;
			float ndotl = dot(normalize(position.y > 0.0 ? pos: silCircleCenter), lightDirection);

			vtc.x = position.x / ATMOSPHERE_RIM_SEGMENTS;
			vtc.y = texV.x * (1.0 - position.z) + texV.y * position.z;
		`),r.vertex.code.add(o.glsl`
		falloff = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));

		gl_Position = transformPosition(proj, view, pos);
		gl_Position.z = gl_Position.w; // project atmosphere onto the far plane
			}
	`),r.fragment.uniforms.add("tex","sampler2D"),1!==e.geometry&&r.fragment.uniforms.add("altitudeFade","float"),r.fragment.code.add(o.glsl`
		void main() {
			vec4 texColor = texture2D(tex, vtc);
	`),1===e.geometry?r.fragment.code.add(o.glsl`
			gl_FragColor = texColor * falloff;
			}
		`):r.fragment.code.add(o.glsl`
			vec4 atmosphereColor = texColor * falloff;
			vec4 innerColor = vec4(texColor.rgb * falloff, 1.0 - altitudeFade);
			gl_FragColor = mix(atmosphereColor, innerColor, smoothstep(0.0, 1.0, innerFactor));
		}
		`)),r}var l=Object.freeze({__proto__:null,build:r});e.SimpleAtmosphereShader=l,e.build=r}));
