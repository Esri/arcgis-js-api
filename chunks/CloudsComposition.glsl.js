/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateMainLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/CloudsParallaxShading.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,i,r,a,n,l,d,o,s,t,g,c){"use strict";function u(){const e=new g.ShaderBuilder;return e.attributes.add(c.VertexAttribute.POSITION,"vec2"),e.varyings.add("worldRay","vec3"),e.vertex.uniforms.add("inverseProjectionMatrix","mat4"),e.vertex.uniforms.add("inverseViewMatrix","mat4"),e.vertex.code.add(t.glsl`void main(void) {
vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1.0, 1.0)).xyz;
worldRay = (inverseViewMatrix * vec4(posViewNear, 0.0)).xyz;
gl_Position = vec4(position, 1.0, 1.0);
}`),e.fragment.uniforms.add("lightingMainDirection","vec3"),e.fragment.include(o.ColorConversion),e.fragment.include(s.RgbaFloatEncoding),e.include(r.EvaluateMainLighting),e.include(i.EvaluateAmbientLighting,{pbrMode:n.PBRMode.Disabled,lightingSphericalHarmonicsOrder:2}),e.include(l.PiUtils),e.include(a.Gamma),e.include(d.CloudsParallaxShading),e.fragment.code.add(t.glsl`void main() {
vec4 cloudsColor = crossFade == 0 ? renderCloud(normalize(worldRay), cameraPosition) : renderCloudCrossFade(normalize(worldRay), cameraPosition);
gl_FragColor = vec4((1.0 - totalFadeInOut) * cloudsColor.rgb, cloudsColor.a);
}`),e}const v=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}));e.CloudsCompositionShader=v,e.build=u}));
