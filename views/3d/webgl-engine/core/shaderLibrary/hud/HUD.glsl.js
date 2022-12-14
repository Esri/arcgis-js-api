/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../attributes/VerticalOffset.glsl","./HUDUniforms","../util/ScreenSizePerspective.glsl","../util/View.glsl","../../shaderModules/Float4PassUniform","../../shaderModules/FloatPassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform","../../../lib/VertexAttribute"],(function(e,t,o,a,i,s,r,n,l,c){"use strict";var f;function d(f,d){f.include(a.ScreenSizePerspective),f.attributes.add(c.VertexAttribute.POSITION,"vec3"),f.attributes.add(c.VertexAttribute.NORMAL,"vec3"),f.attributes.add(c.VertexAttribute.AUXPOS1,"vec4");const p=f.vertex;i.addProjViewLocalOrigin(p,d),i.addCameraPosition(p,d),p.uniforms.add([new s.Float4PassUniform("viewport",((e,t)=>t.camera.fullViewport)),new r.FloatPassUniform("polygonOffset",(e=>e.shaderPolygonOffset)),new r.FloatPassUniform("cameraGroundRelative",((e,t)=>t.camera.aboveGround?1:-1)),new r.FloatPassUniform("renderTransparentlyOccludedHUD",((e,t)=>t.renderTransparentlyOccludedHUD===o.HUDTransparentRenderStyle.Occluded?1:t.renderTransparentlyOccludedHUD===o.HUDTransparentRenderStyle.NotOccluded?0:.75)),new l.Texture2DPassUniform("hudVisibilityTexture",((e,t)=>t.hudVisibilityTexture))]),d.hasVerticalOffset&&t.addVerticalOffset(p),p.constants.add("smallOffsetAngle","float",.984807753012208),p.code.add(n.glsl`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),p.code.add(n.glsl`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
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
}`),d.isDraped&&!d.hasVerticalOffset||i.addViewNormal(p),d.isDraped||(p.uniforms.add(new r.FloatPassUniform("perDistancePixelRatio",((e,t)=>Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2)))),p.code.add(n.glsl`void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
float distanceToCamera = length(posView);
float pixelOffset = distanceToCamera * perDistancePixelRatio * 0.5;
vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;
vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
posModel += modelOffset;
posView += viewOffset;
}`)),d.screenCenterOffsetUnitsEnabled===e.HUDSpace.Screen&&p.uniforms.add(new r.FloatPassUniform("pixelRatio",((e,t)=>t.camera.pixelRatio))),d.hasScreenSizePerspective&&a.addScreenSizePerspectiveAlignment(p),p.code.add(n.glsl`
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
      ${d.isDraped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${d.hasScreenSizePerspective&&(d.hasVerticalOffset||d.screenCenterOffsetUnitsEnabled===e.HUDSpace.Screen)?"vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${d.hasVerticalOffset?d.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${d.hasVerticalOffset?n.glsl`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${d.screenCenterOffsetUnitsEnabled!==e.HUDSpace.Screen?n.glsl`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `:""}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${d.screenCenterOffsetUnitsEnabled===e.HUDSpace.Screen?d.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${d.screenCenterOffsetUnitsEnabled===e.HUDSpace.Screen?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `),p.code.add(n.glsl`bool testVisibilityHUD(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture2D(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}e.HUDSpace=void 0,(f=e.HUDSpace||(e.HUDSpace={}))[f.World=0]="World",f[f.Screen=1]="Screen",f[f.COUNT=2]="COUNT",e.HUD=d,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
