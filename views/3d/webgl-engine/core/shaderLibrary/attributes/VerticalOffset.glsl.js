/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/vec4","../../../../../../chunks/vec4f64","../util/ScreenSizePerspective.glsl","../util/View.glsl","../../shaderModules/Float4PassUniform","../../shaderModules/interfaces"],(function(e,l,t,r,c,a,s){"use strict";function i(e,l){const t=e.vertex;l.hasVerticalOffset?(n(t),l.hasScreenSizePerspective&&(e.include(r.ScreenSizePerspective),r.addScreenSizePerspectiveAlignment(t),c.addCameraPosition(e.vertex,l)),t.code.add(s.glsl`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${l.spherical?s.glsl`vec3 worldNormal = normalize(worldPos + localOrigin);`:s.glsl`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${l.hasScreenSizePerspective?s.glsl`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:s.glsl`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):t.code.add(s.glsl`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const o=t.create();function n(e){e.uniforms.add(new a.Float4PassUniform("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:c,screenLength:a}=e.verticalOffset,s=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),i=t.camera.pixelRatio||1;return l.set(o,a*i,s,r,c)})))}e.VerticalOffset=i,e.addVerticalOffset=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
