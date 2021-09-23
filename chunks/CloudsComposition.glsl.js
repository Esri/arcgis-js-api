/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateMainLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/CloudsParallaxShading.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,i,r,a,n,o,d,l){"use strict";function s(){const e=new l.ShaderBuilder;return e.attributes.add("position","vec2"),e.varyings.add("worldRay","vec3"),e.vertex.uniforms.add("inverseProjectionMatrix","mat4"),e.vertex.uniforms.add("inverseViewMatrix","mat4"),e.vertex.code.add(d.glsl`void main(void) {
vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1.0, 1.0)).xyz;
worldRay = (inverseViewMatrix * vec4(posViewNear, 0.0)).xyz;
gl_Position = vec4(position, 1.0, 1.0);
}`),e.fragment.uniforms.add("lightingMainDirection","vec3").add("cubeMap","samplerCube"),e.fragment.include(n.ColorConversion),e.fragment.include(o.RgbaFloatEncoding),e.include(r.EvaluateMainLighting),e.include(i.EvaluateAmbientLighting,{pbrMode:0,lightingSphericalHarmonicsOrder:2}),e.include(a.CloudsParallaxShading),e.fragment.code.add(d.glsl`void main() {
vec4 cloudsColor = crossFade == 0 ? renderCloud(normalize(worldRay)) : renderCloudCrossFade(normalize(worldRay));
gl_FragColor = vec4((1.0 - totalFadeInOut) * cloudsColor.rgb, cloudsColor.a);
}`),e}var t=Object.freeze({__proto__:null,build:s});e.CloudsCompositionShader=t,e.build=s}));
