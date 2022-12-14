/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../output/ReadLinearDepth.glsl","../shading/MultipassGeometryTest.glsl","../util/RgbaFloatEncoding.glsl","../util/WebGL2Utils","../../shaderModules/Float2PassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform","../../shaderModules/TextureSizeUniformType"],(function(e,t,r,o,a,i,s,n,l){"use strict";function p(e,p){const{vertex:u,fragment:d}=e;p.hasMultipassGeometry&&u.include(r.multipassGeometryTest),p.hasMultipassTerrain&&e.varyings.add("depth","float"),u.code.add(s.glsl`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${p.hasMultipassGeometry?s.glsl`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${p.hasMultipassTerrain?"depth = projectAux.posView.z;":""}
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
  `),p.hasMultipassTerrain&&d.include(t.ReadLinearDepth),p.hasMultipassTerrain&&d.uniforms.add([...n.createTexture2DPassSizeUniforms("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture),p.hasWebGL2Context?l.TextureSizeUniformType.None:l.TextureSizeUniformType.InvSize),new i.Float2PassUniform("nearFar",((e,t)=>t.camera.nearFar))]),d.include(o.RgbaFloatEncoding),d.code.add(s.glsl`
  void main() {
    gl_FragColor = vec4(1, 1, 1, 1);
    ${p.hasMultipassTerrain?s.glsl`
          vec2 uv = gl_FragCoord.xy;

          // Read the rgba data from the texture linear depth
          vec4 terrainDepthData = ${a.texelFetch(p,"terrainDepthTexture","uv")};

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), nearFar);

          // If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          // Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            gl_FragColor.g = 0.5;
          }`:""}
  }
  `)}e.HUDOcclusionPass=p,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
