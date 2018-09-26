#include <util/vsPrecision.glsl>
#include <util/alignPixel.glsl>
#include <util/hud.glsl>
#include <util/slice.glsl>

void main(void) {
  vec4 posProjCenter;

  // Check for special value of position (0, 0, 0) which is used by the Renderer when graphics
  // are removed before the VBO is recompacted. If this is the case, then we just project outside
  // of clip space.
  if (dot(position, position) > 0.0) {
    // Render single point to center of the pixel to avoid subpixel filtering to affect
    // the marker color
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
