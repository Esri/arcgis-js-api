/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../../core/maybe","../../../../support/engineContent/marker","../../shaderModules/FloatPassUniform","../../shaderModules/interfaces","../../../shaders/LineMarkerTechniqueConfiguration"],(function(e,r,a,o,t,n){"use strict";function i(e,i){const d=e.vertex;e.constants.add("markerSizePerLineWidth","float",a.MARKER_SIZE_PER_LINE_WIDTH),d.uniforms.add(new o.FloatPassUniform("pixelRatio",((e,r)=>r.camera.pixelRatio))),r.isNone(d.uniforms.get("markerScale"))&&d.constants.add("markerScale","float",1),d.code.add(t.glsl`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),i.space===n.LineMarkerSpace.World&&(d.constants.add("maxSegmentLengthFraction","float",.45),d.uniforms.add(new o.FloatPassUniform("perRenderPixelRatio",((e,r)=>r.camera.perRenderPixelRatio))),d.code.add(t.glsl`float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}
bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}`))}e.MarkerSizing=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
