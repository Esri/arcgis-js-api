/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","./vec2f64","./vec3f64","../views/3d/environment/SimpleAtmosphereTechniqueConfiguration","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/Float3PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,o,i,r,t,n,a,s,l,d,c,m,g,u,f){"use strict";let h=function(e){function r(){var o;return(o=e.apply(this,arguments)||this).texV=i.create(),o.altitudeFade=0,o.innerScale=0,o.undergroundFadeAlpha=0,o.silhouette=new p,o}return o._inheritsLoose(r,e),r}(c.NoParameters),p=function(){this.center=r.create(),this.v1=r.create(),this.v2=r.create()};function v(e){const o=new g.ShaderBuilder,{vertex:i,fragment:r}=o;if(a.addMainLightDirection(i),e.geometry===t.SimpleAtmosphereGeometry.Underground)o.attributes.add(f.VertexAttribute.POSITION,"vec2"),o.varyings.add("color","vec4"),i.uniforms.add([new l.Float3PassUniform("cameraPosition",((e,o)=>o.camera.eye)),new d.FloatPassUniform("undergroundFadeAlpha",(e=>e.undergroundFadeAlpha))]),i.code.add(c.glsl`void main(void) {
float ndotl = dot(normalize(cameraPosition), mainLightDirection);
float lighting = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));
color = vec4(vec3(lighting), undergroundFadeAlpha);
gl_Position = vec4(position.xy, 1.0, 1.0);
}`),r.code.add(c.glsl`void main() {
gl_FragColor = color;
}`);else{o.include(n.Transform,e),o.attributes.add(f.VertexAttribute.POSITION,"vec3"),o.varyings.add("vtc","vec2"),o.varyings.add("falloff","float");const a=e.geometry===t.SimpleAtmosphereGeometry.Cylinder;i.uniforms.add([new m.Matrix4PassUniform("proj",((e,o)=>o.camera.projectionMatrix)),new m.Matrix4PassUniform("view",((e,o)=>o.camera.viewMatrix))]),a||(o.varyings.add("innerFactor","float"),i.uniforms.add(new l.Float3PassUniform("silCircleCenter",(e=>e.silhouette.center))),i.uniforms.add(new l.Float3PassUniform("silCircleV1",(e=>e.silhouette.v1))),i.uniforms.add(new l.Float3PassUniform("silCircleV2",(e=>e.silhouette.v2))),i.uniforms.add(new s.Float2PassUniform("texV",(e=>e.texV))),i.uniforms.add(new d.FloatPassUniform("innerScale",(e=>e.innerScale))));const g=6.2831853,h=1/128;i.code.add(c.glsl`
		void main(void) {
      ${a?c.glsl`
      vec3 pos = position;
      float ndotl = mainLightDirection.z;
      vtc = vec2(0.0, position.z + 0.05);`:c.glsl`
      innerFactor = clamp(-position.z, 0.0, 1.0);
      float scale = position.y * (1.0 + innerFactor * innerScale);
      float phi = position.x * ${c.glsl.float(g*h)} + 1.0;
      vec3 pos =  (silCircleCenter + sin(phi) * silCircleV1 + cos(phi) * silCircleV2) * scale;
      float ndotl = dot(normalize(position.y > 0.0 ? pos: silCircleCenter), mainLightDirection);
      vtc.x = position.x  * ${c.glsl.float(h)};
      vtc.y = texV.x * (1.0 - position.z) + texV.y * position.z;
      `}
      falloff = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));

		  gl_Position = transformPosition(proj, view, pos);
		  gl_Position.z = gl_Position.w; // project atmosphere onto the far plane
    }
	  `),r.uniforms.add(new u.Texture2DPassUniform("tex",(e=>e.texture))),a||r.uniforms.add(new d.FloatPassUniform("altitudeFade",(e=>e.altitudeFade))),r.code.add(c.glsl`
		void main() {
			vec4 atmosphereColor = texture2D(tex, vtc) * falloff;
      ${a?c.glsl`gl_FragColor = atmosphereColor;`:c.glsl`
			vec4 innerColor = vec4(atmosphereColor.rgb, 1.0 - altitudeFade);
			gl_FragColor = mix(atmosphereColor, innerColor, smoothstep(0.0, 1.0, innerFactor));
      `}
    }`)}return o}const w=Object.freeze(Object.defineProperty({__proto__:null,SilhouetteCircle:p,SimpleAtmospherePassParameters:h,build:v},Symbol.toStringTag,{value:"Module"}));e.SilhouetteCircle=p,e.SimpleAtmosphere=w,e.SimpleAtmospherePassParameters=h,e.build=v}));
