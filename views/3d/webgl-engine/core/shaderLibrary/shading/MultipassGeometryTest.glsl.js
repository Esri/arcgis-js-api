/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../output/ReadLinearDepth.glsl","../../shaderModules/interfaces"],(function(e,t,r){"use strict";function o(e){e.include(t.ReadLinearDepth),e.uniforms.add("geometryDepthTexture","sampler2D"),e.uniforms.add("nearFar","vec2"),e.code.add(r.glsl`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, nearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)}function a(e,t){t.multipassGeometryEnabled&&t.geometryLinearDepthTexture&&e.bindTexture(t.geometryLinearDepthTexture,"geometryDepthTexture")}e.bindMultipassGeometryTexture=a,e.multipassGeometryTest=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
