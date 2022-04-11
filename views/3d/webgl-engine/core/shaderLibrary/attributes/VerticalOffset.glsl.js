/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../ViewingMode","../util/ScreenSizePerspective.glsl","../../shaderModules/interfaces"],(function(e,t,l,r){"use strict";function c(e,c){const i=e.vertex.code;c.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),c.screenSizePerspectiveEnabled&&(e.include(l.ScreenSizePerspective),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),i.add(r.glsl`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${c.viewingMode===t.ViewingMode.Global?r.glsl`vec3 worldNormal = normalize(worldPos + localOrigin);`:r.glsl`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${c.screenSizePerspectiveEnabled?r.glsl`
          float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:r.glsl`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):i.add(r.glsl`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function i(e,t,l){if(!t.verticalOffset)return;const r=n(t.verticalOffset,l.camera.fovY,l.camera.fullViewport[3]),c=l.camera.pixelRatio||1;e.setUniform4f("verticalOffset",r.screenLength*c,r.perDistance,r.minWorldLength,r.maxWorldLength)}function n(e,t,l,r=a){return r.screenLength=e.screenLength,r.perDistance=Math.tan(.5*t)/(.5*l),r.minWorldLength=e.minWorldLength,r.maxWorldLength=e.maxWorldLength,r}const a={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0};e.VerticalOffset=c,e.bindVerticalOffsetUniforms=i,e.calculateVerticalOffsetFactors=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
