/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./HUDUniforms","../util/ScreenSizePerspective.glsl","../../shaderModules/interfaces","../../../lib/VertexAttribute"],(function(e,t,o,a,r){"use strict";var i;function n(t,i){const n=t;n.include(o.ScreenSizePerspective),n.attributes.add(r.VertexAttribute.POSITION,"vec3"),n.attributes.add(r.VertexAttribute.NORMAL,"vec3"),n.attributes.add(r.VertexAttribute.AUXPOS1,"vec4"),n.vertex.uniforms.add("proj","mat4"),n.vertex.uniforms.add("view","mat4"),n.vertex.uniforms.add("viewNormal","mat4"),n.vertex.uniforms.add("viewport","vec4"),n.vertex.uniforms.add("cameraPosition","vec3"),n.vertex.uniforms.add("polygonOffset","float"),n.vertex.uniforms.add("cameraGroundRelative","float"),n.vertex.uniforms.add("pixelRatio","float"),n.vertex.uniforms.add("perDistancePixelRatio","float"),n.vertex.uniforms.add("renderTransparentlyOccludedHUD","float"),i.verticalOffsetEnabled&&n.vertex.uniforms.add("verticalOffset","vec4"),i.screenSizePerspectiveEnabled&&n.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4"),n.vertex.uniforms.add("hudVisibilityTexture","sampler2D"),n.vertex.constants.add("smallOffsetAngle","float",.984807753012208),n.vertex.code.add(a.glsl`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),n.vertex.code.add(a.glsl`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = cameraGroundRelative;
}
float groundRelative = cameraGroundRelative * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),i.isDraped||n.vertex.code.add(a.glsl`void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
float distanceToCamera = length(posView);
float pixelOffset = distanceToCamera * perDistancePixelRatio * 0.5;
vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;
vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
posModel += modelOffset;
posView += viewOffset;
}`),n.vertex.code.add(a.glsl`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      // centerOffset is in view space and is used to implement world size offsetting
      // of labels with respect to objects. It also pulls the label towards the viewer
      // so that the label is visible in front of the object.
      vec3 centerOffset = auxpos1.xyz;

      // The pointGroundDistance is the distance of the geometry to the ground and is
      // negative if the point is below the ground, or positive if the point is above
      // ground.
      float pointGroundDistance = auxpos1.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${i.isDraped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${i.screenSizePerspectiveEnabled&&(i.verticalOffsetEnabled||i.screenCenterOffsetUnitsEnabled===e.HUDSpace.Screen)?"vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${i.verticalOffsetEnabled?i.screenSizePerspectiveEnabled?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${i.verticalOffsetEnabled?a.glsl`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${i.screenCenterOffsetUnitsEnabled!==e.HUDSpace.Screen?a.glsl`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `:""}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${i.screenCenterOffsetUnitsEnabled===e.HUDSpace.Screen?i.screenSizePerspectiveEnabled?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${i.screenCenterOffsetUnitsEnabled===e.HUDSpace.Screen?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `),n.vertex.code.add(a.glsl`bool testVisibilityHUD(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture2D(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function s(e,o){e.setUniform1f("renderTransparentlyOccludedHUD",o.renderTransparentlyOccludedHUD===t.HUDTransparentRenderStyle.OCCLUDED?1:o.renderTransparentlyOccludedHUD===t.HUDTransparentRenderStyle.NOTOCCLUDED?0:.75)}e.HUDSpace=void 0,(i=e.HUDSpace||(e.HUDSpace={}))[i.World=0]="World",i[i.Screen=1]="Screen",i[i.COUNT=2]="COUNT",e.HUD=n,e.bindHUDUniforms=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
