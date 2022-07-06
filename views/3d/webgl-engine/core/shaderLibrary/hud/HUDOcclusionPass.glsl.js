/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ReadLinearDepth as e}from"../output/ReadLinearDepth.glsl.js";import{multipassGeometryTest as r}from"../shading/MultipassGeometryTest.glsl.js";import{RgbaFloatEncoding as t}from"../util/RgbaFloatEncoding.glsl.js";import{Float2PassUniform as o}from"../../shaderModules/Float2PassUniform.js";import{glsl as a}from"../../shaderModules/interfaces.js";import{Texture2DPassUniform as i}from"../../shaderModules/Texture2DPassUniform.js";function s(s,n){const{vertex:p,fragment:l}=s;n.hasMultipassGeometry&&p.include(r),n.hasMultipassTerrain&&s.varyings.add("depth","float"),p.code.add(a`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${n.hasMultipassGeometry?a`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${n.hasMultipassTerrain?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),n.hasMultipassTerrain&&l.include(e),n.hasMultipassTerrain&&l.uniforms.add([new i("terrainDepthTexture",((e,r)=>r.multipassTerrain.linearDepthTexture)),new o("nearFar",((e,r)=>r.camera.nearFar)),new o("inverseViewport",((e,r)=>r.inverseViewport))]),l.include(t),l.code.add(a`
  void main() {
    gl_FragColor = vec4(1, 1, 1, 1);
    ${n.hasMultipassTerrain?a`
          vec2 uv = gl_FragCoord.xy * inverseViewport;

          //Read the rgba data from the texture linear depth
          vec4 terrainDepthData = texture2D(terrainDepthTexture, uv);

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), nearFar);

          //If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          //Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            gl_FragColor.g = 0.5;
          }`:""}
  }
  `)}export{s as HUDOcclusionPass};
