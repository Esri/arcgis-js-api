/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/vec3","../../../../../../chunks/vec3f64","../../../../../../chunks/vec4","../../../../../../chunks/vec4f64","./PhysicallyBasedRenderingParameters.glsl","../../shaderModules/Float3PassUniform","../../shaderModules/Float4PassUniform","../../shaderModules/interfaces"],(function(i,n,t,g,e,l,h,s,a){"use strict";function o(i,t){const e=i.fragment,o=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===o?(e.uniforms.add(new h.Float3PassUniform("lightingAmbientSH0",((i,t)=>n.set(r,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),e.code.add(a.glsl`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(e.uniforms.add([new s.Float4PassUniform("lightingAmbientSH_R",((i,n)=>g.set(m,n.lighting.sh.r[0],n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3]))),new s.Float4PassUniform("lightingAmbientSH_G",((i,n)=>g.set(m,n.lighting.sh.g[0],n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3]))),new s.Float4PassUniform("lightingAmbientSH_B",((i,n)=>g.set(m,n.lighting.sh.b[0],n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3])))]),e.code.add(a.glsl`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===o&&(e.uniforms.add([new h.Float3PassUniform("lightingAmbientSH0",((i,t)=>n.set(r,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new s.Float4PassUniform("lightingAmbientSH_R1",((i,n)=>g.set(m,n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3],n.lighting.sh.r[4]))),new s.Float4PassUniform("lightingAmbientSH_G1",((i,n)=>g.set(m,n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3],n.lighting.sh.g[4]))),new s.Float4PassUniform("lightingAmbientSH_B1",((i,n)=>g.set(m,n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3],n.lighting.sh.b[4]))),new s.Float4PassUniform("lightingAmbientSH_R2",((i,n)=>g.set(m,n.lighting.sh.r[5],n.lighting.sh.r[6],n.lighting.sh.r[7],n.lighting.sh.r[8]))),new s.Float4PassUniform("lightingAmbientSH_G2",((i,n)=>g.set(m,n.lighting.sh.g[5],n.lighting.sh.g[6],n.lighting.sh.g[7],n.lighting.sh.g[8]))),new s.Float4PassUniform("lightingAmbientSH_B2",((i,n)=>g.set(m,n.lighting.sh.b[5],n.lighting.sh.b[6],n.lighting.sh.b[7],n.lighting.sh.b[8])))]),e.code.add(a.glsl`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==l.PBRMode.Normal&&t.pbrMode!==l.PBRMode.Schematic||e.code.add(a.glsl`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const r=t.create(),m=e.create();i.EvaluateAmbientLighting=o,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
