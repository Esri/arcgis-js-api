/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../output/ReadLinearDepth.glsl"],(function(e,t,r){"use strict";function o(e){e.include(r.ReadLinearDepth),e.uniforms.add("geometryDepthTexture","sampler2D"),e.uniforms.add("cameraNearFar","vec2"),e.code.add(t.glsl`
    //Compare the linearized depths of the vertex/fragment and the geometry in the scene. If vertex/fragment is behind geometry, don't draw it.
    bool geometryDepthTest(vec2 pos, float elementDepth){

      float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, cameraNearFar);
      if(elementDepth < (geometryDepth - 1.0)){
        return true;
      }
      return false;
    }
  `)}function a(e,t,r){r.multipassGeometryEnabled&&r.geometryLinearDepthTexture&&(e.setUniform1i("geometryDepthTexture",11),t.bindTexture(r.geometryLinearDepthTexture,11))}e.bindMultipassGeometryUniforms=a,e.multipassGeometryTest=o,Object.defineProperty(e,"__esModule",{value:!0})}));
