/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../shading/MultipassGeometryTest.glsl"],(function(e,o,t){"use strict";function r(e,r){r.multipassGeometryEnabled&&e.vertex.include(t.multipassGeometryTest),e.vertex.code.add(o.glsl`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${r.multipassGeometryEnabled?o.glsl`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    }
    else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),e.fragment.uniforms.add("color","vec4"),e.fragment.code.add(o.glsl`
  void main() {
    gl_FragColor = color;
  }
  `)}!function(e){function o(e){e.setUniform4f("color",1,1,1,1)}e.bindUniforms=o}(e.HUDOcclusion||(e.HUDOcclusion={})),e.HUDOcclusionPass=r,Object.defineProperty(e,"__esModule",{value:!0})}));
