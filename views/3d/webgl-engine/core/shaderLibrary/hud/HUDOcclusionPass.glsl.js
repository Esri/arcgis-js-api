/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,o){"use strict";(e.HUDOcclusion||(e.HUDOcclusion={})).bindUniforms=function(e){e.setUniform4f("color",1,1,1,1)},e.HUDOcclusionPass=function(e){const t=e;t.vertex.code.add(o.glsl`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

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
  `),t.fragment.uniforms.add("color","vec4"),t.fragment.code.add(o.glsl`
  void main() {
    gl_FragColor = color;
  }
  `)},Object.defineProperty(e,"__esModule",{value:!0})}));
