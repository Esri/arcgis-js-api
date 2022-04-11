/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(i,t){"use strict";function n(i){const n=i.fragment;n.uniforms.add("lightingMainDirection","vec3"),n.uniforms.add("lightingMainIntensity","vec3"),n.uniforms.add("lightingFixedFactor","float"),n.uniforms.add("lightingSpecularStrength","float"),n.uniforms.add("lightingEnvironmentStrength","float"),n.code.add(t.glsl`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}i.EvaluateMainLighting=n,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
