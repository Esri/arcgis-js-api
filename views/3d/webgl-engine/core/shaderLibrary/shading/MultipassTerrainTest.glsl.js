/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,r){"use strict";function t(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("cameraNearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(r.glsl`
    //Compare the linearized depths of the fragment and the terrain. If fragment is on the wrong side of the terrain, discard it.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function a(e,r,t){t.multipassTerrainEnabled&&t.terrainLinearDepthTexture&&(e.setUniform1i("terrainDepthTexture",10),r.bindTexture(t.terrainLinearDepthTexture,10))}e.bindMultipassTerrainUniforms=a,e.multipassTerrainTest=t,Object.defineProperty(e,"__esModule",{value:!0})}));
