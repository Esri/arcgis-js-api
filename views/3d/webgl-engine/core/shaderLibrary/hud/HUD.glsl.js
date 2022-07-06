/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{addVerticalOffset as e}from"../attributes/VerticalOffset.glsl.js";import{HUDTransparentRenderStyle as t}from"./HUDUniforms.js";import{ScreenSizePerspective as o,addScreenSizePerspectiveAlignment as a}from"../util/ScreenSizePerspective.glsl.js";import{addProjViewLocalOrigin as i,addCameraPosition as r}from"../util/View.glsl.js";import{Float4PassUniform as s}from"../../shaderModules/Float4PassUniform.js";import{FloatPassUniform as n}from"../../shaderModules/FloatPassUniform.js";import{glsl as l}from"../../shaderModules/interfaces.js";import{Matrix4PassUniform as c}from"../../shaderModules/Matrix4PassUniform.js";import{Texture2DPassUniform as f}from"../../shaderModules/Texture2DPassUniform.js";import{VertexAttribute as d}from"../../../lib/VertexAttribute.js";var p;function u(u,v){u.include(o),u.attributes.add(d.POSITION,"vec3"),u.attributes.add(d.NORMAL,"vec3"),u.attributes.add(d.AUXPOS1,"vec4");const m=u.vertex;i(u,v),r(m,v),m.uniforms.add([new s("viewport",((e,t)=>t.camera.fullViewport)),new n("polygonOffset",(e=>e.shaderPolygonOffset)),new n("cameraGroundRelative",((e,t)=>t.camera.aboveGround?1:-1)),new n("renderTransparentlyOccludedHUD",((e,o)=>o.renderTransparentlyOccludedHUD===t.Occluded?1:o.renderTransparentlyOccludedHUD===t.NotOccluded?0:.75)),new f("hudVisibilityTexture",((e,t)=>t.hudVisibilityTexture))]),v.hasVerticalOffset&&e(m),m.constants.add("smallOffsetAngle","float",.984807753012208),m.code.add(l`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),m.code.add(l`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
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
}`),v.isDraped&&!v.hasVerticalOffset||m.uniforms.add(new c("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix))),v.isDraped||(m.uniforms.add(new n("perDistancePixelRatio",((e,t)=>Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2)))),m.code.add(l`void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
float distanceToCamera = length(posView);
float pixelOffset = distanceToCamera * perDistancePixelRatio * 0.5;
vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;
vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
posModel += modelOffset;
posView += viewOffset;
}`)),v.screenCenterOffsetUnitsEnabled===p.Screen&&m.uniforms.add(new n("pixelRatio",((e,t)=>t.camera.pixelRatio))),v.hasScreenSizePerspective&&a(m),m.code.add(l`
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
      ${v.isDraped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${v.hasScreenSizePerspective&&(v.hasVerticalOffset||v.screenCenterOffsetUnitsEnabled===p.Screen)?"vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${v.hasVerticalOffset?v.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${v.hasVerticalOffset?l`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${v.screenCenterOffsetUnitsEnabled!==p.Screen?l`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `:""}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${v.screenCenterOffsetUnitsEnabled===p.Screen?v.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${v.screenCenterOffsetUnitsEnabled===p.Screen?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `),m.code.add(l`bool testVisibilityHUD(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture2D(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}!function(e){e[e.World=0]="World",e[e.Screen=1]="Screen",e[e.COUNT=2]="COUNT"}(p||(p={}));export{u as HUD,p as HUDSpace};
