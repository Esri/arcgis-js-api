/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ReadLinearDepth as e}from"../output/ReadLinearDepth.glsl.js";import{Float2PassUniform as r}from"../../shaderModules/Float2PassUniform.js";import{glsl as t}from"../../shaderModules/interfaces.js";import{Texture2DPassUniform as a}from"../../shaderModules/Texture2DPassUniform.js";function n(n,o){o.hasMultipassTerrain&&(n.fragment.include(e),n.fragment.uniforms.add(new a("terrainDepthTexture",((e,r)=>r.multipassTerrain.linearDepthTexture))),n.fragment.uniforms.add(new r("nearFar",((e,r)=>r.camera.nearFar))),n.fragment.uniforms.add(new r("inverseViewport",((e,r)=>r.inverseViewport))),n.fragment.code.add(t`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${o.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}class o{constructor(){this.enabled=!1,this.cullAboveGround=!1}}export{o as MultipassTerrainUniforms,n as multipassTerrainTest};
