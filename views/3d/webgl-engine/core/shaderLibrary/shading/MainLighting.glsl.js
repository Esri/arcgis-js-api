/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Float3PassUniform as i}from"../../shaderModules/Float3PassUniform.js";import{FloatPassUniform as n}from"../../shaderModules/FloatPassUniform.js";import{glsl as t}from"../../shaderModules/interfaces.js";function o(o,a){const g=o.fragment;a.isGround?g.uniforms.add(new n("lightingFixedFactor",((i,n)=>(1-n.lighting.groundLightingFactor)*(1-n.lighting.globalFactor)))):g.constants.add("lightingFixedFactor","float",0),g.uniforms.add([new i("lightingMainDirection",((i,n)=>n.lighting.lightingMainDirection)),new i("lightingMainIntensity",((i,n)=>n.lighting.mainLight.intensity))]),g.code.add(t`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}export{o as MainLighting};
