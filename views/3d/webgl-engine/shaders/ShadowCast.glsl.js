/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../core/shaderLibrary/ScreenSpacePass","../core/shaderLibrary/output/ReadLinearDepth.glsl","../core/shaderLibrary/shading/ReadShadowMap.glsl","../core/shaderLibrary/util/CameraSpace.glsl","../core/shaderLibrary/util/RgbaFloatEncoding.glsl","../core/shaderModules/interfaces","../core/shaderModules/ShaderBuilder","../../../../chunks/ShadowCast.glsl"],(function(e,a,r,s,d,o,t,l,i){"use strict";Object.defineProperty(e,"ShadowCastPass",{enumerable:!0,get:()=>i.ShadowCastPass}),Object.defineProperty(e,"ShadowCastVisualization",{enumerable:!0,get:()=>i.ShadowCastVisualization}),e.build=i.build,e.shadowCastMaxSamples=i.shadowCastMaxSamples,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
