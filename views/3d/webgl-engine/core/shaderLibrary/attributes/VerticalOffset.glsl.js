/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../util/ScreenSizePerspective.glsl"],(function(e,t,r){"use strict";function l(e,l){const c=e.vertex.code;l.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),l.screenSizePerspectiveEnabled&&(e.include(r.ScreenSizePerspective),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),c.add(t.glsl`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===l.viewingMode?t.glsl`vec3 worldNormal = normalize(worldPos + localOrigin);`:t.glsl`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${l.screenSizePerspectiveEnabled?t.glsl`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:t.glsl`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):c.add(t.glsl`
    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }
    `)}function c(e,t,r,l=i){return l.screenLength=e.screenLength,l.perDistance=Math.tan(.5*t)/(.5*r),l.minWorldLength=e.minWorldLength,l.maxWorldLength=e.maxWorldLength,l}!function(e){e.bindUniforms=function(e,t,r){if(!t.verticalOffset)return;const l=c(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),i=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",l.screenLength*i,l.perDistance,l.minWorldLength,l.maxWorldLength)}}(l||(l={}));const i={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0};e.VerticalOffset=l,e.calculateVerticalOffsetFactors=c,Object.defineProperty(e,"__esModule",{value:!0})}));
