/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../output/ReadLinearDepth.glsl","../../shaderModules/Float2PassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],(function(e,r,a,t,n){"use strict";function i(e,i){i.hasMultipassTerrain&&(e.fragment.include(r.ReadLinearDepth),e.fragment.uniforms.add(new n.Texture2DPassUniform("terrainDepthTexture",((e,r)=>r.multipassTerrain.linearDepthTexture))),e.fragment.uniforms.add(new a.Float2PassUniform("nearFar",((e,r)=>r.camera.nearFar))),e.fragment.uniforms.add(new a.Float2PassUniform("inverseViewport",((e,r)=>r.inverseViewport))),e.fragment.code.add(t.glsl`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${i.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}let s=function(){this.enabled=!1,this.cullAboveGround=!1};e.MultipassTerrainUniforms=s,e.multipassTerrainTest=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
