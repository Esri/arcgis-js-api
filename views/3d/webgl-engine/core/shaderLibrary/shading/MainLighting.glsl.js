/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/Float3PassUniform","../../shaderModules/FloatPassUniform","../../shaderModules/interfaces"],(function(i,n,t,a){"use strict";function o(i){i.uniforms.add(new n.Float3PassUniform("mainLightDirection",((i,n)=>n.lighting.mainLight.direction)))}function e(i){i.uniforms.add(new n.Float3PassUniform("mainLightIntensity",((i,n)=>n.lighting.mainLight.intensity)))}function g(i,n){n.useLegacyTerrainShading?i.uniforms.add(new t.FloatPassUniform("lightingFixedFactor",((i,n)=>n.lighting.noonFactor*(1-n.lighting.globalFactor)))):i.constants.add("lightingFixedFactor","float",0)}function l(i,n){const t=i.fragment;o(t),e(t),g(t,n),t.code.add(a.glsl`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}i.MainLighting=l,i.addMainLightDirection=o,i.addMainLightIntensity=e,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})}));
