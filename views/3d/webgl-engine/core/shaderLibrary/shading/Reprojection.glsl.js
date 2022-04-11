/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,r){"use strict";function o(e){e.fragment.uniforms.add("lastFrameColorMap","sampler2D"),e.fragment.uniforms.add("reprojectionMatrix","mat4"),e.fragment.uniforms.add("proj","mat4"),e.fragment.code.add(r.glsl`vec2 reprojectionCoordinate(vec3 projectionCoordinate)
{
vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
reprojectedCoord.xy /= reprojectedCoord.w;
return reprojectedCoord.xy * 0.5 + 0.5;
}`)}function t(e,r){e.bindTexture(r.lastFrameColorTexture,"lastFrameColorMap"),e.setUniformMatrix4fv("reprojectionMatrix",r.reprojectionMatrix),e.setUniformMatrix4fv("proj",r.camera.projectionMatrix)}e.Reprojection=o,e.bindReprojectionUniforms=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
