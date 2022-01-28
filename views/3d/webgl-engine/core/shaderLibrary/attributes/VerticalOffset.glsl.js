/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../util/ScreenSizePerspective.glsl","../../shaderModules/interfaces"],(function(e,t,r){"use strict";function l(e,l){const c=e.vertex.code;l.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),l.screenSizePerspectiveEnabled&&(e.include(t.ScreenSizePerspective),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),c.add(r.glsl`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===l.viewingMode?r.glsl`vec3 worldNormal = normalize(worldPos + localOrigin);`:r.glsl`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${l.screenSizePerspectiveEnabled?r.glsl`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:r.glsl`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):c.add(r.glsl`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function c(e,t,r){if(!t.verticalOffset)return;const l=i(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),c=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",l.screenLength*c,l.perDistance,l.minWorldLength,l.maxWorldLength)}function i(e,t,r,l=s){return l.screenLength=e.screenLength,l.perDistance=Math.tan(.5*t)/(.5*r),l.minWorldLength=e.minWorldLength,l.maxWorldLength=e.maxWorldLength,l}const s={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0};e.VerticalOffset=l,e.bindVerticalOffsetUniforms=c,e.calculateVerticalOffsetFactors=i,Object.defineProperty(e,"__esModule",{value:!0})}));
