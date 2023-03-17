/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../output/ReadLinearDepth.glsl","../../shaderModules/Float2PassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],(function(e,t,r,o,a){"use strict";function s(e){e.include(t.ReadLinearDepth),e.uniforms.add([new a.Texture2DPassUniform("geometryDepthTexture",((e,t)=>t.multipassGeometry.linearDepthTexture)),new r.Float2PassUniform("nearFar",((e,t)=>t.camera.nearFar))]),e.code.add(o.glsl`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, nearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)}let n=function(){this.enabled=!1};e.MultipassGeometryUniforms=n,e.multipassGeometryTest=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
